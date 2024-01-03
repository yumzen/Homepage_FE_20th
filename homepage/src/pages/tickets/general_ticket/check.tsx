import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/app/components/Background";
import axios from 'axios';
import { useRouter } from "next/router";


const general_delete = () => {
    const router = useRouter();
    const [buyer, setBuyer] = useState('');
    const [phone_num, setPhone_num] = useState('');
    const [cancelable, setCancelable] = useState(false);
    const [input_phone_num, set_Phone_num] = useState("");
    const [validPhone_num, setValidPhone_num] = useState(true);
    const {merchant_order_id} = router.query;

    useEffect(() => {
        const fetchmerchant_orderData = async () => {
            try {
                if (router.query?.merchant_order_id) {
                    const response = await axios.get(`http://127.0.0.1:8000/tickets/general_complete/?merchant_order_id=${merchant_order_id}`);
                    console.log(response.data);
                    if (response.data) {
                        setBuyer(response.data.data.buyer);
                        setPhone_num(response.data.data.phone_num);
                        setCancelable(response.data.data.cancelable);
                    }
                }
            } catch (error) {
                console.error('Error searching merchant_order_id:', error);
            }
        };

        fetchmerchant_orderData();
    }, [router.query?.merchant_order_id]);

    const handleCancelmerchant_order = async () => {
        if (input_phone_num === phone_num) {
            setValidPhone_num(true);
            console.log(merchant_order_id);
            const formData = new FormData();
            formData.append('merchant_order_id', merchant_order_id as string);
            const mid = merchant_order_id;
            try {
                const response = await axios.delete('http://127.0.0.1:8000/tickets/general_ticket/delete/', {
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('merchant_order canceled:', response.data);
                router.push({
                    pathname: '/tickets/cancel_complete/',
                    query: { mid } 
                })
            } catch (error) {
                console.error('Error canceling merchant_order:', error);
            }
        } else {
            setValidPhone_num(false);
        }
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleCancelmerchant_order();
        }
    };

    
    return  (
        <div className = "h-[600px] sm:h-[700px]  min-h-screen">
        <Background>
        <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px] ">
                <div className="flex flex-col items-center mx-[12.5vw] text-center content-center mt-[20px] sm:mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12}  className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"/>
                    <p className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">예매내역 취소</p>
                    <p className="mt-[16px] sm:mt-[32px] font-[500] text-[10px] sm:text-[14px] leading-[21px] text-[#4A4A4A] whitespace-nowrap">[예매 취소하기] 버튼을 누르시면 예매 취소가 완료됩니다.</p>
                </div>
                {merchant_order_id && (
                    <div className="mt-[12px] sm:mt-[48px] mx-auto items-center content-center flex flex-col ">
                        <div className="mt-[10px] sm:mt-[32px] mx-auto bg-[#F1F5FF] w-[75vw] sm:w-[400px] md:w-[516px] h-[120px] flex-shrink-0 rounded-[8px]">
                            <div className="flex flex-row align-center justify-center text-[10px] sm:text-[12px] font-[700]">
                                <div className="mt-[15px] ml-[24px] sm:w-[80px] md:w-[118px] h-[19px] flex text-center justify-center  items-center"> 예매번호 </div>
                                <div className="mt-[15px] mx-auto sm:w-[80px] md:w-[118px] h-[19px]  flex text-center justify-center  items-center"> 예매자 성명 </div>
                                <div className="mt-[15px] mr-[24px] sm:w-[80px] md:w-[118px] h-[19px]  flex text-center justify-center  items-center "> 취소 가능 여부 </div>
                            </div>
                            <div className="mt-[21px] h-[1px] w-[100%] bg-[#D3D3D3] "/>
                                <div className="flex flex-row align-center justify-center text-[10px] sm:text-[14px] font-[500]">
                                    <div className="mt-[19px] ml-[24px] w-[118px]  h-[21px] flex text-center justify-center items-center "> {merchant_order_id} </div>
                                    <div className="mt-[19px] mx-auto w-[118px] flex text-center justify-center  items-center "> {buyer} </div>
                                    <div className="mt-[19px] mr-[24px] w-[118px] flex text-center justify-center  items-center "> {cancelable ? "취소 가능" : "취소 불가능"} </div>
                                </div>
                            </div>
                        <div className="flex mt-[16px] mx-auto sm:ml-[4px] flex-col w-[75vw] sm:w-[300px] md:w-[516px]">
                            <p className="ml-0 text-left text-[#4A4A4A] text-[10px] sm:text-[12px] leading-[21px]"> 예매 취소 인증 절차입니다.</p>
                            <p className="ml-0 text-left text-[#4A4A4A] text-[10px] sm:text-[12px] leading-[21px]"> 정말 취소하시려면 예매할 때 입력한 전화번호를 입력해주세요.</p>
                            <input type="text" value={input_phone_num} onChange={(e) => set_Phone_num(e.target.value)} placeholder="전화번호를 입력해 주세요." className="mt-[10px] bg-[#FFF] border  border-[#4A4A4A] rounded-[3px] text-[10px] sm:text-[14px] outline-none w-[150px] h-[28px] sm:w-[180px] sm:h-[36px] text-[black] px-[8px]" onKeyDown={handleInputKeyPress}/>
                            {!validPhone_num && <p className="text-[#F00] text-[10px] font-[400] leading-[19px] align-center mt-[2px]">⚠️ 잘못된 입력 정보입니다.</p>}
                        </div>
                        <div className="w-[75vw] sm:w-[400px] md:w-[514px] h-[48px] mt-[20px] sm:mt-[48px] mx-auto flex items-center">
                        <button onClick={handleCancelmerchant_order} className="w-full h-full bg-[#E8E8E8] rounded-[8px] text-center text-[#000] hover:text-[#FFF] text-[14px] font-[600] leading-[19px] hover:bg-[#281CFF]">
                            예매 취소하기
                        </button>
                        </div>
                    </div>
                )}
            </div>
        </Background>
    </div>
    )
};

export default general_delete;