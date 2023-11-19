import { useState, useEffect } from "react";
import axios from 'axios';
import Background from "@/app/components/Background";
import Image from "next/image";
import { useRouter } from "next/router";

export default function freshman_complete(){
    const [reservation_id, setReservationId] = useState('');
    const router = useRouter();
    const { buyer, phone_num, student_id } = router.query;
    
    useEffect(() => {
        const fetchReservationId = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/tickets/freshman_complete/?student_id=${student_id}`);
                if (response.status === 200) {
                    console.log('요청이 성공적으로 처리되었습니다.');
                    console.log('receivedData:', response.data);
                    const reservationId = response.data.reservation_id;
                    setReservationId(reservationId);
                    console.log('reservation_id:', reservationId);
                } else {
                    console.error('요청이 실패했습니다. HTTP 상태 코드:', response.status);
                    console.error('에러 응답:', response.data);
                }
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        };

        if (student_id) {
            fetchReservationId();
        }
    }, [buyer, phone_num, student_id]);



    if (!reservation_id) {
        return (
            <div className = "h-[900px]">
                <Background>
                <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px]">
                <div className="flex flex-col items-center mx-[12.5vw] text-center mt-[40px]">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="티켓" width={75} height={17}/>
                    <div className="mt-[16px] flex flex-row">
                        <div className="font-[700] text-[32px] leading-[42px] whitespace-nowrap ">예매가 완료되었습니다!</div>
                    </div>
                </div>
                <div className="mt-[64px] flex flex-col mx-auto ">
                    <div className="font-[700] text-[20px] leading-[30px]">예매 정보</div>
                    <div className="w-[72.5vw] h-[3px] mt-[16px] bg-[#000] flex "/>
                    <div className="ml-[0.5vw] ">
                        <div className="mt-[32px] flex flex-row items-center">
                            <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">예매번호</div>
                            <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#281CFF]">{reservation_id}</div>
                        </div>
                        <div className="mt-[32px] flex flex-row items-center">
                            <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">이름</div>
                            <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#6A6A6A]">{buyer}</div>
                        </div><div className="mt-[32px] flex flex-row items-center">
                            <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">학번</div>
                            <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#6A6A6A]">{student_id}</div>
                        </div>
                        <div className="mt-[32px] flex flex-row items-center">
                            <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">전화번호</div>
                            <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#6A6A6A]">{phone_num}</div>
                        </div>
                        <div className="mt-[32px] flex flex-row items-center">
                            <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">예매현황</div>
                            <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#979797]">예매완료</div>
                        </div>
                        </div>
                        <div className="w-[72.5vw] h-[3px] mt-[32px] bg-[#D3D3D3] flex"/>
                    </div>
                    <div className="flex ml-[0.5vw] w-[72.5vw] flex-col">
                            <div className="mt-[10px] flex">
                                <div className="w-[247px] h-[29px] pt-[32px] font-[700] text-[20px] leading-[28px]">필독 사항</div>
                            </div>
                            <ol className="list-decimal ml-[24px] font-[500] text-[12px] lg:text-[16px] mt-[44px] leading-[26px]">
                                <li><div className="flex md:flex-row flex-col">계좌이체 결제를 선택하신 분들은 <p className="text-[#281CFF]">&nbsp;결제상태-입금계좌에 24시간 이내로 입금</p>해주시면 자동으로 결제 완료 처리됩니다. </div></li>
                                <li><div className="flex md:flex-row flex-col">결제 취소를 원하시면 <p className="text-[#281CFF]">&nbsp;예매하기 - 결제 내역확인하기에서 예매번호 조회</p>를 통해 취소하실 수 있습니다. </div></li>
                                <li><div className="flex md:flex-row flex-col">여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이 <p className="text-[#281CFF]">&nbsp;일괄처리</p>됩니다. </div></li>
                                <li><div className="flex md:flex-row flex-col">이외에 모든 문의 사항은 <p className="text-[#281CFF]">&nbsp;깔루아 카카오톡</p>을 이용해주시기 바랍니다. </div></li>
                            </ol>
                        </div>
                </div>
                </Background>
            </div>
        )
        }
}