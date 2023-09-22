import dotenv from 'dotenv';
import { useState } from 'react';
dotenv.config();

const IAMPORT_KEY = process.env.NEXT_PUBLIC_IAMPORT_KEY;

declare const window: typeof globalThis & {
    IMP: any;
};


const payment = () => {

    const iamportPayment = () => {
        console.log("importPayment 실행!");
        var IMP = window.IMP;
        IMP.init(IAMPORT_KEY); // iamport 가맹점 식별코드
        IMP.request_pay(
            {
                pg: 'kcp_billing',
                pay_method: 'card', // 'card'만 지원됩니다.
                merchant_uid: 'order_monthly_0001', // 상점에서 관리하는 주문 번호
                name: '최초인증결제',
                amount: 500, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (PC에서는 가격이 표시되지 않음)
                customer_uid: 'your-customer-unique-id', // 필수 입력.
                buyer_email: 'iamport@siot.do',
                buyer_name: '아임포트',
                buyer_tel: '02-1234-1234',
                m_redirect_url: '{모바일에서 결제 완료 후 리디렉션 될 URL}', // 예: https://www.my-service.com/payments/complete/mobile
            },
            function (rsp: any) {
                if (rsp.success) {
                    alert('빌링키 발급 성공');
                } else {
                    alert('빌링키 발급 실패');
                }
            }
        );
    };
    
    iamportPayment();
    return (
        <div></div>
    )
}

export default payment;
