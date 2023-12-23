import dotenv from 'dotenv';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';

dotenv.config();

const IAMPORT_KEY = process.env.NEXT_PUBLIC_IAMPORT_KEY;

declare const window: typeof globalThis & {
    IMP: any;
};


const payment = () => {
    const router = useRouter();
    const { buyer, phone_num, member, price, payment, id } = router.query;
    const [redirect_url, setRedirect_url] = useState("http://localhost:3000/tickets/general_ticket");

    console.log(buyer, phone_num, member, price, payment);
    useEffect(() => {
        const initiatePayment = async () => {
            if (!IAMPORT_KEY) {
                console.error('아임포트 키를 찾을 수 없습니다.');
                return;
            }
        
            if (buyer && phone_num && member && price && payment) {
                try {
                    const IMP = window.IMP;
                    IMP.init(IAMPORT_KEY);
            
                    IMP.request_pay({
                        pg: 'kcp_billing',
                        pay_method: 'card', // 'card'만 지원됩니다.
                        merchant_uid: new Date().getTime(),
                        name: '깔루아 결제',
                        amount : parseInt(price as string, 10), // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (PC에서는 가격이 표시되지 않음)
                        customer_uid: id, // 필수 입력.
                        buyer_name: buyer,
                        buyer_tel: phone_num,
                        m_redirect_url: redirect_url, //모바일에서 결제 완료시 리디렉션될 url
                    }, function(rsp:any){
                        handlePaymentResponse(rsp);
                    });
                } catch (error) {
                    console.error('결제 오류:', error);
                    setRedirect_url('http://localhost:3000/tickets/general_ticket');
                }
            } else {
                console.error('구매자 정보나 결제 금액이 유효하지 않습니다.');
                setRedirect_url('http://localhost:3000/tickets/general_ticket');
            }
        };

        const handlePaymentResponse = (rsp: any) => {
            if (rsp.success) {
                // 결제가 성공했을 때의 처리
                axios({
                    url: `http://localhost:8000/tickets/checkout/`, // 실제 서버의 주소로 변경해야 합니다.
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    data: {
                        imp_uid: rsp.imp_uid,
                        merchant_uid: rsp.merchant_uid
                    }
                }).then((data) => {
                    // 서버 결제 API 성공시 로직
                    console.log("서버로 결제 정보 전송 완료:", data);
                    setRedirect_url('http://localhost:3000/tickets/general_complete');
                }).catch((error) => {
                    console.error("서버로 결제 정보 전송 실패:", error);
                });
            } else {
                alert("실패: 코드(" + rsp.error_code + ") / 메세지(" + rsp.error_msg + ")");
                setRedirect_url('http://localhost:3000/tickets/general_ticket');
            }

            // 여기서부터는 백엔드의 결제 정보를 검증하는 부분입니다.
            axios({
                url: `http://localhost:8000/tickets/validation/`, // 백엔드의 verifyPayment를 호출하는 엔드포인트로 변경해야 합니다.
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: {
                    imp_uid: rsp.imp_uid,
                    merchant_uid: rsp.merchant_uid
                }
            }).then((verifyResponse) => {
                if (verifyResponse.data.success) {
                    console.log("결제 검증 성공:", verifyResponse.data.message);
                    setRedirect_url('http://localhost:3000/tickets/general_complete');
                } else {
                    console.log("결제 검증 실패:", verifyResponse.data.message);
                }
            }).catch((verifyError) => {
                console.error("결제 검증 요청 실패:", verifyError);
                setRedirect_url('http://localhost:3000/tickets/general_ticket');
                router.push({
                    pathname: "/tickets/general_ticket",
                });
            });
        };

        initiatePayment();
    }, [buyer, phone_num, price, router]);


    return (
        <div></div>
    )
}

export default payment;
