import dotenv from 'dotenv';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

dotenv.config();

const IAMPORT_KEY = process.env.NEXT_PUBLIC_IAMPORT_KEY;

declare const window: typeof globalThis & {
    IMP: any;
};


const payment = () => {
    const router = useRouter();
    const { buyer, phone_num, price} = router.query;
    useEffect(() => {
        const initiatePayment = async () => {
        if (!IAMPORT_KEY) {
            console.error('아임포트 키를 찾을 수 없습니다.');
            return;
        }
    
        if (buyer && phone_num && price) {
            try {
            const IMP = window.IMP;
            IMP.init(IAMPORT_KEY);
    
            const { data: { success, error } } = await axios.post('/your_payment_endpoint', {
                    pg: 'kcp_billing',
                    pay_method: 'card', // 'card'만 지원됩니다.
                    merchant_uid: new Date().getTime(),
                    name: '깔루아 결제',
                    amount : parseInt(price as string, 10), // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (PC에서는 가격이 표시되지 않음)
                    customer_uid: 'your-customer-unique-id', // 필수 입력.
                    buyer_email: 'iamport@siot.do',
                    buyer_name: buyer,
                    buyer_tel: phone_num,
                    m_redirect_url: '/tickets/complete', //모바일에서 결제 완료시 리디렉션될 url
            });
    
            if (success) {
                // 결제 성공 시 처리
                alert('결제 성공');
                router.push('/tickets/complete');
            } else {
                // 결제 실패 시 처리
                alert(`결제 실패: ${error}`);
                router.push('/tickets/general_ticket');
            }
            } catch (error) {
            console.error('결제 오류:', error);
            }
        } else {
            console.error('구매자 정보나 결제 금액이 유효하지 않습니다.');
        }
        };
        initiatePayment();
    }, [buyer, phone_num, price, router]);


    return (
        <div></div>
    )
}

export default payment;
