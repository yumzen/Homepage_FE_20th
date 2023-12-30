import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import '../index.css';
import Background from "@/app/components/Background";
import axios from 'axios';
import Error_modal from "./error_modal";


export default function freshman_ticket(){
    const router = useRouter();
    const [count, setCount] = useState(1);
    const [buyer, setBuyer] = useState('');
    const [phone_num, setphone_num] = useState('');
    const [major, setmajor] = useState('');
    const [student_id, setstudent_id] = useState('');
    const [isCheck, setIsCheck] = useState(true);
    const [meeting, setMeeting] = useState(true);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const isDataComplete =
        buyer.trim() !== '' &&
        phone_num.trim() !== '' &&
        major.trim() !== '' &&
        student_id.trim() !== '' &&
        true;
        setIsFormComplete(isDataComplete);

    }, [buyer, phone_num, major, student_id]);

    const handleSubmit = async () => {
        
        try {
            const formData = {
                buyer,
                phone_num,
                major,
                student_id,
                meeting,
            };
            const response = await axios.post('http://localhost:8000/tickets/freshman_ticket/', formData);
            console.log(response);
            if (response.status === 200) {
                console.log('요청이 성공적으로 처리되었습니다.');
                console.log('응답 데이터:', response.data);
                const reservation_id = response.data.data.reservation_id;
                router.push({
                    pathname: "/tickets/freshman_complete",
                    query: { ...router.query, reservation_id },
                });

            } else {
                console.error('요청이 실패했습니다. HTTP 상태 코드:', response.status);
                console.error('에러 응답:', response.data);
                setIsError(true);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            setIsError(true);
        }
    };

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount < 1 ? prevCount + 1 : prevCount)); //최대값을 1로 설정
    };

    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); //최소값을 1로 설정
    };

    const handleCheckboxChange1 = (event: any) => {
        setIsCheck(event.target.value === "true");
    };

    const handleCheckboxChange2 = () => {
        setMeeting(!meeting);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phone_num = event.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
        setphone_num(phone_num);
    };

    return (
        <div className="w-[100%] h-[1300px] sm:h-[1900px] lg:h-[1800px] z-60">
            <Background>
                <div className=" font-['pretendard'] px-[12.5vw] flex items-center flex-col mb-[84px]">
                <div className="flex flex-col items-center mx-[12.5vw] text-center sm:mt-[40px]">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="티켓" width={75} height={17} className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"/>
                    <div className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">
                        <div className="text-[#281CFF]">신입생 티켓</div>
                        <span>&nbsp;예매하기</span>
                    </div>
                    <div className="mt-[16px] sm:mt-[32px] font-[500] text-[12px] sm:text-[14px] leading-[21px]">
                        <div>깔루아 2023 9월 정기공연</div>
                        <div>2023.09.01 오후 6시</div>
                    </div>
                </div>
                <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto w-[100%]">
                    <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">예매 인원을 선택해주세요. </div>
                    <div className="mx-auto w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[8px] sm:mt-[16px] bg-[#000] flex "/>
                    <div className="ml-[0.5vw] ">
                        <div className="mt-[12px] sm:mt-[32px] flex flex-row">
                            <div className="text-[12px] sm:text-[14px] font-[500] leading-[21px] text-[#6A6A6A]">신입생</div>
                            <div className="ml-[5vw] text-[10px] sm:text-[14px] font-[500] w-[60vw] leading-[21px] text-[#2D2D2D]">신입생 티켓은 1인 1매만 예매 가능합니다.</div>
                        </div>
                        <div className="mt-[12px] sm:mt-[16px] relative flex flex-row justify-between sm:justify-normal">
                            <div className="flex flex-row">
                                <div className="w-[68px] sm:w-[120px] h-[26px] sm:h-[76px] flex flex-col justify-center flex-shrink-0 text-[16px] sm:text-[24px] font-[700] text-[#939393]">5000원</div>
                                <div className="flex flex-col justify-center flex-shrink-0 text-[16px] sm:text-[24px] leading-[28px] font-[700] text-[#281CFF]">0원</div>
                            </div>
                            <div className="absolute left-0 top-1 sm:top-7">
                                <Image src="/assets/images/tickets/Arrow.svg" alt="arrow" width={100} height={100} className="w-[60px] h-[15px] sm:w-[auto] sm:h-[auto]"/>
                            </div>
                            <div className="bg-[white] w-[76px] sm:w-[110px] h-[26px] sm:h-[35px] ml-[5vw] sm:mt-[20px] flex flex-shrink-0 border border-solid border-[#D9D9D9] rounded-[3px] items-center justify-center mr-[5vw] sm:mr-0">
                                <div className="flex gap-2 sm:gap-4 text-[20px] sm:text-[26px] font-[700]">
                                    <button className="flex h-[25.9px] sm:h-[35px] my-auto ml-[2px] pr-[7px] sm:ml-0 sm:pr-[8px] text-center items-center justify-center border-r text-[#939393] border-[#D9D9D9]" onClick={handleDecrement}>-</button>
                                    <p>{count}</p>
                                    <button className="flex h-[25.9px] sm:h-[35px] my-auto pl-[6px] sm:pl-[8px] text-center items-center justify-center border-l text-[#939393] border-[#D9D9D9]" onClick={handleIncrement}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]"/>
                    <div className="mx-auto ml-[0.5vw]">
                        <div className=" flex lg:flex-row flex-col ">
                            <div className="mt-[12px] sm:mt-[30px] w-[140px] h-[29px] font-[700] pt-[8px] text-[16px] sm:text-[20px] leading-[24px]">예매자 정보 입력</div>
                            <div className="w-[80vw] h-[50px] lg:w-[60vw] text-[10px] sm:text-[14px] text-[#464646] lg:ml-[2.5vw] ml-[0.5vw] flex flex-col lg:mt-[16px] mt-[12px] sm:mt-[24px] ">
                                <div>본인확인을 위해 정확한 정보를 입력해주세요.</div>
                                <div className="flex flex-col">
                                    <div className="flex whitespace-nowrap">
                                        <p> 홍익대</p><p className="text-[#281CFF] flex flex-row">&nbsp;신입생 확인</p>을 위해 <p className="text-[#281CFF]">&nbsp;학과 및 학번 정보</p><p>를 작성해야 합니다.</p>
                                    </div>
                                    <div className="text-[#0047FF] flex">추후 공연장 입장 시 학생증 확인이 이루어질 수 있습니다.</div> 
                                </div>
                            </div>
                        </div>
                        <div className="mt-[12px] sm:mt-[18px] flex flex-col md:flex-row mx-auto">
                            <label className="text-[12px] sm:text-[16px] ml-[1vw] leading-[26px] font-[500] items-center flex h-[32px] sm:h-[43px] w-[7.5vw] min-w-[50px]">이름</label>
                            <div className="input-with-placeholder relative lg:w-[21vw] md:w-[18vw] w-[65vw] ml-[1vw] h-[32px] sm:h-[43px] flex-shrink-0 border bg-[white] border-[#6A6A6A] border-solid rounded-[3px] px-2">
                                <input value={buyer} type="text" placeholder="" onChange={(e) => setBuyer(e.target.value)}/>
                            </div>
                            <label className="mt-[8px] sm:mt-0 ml-[1vw] md:ml-[7.5vw] text-[12px] sm:text-[16px] leading-[26px] font-[500] items-center flex h-[32px] sm:h-[43px] w-[7.5vw] min-w-[55px]">연락처</label>
                            <div className="input-with-placeholder relative lg:w-[24vw] md:w-[18vw] w-[65vw] ml-[1vw] h-[32px] sm:h-[43px] flex-shrink-0 border bg-[white] border-[#6A6A6A] border-solid rounded-[3px] px-2">
                                <input value={phone_num} type="text" placeholder="‘-’없이 입력해주세요. 예) 01012345678"  onChange={handlePhoneNumberChange} />
                            </div>
                        </div>
                        <div className="mt-[8px] sm:mt-[20px] flex flex-col md:flex-row">
                            <label className="text-[12px] sm:text-[16px] ml-[1vw]  leading-[26px] font-[500] items-center flex h-[32px] sm:h-[43px] w-[7.5vw] min-w-[50px]">학과</label>
                            <div className="input-with-placeholder relative lg:w-[21vw] md:w-[18vw] w-[65vw] ml-[1vw] h-[32px] sm:h-[43px] flex-shrink-0 border bg-[white] border-[#6A6A6A] border-solid rounded-[3px] px-2">
                                <input value={major} type="text" placeholder="" onChange={(e) => setmajor(e.target.value)} />
                            </div>
                            <label className="mt-[8px] sm:mt-0 ml-[1vw] md:ml-[7.5vw] text-[12px] sm:text-[16px] leading-[26px] font-[500] items-center flex h-[32px] sm:h-[43px] w-[7.5vw] min-w-[55px]">학번</label>
                            <div className="input-with-placeholder relative lg:w-[24vw] md:w-[18vw] w-[65vw] ml-[1vw] h-[32px] sm:h-[43px] flex-shrink-0 border bg-[white] border-[#6A6A6A] border-solid rounded-[3px] px-2">
                                <input value={student_id} type="text" placeholder="예) C123456" onChange={(e) => setstudent_id(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]"/>
                    <div className="ml-[0.5vw]">
                        <div className="mt-[12px] sm:mt-[32px] flex lg:flex-row flex-col">
                            <div className="w-[160px] h-[29px] font-[700] text-[16px] sm:text-[20px] leading-[30px]">티켓수령방법 선택</div>
                            <div className="whitespace-pre-wrap w-[47.5vw] h-[26px] lg:ml-[2.5vw] ml-[0.5vw] lg:mt-[5px] mt-[12px] sm:mt-[15px] text-[10px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-col lg:flex-row">
                                <p className="whitespace-nowrap">티켓현장수령은 예매가 완료되면 부여되는</p> 
                                <div className="flex flex-row">
                                    <p className="hidden lg:flex">&nbsp;</p><p className="text-[#281CFF] whitespace-nowrap">[예약번호]로 공연 당일 티켓을 수령하여 입장</p><p className="whitespace-nowrap">합니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[20px] mt-[12px] sm:mt-[18px]">
                            <label className="flex flex-row">
                                <div className="flex items-center justify-center mt-[12px] sm:mt-[20px]">
                                    <input type="radio" name="현장수령" checked={isCheck} onChange={handleCheckboxChange1} className="mr-[18px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] accent-[#281CFF] flex-shrink-0"/>
                                    <div className="text-[12px] sm:text-[20px] font-[500] leading-[30px]">현장수령</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="mx-auto w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]"/>
                    <div className="ml-[0.5vw]">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-[200px] h-[29px] mt-[12px] sm:mt-[32px] font-[700] text-[16px] sm:text-[20px] leading-[30px] whitespace-nowrap">신입생 뒷풀이 참여 여부</div>
                            <div className="lg:w-[740px] h-[26px] lg:mt-[40px] mt-[15px] lg:ml-[56px] ml-[0.5vw] whitespace-nowrap text-[10px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-row">
                            신입생의 경우 랜덤으로 조가 배정되어 <span className="text-[#281CFF] whitespace-nowrap ">&nbsp;뒷풀이</span>가 있을 예정입니다.
                            </div>
                        </div>
                        <div className="mt-[12px] sm:mt-[20px] text-[12px] sm:text-[20px] flex flex-row">
                            <label className="flex flex-row items-center justify-center ">
                                <input type="radio" name="뒷풀이" value={"참"} checked={meeting === true}  onChange={handleCheckboxChange2} className="mr-[18px] accent-[#281CFF] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] flex-shrink-0"/>
                                <div className="font-[500] w-[80px]">참</div>
                            </label>
                            <label className="ml-[5vw] flex-row flex items-center justify-center ">
                                <input type="radio" name="뒷풀이" value={"불참"} checked={meeting === false} onChange={handleCheckboxChange2} className="mr-[18px] accent-[#281CFF] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] flex-shrink-0"/>
                                <div className="font-[500]">불참</div>
                            </label>
                        </div>
                    </div>
                    <div className="mx-auto w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]"/>
                    <div className="ml-[0.5vw]">
                        <div className="mt-[12px] sm:mt-[20px] flex flex-row">
                            <div className="w-[100%] h-[29px] sm:pt-[32px] font-[700] text-[16px] sm:text-[20px] sm:leading-[28px] whitespace-nowrap">유의사항 및 취소규정</div>
                        </div>
                        <ol className="list-decimal ml-[12px] sm:ml-[24px] font-[500] text-[10px] sm:text-[14px] lg:text-[16px] mt-[12px] sm:mt-[44px] leading-[26px]">
                            <li>예매취소는 24시간 이전에만 가능하며  그 이후에는 환불이 불가합니다. </li>
                            <li>여러장을 구매했을 시에는 일괄취소만 가능합니다.</li>
                            <li>예매하기-예매확인 - 예매취소 버튼으로 취소 가능합니다.</li>
                            <li>공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.</li>
                        </ol>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[48px] sm:mt-[94px]">
                        <button disabled={!isFormComplete} onClick={handleSubmit} className="w-[170px] h-[35px] sm:w-[270px] sm:h-[53px] felx items-center justify-center rounded-[6px] bg-[#281CFF] text-[white] text-[12px] sm:text-[18px] font-[700] leading-[17px] text-center">예매하기</button>
                </div>
            </div>
            {isError && <Error_modal />}
        </Background>
        </div>
    );
}