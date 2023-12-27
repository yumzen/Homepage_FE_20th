import dotenv from 'dotenv';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

dotenv.config();

const IAMPORT_KEY = process.env.NEXT_PUBLIC_IAMPORT_KEY;

declare const window: typeof globalThis & {
    IMP: any;
};

const payment = () => {
    const router = useRouter();
    const { buyer, phone_num, price, payment, merchant_order_id } = router.query;
    const [redirect_url, setRedirect_url] = useState("http://localhost:3000/tickets/general_ticket");

    console.log(buyer, phone_num, price, payment);

    const verifyPayment = async (merchant_order_id:string, imp_id:string, amount:any) => {
        const formData = {
            merchant_order_id,
            imp_id,
            amount,
        };
        console.log(merchant_order_id, imp_id, amount);
        try {
            const response = await axios.post('http://localhost:8000/tickets/validation/', formData);
    
            if (response.status === 200) {
                console.log('결제 검증 성공:', response.data);
                setRedirect_url('http://localhost:3000/tickets/general_complete/');
                router.push({
                    pathname: '/tickets/general_complete/',
                    query: { ...router.query, merchant_order_id, phone_num},
                })
            } else {
                console.error('결제 검증 실패:', response.data);
                setRedirect_url('http://localhost:3000/tickets/general_ticket/');
                router.push({
                    pathname: '/tickets/general_ticket/'})
            }
        } catch (error) {
            console.error('결제 검증 요청 실패:', error);
            setRedirect_url('http://localhost:3000/tickets/general_ticket/');
            router.push({
                pathname: '/tickets/general_ticket/'})
        }
    };

    useEffect(() => {
        const initiatePayment = async () => {
            if (!IAMPORT_KEY) {
                console.error('아임포트 키를 찾을 수 없습니다.');
                return;
            }
            console.log("ㅇ", buyer, phone_num, price, payment, merchant_order_id);
        
            if (buyer && phone_num && price && payment && merchant_order_id) {
                try {
                    const IMP = window.IMP;
                    IMP.init(IAMPORT_KEY);
            
                    IMP.request_pay({
                        pg: 'kakaopay.TC0ONETIME',
                        pay_method: 'card',
                        merchant_uid: new Date().getTime(),
                        name: '깔루아 결제',
                        amount: parseInt(price as string, 10),
                        customer_uid: merchant_order_id, 
                        buyer_name: buyer,
                        buyer_tel: phone_num,
                        m_redirect_url: redirect_url,
                    }, function(rsp:any){
                        if ( rsp.success ) {
                            var msg = '결제가 완료되었습니다.';
                            msg += ' 고유ID : ' + rsp.imp_uid;
                            msg += ', 상점 거래ID : ' + rsp.merchant_uid;
                            msg += ', 결제 금액 : ' + rsp.paid_amount;
                            msg += ', 카드 승인번호 : ' + rsp.apply_num;
                        } else {
                            var msg = '결제에 실패하였습니다.';
                            msg += '에러내용 : ' + rsp.error_msg;
                        }
                        console.log(msg);
                        verifyPayment(rsp.merchant_uid, rsp.imp_uid, rsp.paid_amount);
                    });
                } catch (error) {
                    console.error('결제 오류:', error);
                    setRedirect_url('http://localhost:3000/tickets/general_ticket/');
                    router.push({
                        pathname: '/tickets/general_ticket/'})
                }
            } else {
                console.log('구매자 정보가 아직 로딩되지 않았습니다.');
            }
        };

        initiatePayment();
    }, [buyer, phone_num, price, payment]);

    return (
        <div></div>
    );
}

export default payment;
