import Image from "next/image";
import { useState } from "react";
import './index.css';
import Navbar from "@/app/components/Navbar";

export default function freshman_ticket(){
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount < 1 ? prevCount + 1 : prevCount)); //최대값을 1로 설정
    };

    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); //최소값을 1로 설정
    };

    const [isCheck, setIsCheck] = useState(true);
    const [isPick, setIsPick] = useState("참");

    const handleCheckboxChange1 = (event: any) => {
    setIsCheck(event.target.value === "true");
    };

    const handleCheckboxChange2 = (event: any) => {
    setIsPick(event.target.value);
    };
    return (
        <>
        <Navbar/>
        <div className="font-['pretendard'] mx-auto flex items-center flex-col mb-[84px]">
            <div className="flex flex-col items-center justify-center text-center mt-[40px]">
                <Image src="/ticket.png" alt="티켓" width={24} height={24}/>
                <div className="mt-[20px] flex flex-row">
                    <div className="font-[700] text-[24px] text-[#0047FF]">신입생 티켓</div>
                    <div className="font-[700] text-[24px]">&nbsp;결제하기</div>
                </div>
                <div className="mt-[20px]">
                    <div className="font-[400] text-[20px]">깔루아 2023 9월 정기공연</div>
                    <div className="font-[400] text-[20px]">2023.09.01 오후 6시</div>
                </div>
            </div>
            <div className="mt-[55px] flex flex-col">
                <div className="pl-[8px] font-[700] text-[24px]">예매 인원을 선택해주세요. </div>
                <div className="w-[1120px] h-[3px] mt-[16px] bg-[#000]"/>
                <div className="pl-[8px]">
                    <div className="mt-[10px] flex flex-row">
                        <div className="text-[14px] text-[#939393]">신입생</div>
                        <div className="ml-[16px] text-[14px] text-[#464646]">신입생 티켓은 1인 1매만 예매 가능합니다.</div>
                    </div>
                    <div className="mt-[4px] relative flex flex-row">
                        <div className="flex flex-row">
                            <div className="w-[156px] h-[76px] flex flex-col justify-center flex-shrink-0 text-[24px] font-[700] text-[#939393]">5000원</div>
                            <div className="flex flex-col ml-0 justify-center flex-shrink-0 text-[24px] font-[700] text-[#0047FF]">0원</div>
                        </div>
                        <div className="absolute left-0 top-7">
                            <Image src="/arrow.png" alt="arrow" width={100} height={100} />
                        </div>
                        <div className="w-[140px] h-[40px] mt-[20px] ml-[200px] flex flex-shrink-0 border border-solid border-[#D9D9D9] rounded-[10px] items-center justify-center">
                            <div className="flex gap-6">
                                <button className="flex px-3 text-center items-center justify-center border-r border-[#D9D9D9] text-[26px] font-[700]" onClick={handleDecrement}>-</button>
                                <p className="text-[26px] font-[700]">{count}</p>
                                <button className="flex px-3 text-center items-center justify-center border-l border-[#D9D9D9] text-[26px] font-[700]" onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1120px] h-[3px] mt-[15px] bg-[#D9D9D9]"/>
                <div className="pl-[8px]">
                    <div className="mt-[10px] flex flex-row">
                        <div className="w-[247px] h-[29px] pt-[6px] font-[700] text-[24px]">예매자 정보 입력 </div>
                        <div className="text-[14px] text-[#464646] flex flex-col">
                            <div>본인확인을 위해 정확한 정보를 입력해주세요.</div>
                            <div className="flex flex-row">
                                홍익대 <p className="text-[#0047FF]">&nbsp;신입생 확인</p>을 위해 <p className="text-[#0047FF]">&nbsp;학과 및 학번 정보</p>를 작성해야 하는 점 양해 부탁드립니다. <p className="text-[#0047FF]">&nbsp;추후 공연장 입장 시 학생증 확인이 이루어질 수 있습니다.</p> 
                            </div>
                        </div>
                    </div>
                    <div className="mt-[33px] flex flex-row ">
                        <div className="input-with-placeholder relative w-[540px] h-[76px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] p-4">
                            <input type="text" placeholder="예매자 이름"/>
                        </div>
                        <div className="input-with-placeholder relative w-[540px] h-[76px] flex-shrink-0 border border-[#464646]  border-solid rounded-[10px] p-4 ml-[20px]">
                            <input type="text" placeholder="연락처"/>
                        </div>
                    </div>
                    <div className="mt-[33px] flex flex-row">
                        <div className="input-with-placeholder relative w-[540px] h-[76px] flex-shrink-0 border border-[#464646]  border-solid rounded-[10px] p-4">
                            <input type="text" placeholder="학과"/>
                        </div>
                        <div className="input-with-placeholder relative w-[540px] h-[76px] flex-shrink-0 border border-[#464646]  border-solid rounded-[10px] p-4 ml-[20px]">
                            <input type="text" placeholder="학번"/>
                        </div>
                    </div>
                </div>
                <div className="w-[1120px] h-[3px] mt-[64px] bg-[#D9D9D9]"/>
                <div className="pl-[8px]">
                    <div className="mt-[10px] flex flex-row">
                        <div className="w-[247px] h-[29px] pt-[6px] font-[700] text-[24px]">티켓수령방법 선택</div>
                        <div className="w-[740px] h-[26px] pt-[10px] ml-[16px] text-[16px] text-[#464646] flex-shrink-0 flex flex-row">
                        티켓현장수령은 예매가 완료되면 부여되는 <div className="text-[#0047FF]">&nbsp;“예약번호"로 공연 당일 티켓을 수령하여 입장</div>합니다.
                        </div>
                    </div>
                    <div className="mt-[33px] text-[20px]">
                        <label className="flex flex-row">
                            <input type="radio" name="현장수령" checked={isCheck} onChange={handleCheckboxChange1} className="mr-[18px] w-[30px] h-[30px] flex-shrink-0"/>
                            <div>현장수령</div>
                        </label>
                    </div>
                </div>
                <div className="w-[1120px] h-[3px] mt-[64px] bg-[#D9D9D9]"/>
                <div className="pl-[8px]">
                    <div className="mt-[10px] flex flex-row">
                        <div className="w-[247px] h-[29px] pt-[6px] font-[700] text-[24px]">신입생 뒷풀이 참여 여부</div>
                        <div className="w-[740px] h-[26px] pt-[10px] ml-[16px] text-[16px] text-[#464646] flex-shrink-0 flex flex-row">
                        홍익대학교 24학번 신입생의 경우 랜덤으로 조가 배정되어 <div className="text-[#0047FF]">&nbsp;뒷풀이</div>가 있을 예정입니다.
                        </div>
                    </div>
                    <div className="mt-[33px] text-[20px] flex flex-row">
                        <label className="flex flex-row">
                            <input type="radio" name="뒷풀이" value={"참"} checked={isPick === "참"}  onChange={handleCheckboxChange2} className="mr-[18px] w-[30px] h-[30px] flex-shrink-0"/>
                            <div>참</div>
                        </label>
                        <label className="ml-[200px] flex flex-row">
                            <input type="radio" name="뒷풀이" value={"불참"} checked={isPick === "불참"} onChange={handleCheckboxChange2} className="mr-[18px] w-[30px] h-[30px] flex-shrink-0"/>
                            <div>불참</div>
                        </label>
                    </div>
                </div>
                <div className="w-[1120px] h-[3px] mt-[64px] bg-[#D9D9D9]"/>
                <div className="pl-[8px]">
                    <div className="mt-[10px] flex flex-row">
                        <div className="w-[247px] h-[29px] pt-[6px] font-[700] text-[24px]">유의사항 및 취소규정</div>
                    </div>
                    <ol className="list-decimal ml-[24px] font-[700] text-[20px] mt-[36px]">
                        <li>예매취소는 24간 이전에만 가능하며  그 이후에는 환불이 불가합니다. </li>
                        <li>여러장을 구매했을 시에는 일괄취소만 가능합니다.</li>
                        <li>예매하기-예매확인 - 예매취소 버튼으로 취소 가능합니다.</li>
                        <li>공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.</li>
                    </ol>
                </div>
            </div>
        </div>
        </>
    );
}

freshman_ticket.getInitialProps = async () => {
    return { noNavbarAndFooter: true };
};