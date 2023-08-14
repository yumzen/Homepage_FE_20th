"use client"
import dotenv from 'dotenv';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
dotenv.config();

const apikey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const data = [
    {
    image: '/assets/images/tickets/poster.png', 
    title: "2023년 9월 정기 공연",
    where: "001 클럽",
    when: "2023년 9월 1일 오후 6시",
    ticket: { freshman: "무료", regular: "5000원" }
    }
];

declare global {
    interface Window {
    kakao: any;
    }
}

const OPTIONS = [
{ value: "18시 00분", name: "18시 00분" },
{ value: "18시 30분", name: "18시 30분" },
{ value: "19시 00분", name: "19시 00분" },
];

const SelectBox = (props: any) => {
    return (
    <select className="appearance-none outline-none text-xs cursor-pointer w-[236px] h-[45px] rounded-[30px] text-center border border-solid border-[#000]">
        <option value="" disabled >입장 시간을 선택하세요.</option>
        {props.options.map((option: any) => (
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
        ))}
    </select>
    );
};

export default function Tickets() {
    const [nowUrl, setNowUrl] = useState("");

    useEffect(() => {
        setNowUrl(window.location.href);
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}&autoload=false`;
        document.head.appendChild(script);
    
        script.onload = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map");
            const options = {
            center: new window.kakao.maps.LatLng(37.55099593968109, 126.92401144435387),
            level: 3,
            };
    
            const map = new window.kakao.maps.Map(container, options);
            var markerPosition = new window.kakao.maps.LatLng(37.55099593968109, 126.92401144435387);
            var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            });

            window.kakao.maps.event.addListener(marker, 'click', function() {
                window.open('https://place.map.kakao.com/23696074', '_blank');
            });
    
            marker.setMap(map);
            marker.setDraggable(true);
        });
        };
    }, []);

function copyUrl() {
    navigator.clipboard.writeText(nowUrl).then(res => {
    alert("주소가 복사되었습니다!");
    });
}


    return (
    <div className="font-['pretendard'] mx-auto flex flex-col items-center justify-center mb-[84px]">
        <div className=" mt-[30px] flex flex-row flex-shrink-0 ">
            <Image src={data[0].image} alt='포스터' width={284} height={402} priority/>
            <div className="w-[804px] h-[402px] ml-[32px] flex-shrink-0">
                <div className="w-[64px] h-[16px] ml-[8px]  flex-shrink-0 rounded-[40px] bg-[#0047FF] text-center text-[8px] font-[400] text-[#FFF]">예매가능</div>
                <div className="flex flex-row">
                    <div className="mt-[19px] ml-[8px] flex flex-shrink-0 text-black font-[600] text-[20px]">{data[0].title}</div>
                    <div className="ml-[389px] flex mt-[19px]">
                        <Image src='/assets/images/layout/instagram.png' alt='인스타그램' width={22} height={23} className="w-[22px] h-[23px]"/>
                        <Link href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA==" className="ml-[2px] mt-[3px] font-[400] text-[10px] flex items-center justify-center w-[78px] h-[17px]" passHref>게시물 보러가기</Link>
                        <Image src='/assets/images/tickets/share.png' alt='share' width={21} height={23} className="w-[21px] h-[23px] ml-[16px]"/>
                        <div onClick={copyUrl} className="ml-[2px] mt-[3px] font-[400] text-[10px] flex items-center justify-center w-[78px] h-[17px]">링크 공유하기</div>
                    </div>
                </div>
                <div className="mt-[16px] w-[804px] h-[1px] bg-black flex felx-column"/>
                <div className="mt-[24px] w-[804px] h-[1px] flex flex-row">
                    <div className="flex flex-col">
                        <div className="ml-[8px] flex w-[270px]">
                            <div className="text-[12px] font-[400] w-[21px] text-center">장소</div>
                            <div className="text-[12px] ml-[50px] w-[193px]">{data[0].where}</div>
                        </div>
                        <div className="mt-[24px] ml-[8px] flex w-[270px]">
                            <div className="text-[12px] w-[21px] text-center">일시</div>
                            <div className="text-[12px] ml-[50px] w-[193px]">{data[0].when}</div>  
                        </div>
                        <div className="mt-[24px] ml-[8px] w-[400px] border-b flex bg-[#D9D9D9]"/>
                        <div className="mt-[24px] ml-[8px] flex flex-row w-[400px]">
                            <div className="flex flex-row">
                                <div className="text-[12px] w-[21px] h-[67px] flex items-center justify-center text-center">
                                    가격
                                </div>
                                <div className="flex flex-col ml-[50px] mt-[6px]">
                                    <div className="text-[12px] w-[335px] h-[25px] flex flex-row items-center">
                                        <div className="text-[12px] w-[73px]">홍익대 신입생</div>
                                        <div className="text-[12px] ml-[45px] w-[89px] text-[#0047FF] font-[700]">{data[0].ticket.freshman}</div>
                                        <div className="text-[12px] ml-[17px] w-[111px] text-[#939393]">1인 1매</div>
                                    </div>
                                    <div className="text-[12px] mt-[10px] w-[335px] h-[25px] flex flex-row items-center">
                                        <div className="text-[12px] w-[73px]">일반티켓</div>
                                        <div className="text-[12px] ml-[45px] w-[89px] font-[700]">{data[0].ticket.regular}</div>
                                        <div className="text-[12px] ml-[17px] w-[111px] text-[#939393]">1인 5매까지 예매 가능</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[92px] w-[264px] h-[33px] flex flex-row flex-shrink-0 rounded-[20px] border border-solid border-[#939393]">
                            <div className="flex w-[123px] h-[33px] justify-center items-center flex-shrink-0 text-center text-[10px] font-[400px] text-[#464646]">이미 티켓을 구매하셨나요?</div>
                            <div className="flex flex-shrink-0 justify-center items-center">
                                <Image src='/assets/images/tickets/handpoint.png' alt='poiner' width={16} height={8} className="ml-[40px] w-[16px] h-[8px]"/>
                            </div>
                            <button className="flex w-[90px] h-[33px] justify-center items-center flex-shrink-0 text-center text-[10px] font-[400px] text-[#464646]">확인하러 가기</button>

                        </div>
                    </div>
                    <div id="map" className=" ml-[78px] w-[304px] h-[312px] flex-shrink-0"></div>
                </div>
            </div>
        </div>
        <div className="w-[1113px] h-[254px] flex-shrink-0 rounded-[30px] border-solid border-[#6C6C6C] border mt-[55px]">
            <div className="flex flex-row">
                <div className="w-[402px] h-[254px] border-r flex flex-row">
                    <div className="w-[58px] h-[84px] flex-shrink-0 mt-[24px] ml-[32px]">
                        <div className="font-[400] text-[10px]">Step 1</div>
                        <div className="font-[700] text-[10px] mt-[20px]">날짜 선택하기</div>
                        
                    </div>
                    <div className="w-[236px] h-[208px] ml-[40px] mt-[8px]">
                        <Calendar />
                    </div>  
                </div>
                <div className="w-[402px] h-[254px] border-r flex flex-col">
                    <div className="flex flex-row">
                        <div className="w-[58px] h-[84px] flex-shrink-0 mt-[24px] ml-[24px]">
                            <div className="font-[400] text-[10px]">Step 2</div>
                                <div className="font-[700] text-[10px] mt-[20px]">시간 선택하기</div>
                        </div>
                        <div className="w-[236px] h-[45px] ml-[32px] mt-[25px] rounded-[30px]">
                            <SelectBox options={OPTIONS} />
                        </div>
                    </div>
                    <div className="w-[402px] h-[1px] bg-[#D9D9D9] flex flex-row">
                        <div className="w-[58px] h-[84px] flex-shrink-0 mt-[24px] ml-[24px]">
                            <div className="flex w-[270px] text-center">
                                <div className="text-[10px] font-[700] w-[100px] text-start">예매 가능 좌석</div>
                                <div className="text-[12px] font-[700] ml-[100px] w-[193px] ">230석</div>
                            </div>
                            <div className="mt-[24px] flex w-[270px] text-center">
                                <div className="text-[10px] font-[400] w-[100px] text-start">홍익대 신입생</div>
                                <div className="text-[12px] font-[700] ml-[100px] w-[193px]">110석</div>  
                            </div>
                            <div className="mt-[24px]  flex w-[270px] text-center">
                                <div className="text-[10px] font-[400] w-[100px] text-start">일반 좌석</div>
                                <div className="text-[12px] font-[700] ml-[100px] w-[193px]">120석</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link href="tickets/freshman_ticket">
                    <button className="w-[264px] h-[56px] flex-shrink-0 ml-[24px] mt-[55px] rounded-[30px] bg-[#0047FF] text-[#FFF] text-[14px] text-center">신입생 티켓 예매하기</button>
                    </Link>
                    <Link href="tickets/general_ticket">
                    <button className="w-[264px] h-[56px] flex-shrink-0 ml-[24px] mt-[32px] rounded-[30px] bg-[#0047FF] text-[#FFF] text-[14px] text-center">일반 티켓 예매하기</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}