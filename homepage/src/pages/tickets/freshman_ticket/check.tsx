import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/app/components/Background";
import axios from 'axios';
import { useRouter } from "next/router";


const freshman_delete = () => {
    const router = useRouter();
    const [buyer, setBuyer] = useState('');
    const [phone_num, setPhone_num] = useState('');
    const [student_id, setStudent_id] = useState('');
    const [cancelable, setCancelable] = useState(false);
    const [input_sid, set_sid] = useState("");
    const [validSid, setValidSid] = useState(true);
    const {reservation_id} = router.query;

    useEffect(() => {
        const fetchReservationData = async () => {
            try {
                if (router.query?.reservation_id) {
                    const response = await axios.get(`http://localhost:8000/tickets/freshman_complete/?reservation_id=${router.query.reservation_id}`);
                    console.log(response.data);
                    if (response.data) {
                        setBuyer(response.data.data.buyer);
                        setStudent_id(response.data.data.student_id);
                        setPhone_num(response.data.data.phone_num);
                        setCancelable(response.data.data.cancelable);
                    }
                }
            } catch (error) {
                console.error('Error searching reservation:', error);
            }
        };

        fetchReservationData();
    }, [router.query?.reservation_id]);

    const handleCancelReservation = async () => {
        if (input_sid === student_id) {
            setValidSid(true);
            console.log(reservation_id);
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/tickets/freshman_ticket/delete/?reservation_id=${reservation_id}`);
                console.log('Reservation canceled:', response.data); // 성공 시 응답 데이터 출력
                // 성공적으로 삭제되었을 때 추가적인 동작 수행
            } catch (error) {
                console.error('Error canceling reservation:', error);
                // 삭제 중 오류 발생 시 에러 핸들링
            }
        } else {
            setValidSid(false);
        }
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleCancelReservation();
        }
    };

    
    return  (
        <div className = "h-[650px]">
        <Background>
            <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px]">
                <div className="flex flex-col items-center text-center content-center mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12}/>
                    <p className="font-[700] mt-[12px] text-[24px] leading-[28px]">예매내역 취소</p>
                    <p className="mt-[20px] font-[500] text-[14px] laeding-[21px] text-[#4A4A4A]">[예매 취소하기] 버튼을 누르시면 예매 취소가 완료됩니다.</p>
                </div>
                {reservation_id && (
                    <div className="mt-[48px] mx-auto items-center content-center flex flex-col ">
                        <div className="mt-[16px] mx-auto bg-[#F1F5FF] w-[516px] h-[120px] flex-shrink-0 rounded-[8px]">
                            <div className="flex flex-row align-center justify-center">
                                <div className="mt-[15px] ml-[24px] w-[118px] h-[19px] flex text-center justify-center  items-center text-[12px] font-[700]"> 예매번호 </div>
                                <div className="mt-[15px] mx-auto  w-[118px] h-[19px]  flex text-center justify-center  items-center text-[12px] font-[700]"> 예매자 성명 </div>
                                <div className="mt-[15px] mr-[24px] w-[118px] h-[19px]  flex text-center justify-center  items-center text-[12px] font-[700]"> 취소 가능 여부 </div>
                            </div>
                            <div className="mt-[21px] h-[1px] w-[100%] bg-[#D3D3D3] "/>
                                <div className="flex flex-row align-center justify-center">
                                    <div className="mt-[19px] ml-[24px] w-[118px]  h-[21px] flex text-center justify-center items-center text-[14px] font-[500]"> {reservation_id} </div>
                                    <div className="mt-[19px] mx-auto w-[118px] flex text-center justify-center  items-center text-[14px] font-[500]"> {buyer} </div>
                                    <div className="mt-[19px] mr-[24px] w-[118px] flex text-center justify-center  items-center text-[14px] font-[500]"> {cancelable ? "취소 가능" : "취소 불가능"} </div>
                                </div>
                        </div>
                        <div className="flex mt-[16px] ml-[4px] flex-col w-[516px]">
                            <p className="ml-0 text-left text-[#4A4A4A] text-[12px] leading-[21px]"> 예매 취소 인증 절차입니다.</p>
                            <p className="ml-0 text-left text-[#4A4A4A] text-[12px] leading-[21px]"> 정말 취소하시려면 예매하실 때 입력한 학번을 입력해주세요.</p>
                            <input type="text" value={input_sid} onChange={(e) => set_sid(e.target.value)} placeholder="학번을 입력해 주세요." className="mt-[10px] bg-[#FFF] border  border-[#4A4A4A] rounded-lg text-[14px] outline-[#000] w-[180px] h-[36px] text-[black] px-[8px]" onKeyDown={handleInputKeyPress}/>
                            {!validSid && <p className="text-[#F00] text-[10px] font-[400] leading-[19px] align-center mt-[2px]">⚠️ 잘못된 입력 정보입니다.</p>}
                        </div>
                        <div className="w-[514px] h-[48px] mt-[40px] mx-auto flex items-center">
                        <button className="w-full h-full bg-[#E8E8E8] rounded-[8px] text-center text-[#000] hover:text-[#FFF] text-[14px] font-[600] leading-[19px] hover:bg-[#281CFF]" onClick={handleCancelReservation}>
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

export default freshman_delete;