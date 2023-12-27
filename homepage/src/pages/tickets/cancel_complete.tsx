import { useState, useEffect } from "react";
import axios from 'axios';
import Background from "@/app/components/Background";
import Image from "next/image";
import { useRouter } from "next/router";

export default function freshman_complete(){
    const router = useRouter();
    const { rid } = router.query;


    return (
        <div className = "h-[900px]">
            <Background>
            <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px]">
            <div className="flex flex-col items-center mx-[12.5vw] text-center mt-[40px]">
                <Image src="/assets/images/tickets/divider_medium.svg" alt="티켓" width={75} height={17}/>
                <div className="mt-[16px] flex flex-row">
                    <div className="font-[700] text-[32px] leading-[42px] whitespace-nowrap ">예매 취소가 완료되었습니다.</div>
                </div>
            </div>
            <div className="mt-[64px] flex flex-col mx-auto ">
                <div className="font-[700] text-[20px] leading-[30px]">예매 정보</div>
                <div className="w-[72.5vw] h-[3px] mt-[16px] bg-[#000] flex "/>
                <div className="ml-[0.5vw] ">
                    <div className="mt-[32px] flex flex-row items-center">
                        <div className="text-[20px] w-[100px] font-[500] leading-[0.4px]">예매번호</div>
                        <div className="ml-[5.5vw] text-[16px] font-[500] w-[60vw] leading-[21px] text-[#281CFF]">{rid}</div>
                    </div>
                    </div>
                    <div className="w-[72.5vw] h-[3px] mt-[32px] bg-[#D3D3D3] flex"/>
                </div>
                <div className="flex ml-[0.5vw] w-[72.5vw] flex-col">
                        <div className="mt-[10px] flex">
                            <div className="w-[247px] h-[29px] pt-[32px] font-[700] text-[20px] leading-[28px]">필독 사항</div>
                        </div>
                        <ol className="list-decimal ml-[24px] font-[500] text-[12px] lg:text-[16px] mt-[44px] leading-[26px]">
                            <li><div className="flex md:flex-row flex-col">계좌이체/카카오페이 결제를 선택하신 분들은 <p className="text-[#281CFF]">&nbsp;24시간 이내</p>로 자동 환불처리될 예정입니다. </div></li>
                            <li><div className="flex md:flex-row flex-col">여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이 <p className="text-[#281CFF]">&nbsp;일괄취소 처리</p>됩니다. </div></li>
                            <li><div className="flex md:flex-row flex-col">이외에 모든 문의 사항은 <p className="text-[#281CFF]">&nbsp;깔루아 카카오톡</p>을 이용해주시기 바랍니다. </div></li>
                        </ol>
                    </div>
            </div>
            </Background>
        </div>
    );
}