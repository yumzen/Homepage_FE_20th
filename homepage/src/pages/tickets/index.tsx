"use client"
import dotenv from 'dotenv';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Background from '../../app/components/Background';
import SelectBox from './SelectBox';
dotenv.config();

const apikey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

/*
    공연 정보 설정
*/
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

export default function Tickets() {
    const [nowUrl, setNowUrl] = useState("");

    
    /*
        예매 가능 기간 설정
    */
    const startDate = new Date('2023-09-01');
    const endDate = new Date('2024-09-10');
    const today = new Date();   
    const isWithinSeason = today >= startDate && today <= endDate;

    useEffect(() => {
        setNowUrl(window.location.href);
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}&autoload=false`;
        document.head.appendChild(script);
    
        script.onload = () => {
        window.kakao.maps.load(() => {
            const container1 = document.getElementById("map1");
            const container2 = document.getElementById("map2");
            const options1 = {
                /*
                    공연 장소 위치 설정
                */
            center: new window.kakao.maps.LatLng(37.55099593968109, 126.92401144435387),
            level: 3,
            };
            const options2 = {
                /*
                    공연 장소 위치 설정
                */
            center: new window.kakao.maps.LatLng(37.55099593968109, 126.92401144435387),
            level: 2,
            };
    
            const map1 = new window.kakao.maps.Map(container1, options1);
            const map2 = new window.kakao.maps.Map(container2, options2);
            /*
                공연 장소 위치 설정
            */
            var markerPosition = new window.kakao.maps.LatLng(37.55099593968109, 126.92401144435387);
            var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            });

            window.kakao.maps.event.addListener(marker, 'click', function() {
                window.open('https://place.map.kakao.com/23696074', '_blank');
            });
    
            marker.setMap(map1);
            marker.setMap(map2);
            marker.setDraggable(true);
        });
        };
    }, []);

    function copyUrl() {
        navigator.clipboard.writeText(nowUrl).then(res => {
        alert("링크가 복사되었습니다!");
        });
    }

    return (
        <div className="h-[1000px] sm:h-[1100px] lg:h-[1100px] flex z-0 ">
        <Background>
                <div className="font-['pretendard']  flex flex-col items-center sm:mb-[84px] mx-auto ">
                    <div className=" flex flex-row w-[100%] lg:w-[1024px] justify-center">
                        <Image src={data[0].image} alt='포스터' width={324} height={460} className='px-[1vw] w-[40vw] h-[calc(40vw*4/3)] md:w-[240px] md:h-[310px] lg:w-[324px] lg:h-[460px] md:max-h-[460px]' priority/>
                        <div className="w-[55vw] h-[240px] lg:w-[720px] lg:h-[460px] ml-[11px] lg:ml-[23px] top-0 flex-shrink-0">
                            <div className="w-[48px] h-[18px] md:w-[76px] md:h-[24px] flex flex-shrink-0 justify-center rounded-[40px] bg-[#281CFF] text-[8px] md:text-[14px] font-[600] tracking-[0.2px] leading-[20px] text-[#FFF] pt-[2px] text-center whitespace-nowrap items-center">예매가능</div>
                            <div className="flex flex-row left-0 whitespace-nowrap">
                                <div className="font-['pretendard'] sm:w-[150px] md:w-[280px] h-[20px] lg:mt-[8px] lg:w-[350px] lg:h-[42px] flex flex-shrink-0 text-black font-[700] text-[14px] sm:text-[16px] lg:text-[20px] md:text-[31px] leading-[40px] whitespace-nowrap">{data[0].title}</div>
                                <div className="mt-[14px] md:mt-[19px] sm:ml-[20vw]  lg:ml-[40px] md:ml-[5vw] flex flex-row">
                                    <Link href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA==" target='_blank' passHref>
                                        <Image src='/assets/images/tickets/mobile_instagram.svg' alt="모바일 인스타 그램" width ={1000} height={1000} className='ml-[5vw] flex lg:hidden cursor-pointer w-[12px] h-[12px]'/>
                                        <Image src='/assets/images/tickets/bt_feed.svg' alt='인스타그램' width={1000} height={1000} className="hidden lg:flex cursor-pointer w-[100px] h-[30px]"/>
                                    </Link>
                                    <div onClick={copyUrl}>
                                        <Image src='/assets/images/tickets/mobile_share.svg' alt='모바일 share' width={1000} height={1000} className="flex lg:hidden cursor-pointer w-[12px] h-[12px] ml-[14px]"/>
                                        <Image src='/assets/images/tickets/bt_share.svg' alt='share' width={1000} height={1000} className="hidden lg:flex cursor-pointer w-[100px] h-[30px] ml-[14px] "/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[18px] w-[55vw] md:w-[50vw] lg:w-[720px] h-[1px] flex bg-[#000]"/>
                            <div className="mt-[12px] lg:mt-[36px] w-[55vw] lg:w-[720px] h-[1px] flex flex-row">
                                <div className="flex flex-col w-[55vw] ">
                                    <div className="text-[10px] lg:text-[14px] flex w-[55vw] md:w-[270px] items-center mt-[4px]">
                                        <div className="font-[700] leading-[17px] w-[18px] lg:w-[25px] h-[17px] text-center whitespace-nowrap">장소</div>
                                        <div className="font-[500] leading-[21px] ml-[7vw] lg:ml-[64px] w-[52px] h-[21px]">{data[0].where}</div>
                                    </div>
                                    <div className="text-[10px] lg:text-[14px] mt-[4px] lg:mt-[48px] flex w-[50vw] md:w-[270px] items-center">
                                        <div className=" font-[700] leading-[17px] w-[18px] lg:w-[25px] h-[17px] text-center whitespace-nowrap">일시</div>
                                        <div className=" font-[500] leading-[21px] ml-[7vw] lg:ml-[64px] w-[145px] h-[21px]">{data[0].when}</div>  
                                    </div>
                                    <div className="mt-[14px] lg:mt-[42px] w-[55vw] md:w-[50vw] lg:w-[434px] border-b flex bg-[#D9D9D9]"/>
                                    <div className="mt-[14px] lg:mt-[42px] flex flex-row w-[50vw] md:w-[434px]">
                                        <div className="flex flex-row h-[77px]">
                                            <div className="text-[10px] lg:text-[14px] w-[18px] lg:w-[25px] h-[66px] font-[700px] flex leading-[17px] mt-[28px] text-center">
                                                가격
                                            </div>
                                            <div className="flex flex-col ml-[7vw] lg:ml-[64px] h-[66px]">
                                                <div className='text-[10px] lg:text-[14px] flex flex-col lg:flex-row'>
                                                    <div className="w-[40vw] md:w-[335px] h-[21px] flex flex-row items-center">
                                                        <div className="w-[62px] lg:w-[77px] h-[21px] ">홍익대 신입생</div>
                                                        <div className="ml-[10vw] lg:ml-[36px] w-[25px] text-[#281CFF] font-[700]">{data[0].ticket.freshman}</div>
                                                        <div className="hidden lg:flex ml-[66px] w-[41px] text-[#939393]">1인 1매</div>
                                                    </div>
                                                <div className="flex text-[8px] lg:hidden w-[41px] text-[#939393]">1인 1매</div>
                                            </div>
                                            <div className='text-[10px] lg:text-[14px] flex flex-col lg:flex-row'>
                                                <div className="text-[10px] lg:text-[14px] w-[40vw] md:w-[335px] mt-[8px] lg:mt-[35px] h-[21px] flex flex-row items-center">
                                                    <div className="w-[62px] lg:w-[77px] h-[21px] ">일반티켓</div>
                                                    <div className="ml-[10vw] lg:ml-[36px] w-[49px] font-[700]">{data[0].ticket.regular}</div>
                                                    <div className="hidden lg:flex ml-[42px] w-[122px] text-[#939393] whitespace-nowrap">1인 5매까지 예매 가능</div>
                                                </div>
                                                <div className="flex text-[8px] lg:hidden w-[82px] text-[#939393] whitespace-nowrap">1인 5매까지 예매 가능</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden sm:flex flex-row mt-[36px]'>
                                        <Link href="tickets/freshman_ticket/delete/">
                                            <button className="ml-[0.4vw] mr-[0.6vw] w-[164px] h-[33px] text-[12px] font-[400px] leading-[18px] border border-[#6A6A6A] rounded-[4px] bg-[#FFFFFF] hover:bg-[#281CFF] hover:text-[white] hover:outline-none transition-all duration-450">
                                                신입생 티켓 구매내역 조회하기
                                            </button>
                                        </Link>
                                        <Link href="tickets/general_ticket/delete/">
                                            <button className="ml-[0.6vw] w-[164px] h-[33px] text-[12px] font-[400px] leading-[18px] border border-[#6A6A6A] rounded-[4px] bg-[#FFFFFF] hover:bg-[#281CFF] hover:text-[white] hover:outline-none transition-all duration-450">
                                                일반 티켓 구매내역 조회하기
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div id="map1" className="hidden lg:flex lg:ml-[45px] w-[242px] h-[242px] flex-shrink-0 z-0"></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex sm:hidden flex-row mt-[12px] mx-auto'>
                        <Link href="tickets/freshman_ticket/delete/">
                            <button className=" mr-[1vw] w-[45vw] h-[29px] text-[10px] font-[400px] leading-[18px] border border-[#6A6A6A] rounded-[4px] bg-[#FFFFFF] hover:bg-[#281CFF] hover:text-[white] hover:outline-none transition-all duration-450">
                                신입생 티켓 구매내역 조회하기
                            </button>
                        </Link>
                        <Link href="tickets/general_ticket/delete/">
                            <button className="ml-[1vw] w-[45vw] h-[29px] text-[10px] font-[400px] leading-[18px] border border-[#6A6A6A] rounded-[4px] bg-[#FFFFFF] hover:bg-[#281CFF] hover:text-[white] hover:outline-none transition-all duration-450">
                                일반 티켓 구매내역 조회하기
                            </button>
                        </Link>
                    </div>
        
                    <div className="hidden lg:flex flex-col w-[1080px] h-[402px] flex-shrink-0 rounded-[10px] border-solid border-[#B9B9B9] border mt-[110px] mx-auto bg-[white]">
                        <div className="flex flex-row">
                            <div className="w-[1080px] h-[62px] flex-shrink-0 flex flex-row pt-[24px]">
                                <div className='w-[360px]  flex flex-row pl-[50px] '>
                                    <div className="font-[400] flex flex-col text-[12px] w-[37px] h-[19px] ">Step 1</div>
                                    <div className="font-[600] flex flex-col w-[67px] h-[19px] text-[12px] leading-[19px] tracking-[0.24px] ml-[20px]">날짜 선택하기</div>
                                </div>
                                <div className='w-[360px]  flex flex-row pl-[50px]'>
                                    <div className="font-[400] flex flex-col text-[12px] w-[37px] h-[19px] ">Step 2</div>
                                    <div className="font-[600] flex flex-col w-[67px] h-[19px] text-[12px] leading-[19px] tracking-[0.24px] ml-[20px]">시간 선택하기</div>
                                </div>    
                                <div className='w-[360px]  flex flex-row pl-[50px]'>
                                    <div className="font-[600] flex flex-col w-[67px] h-[19px] text-[12px] leading-[19px] tracking-[0.24px] ">예매가능 좌석</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-[1079px] border-solid  border-y border-[#B9B9B9]">
                            <div className="w-[360px] h-[260px] border-r border-[#E8E8E8] bg-[#F1F5FF]  flex flex-row">
                                <div className="w-[270px] h-[200px] ml-[45px] mt-[30px]">
                                    <Calendar />
                                </div>  
                            </div>
                            <div className="w-[360px] h-[260px] border-r bg-[#F1F5FF]  border-[#E8E8E8] flex flex-col">
                                <div className="flex">
                                    <div className="ml-[45px] mt-[30px]">
                                        <SelectBox />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-[358px] h-[260px] flex flex-col bg-[#F1F5FF] ">
                                <div className=" flex flex-col mx-auto mt-[30px]">
                                        <div className="flex w-[260px] text-center flex-row justify-between">
                                            <div className="text-[14px] font-[600] leading-[19px] w-[80px] h-[19px] text-left">온라인 예매</div>
                                            <div className="text-[14px] text-right font-[500] w-[70px]">예매가능</div>  
                                        </div>
                                        <div className="mt-[13px]  flex w-[260px] text-center flex-row justify-between">
                                            <div className="text-[14px] font-[600] leading-[19px] w-[80px] h-[19px] text-left">현장 예매</div>
                                            <div className="text-[14px] text-right font-[500]  w-[70px]">예매가능</div>
                                        </div>
                                    </div>
                            </div>
                            
                        </div>
                            <div className='ml-[480px] mt-[16px]'>
                            {isWithinSeason ? (
                            <div>
                                <Link href="tickets/freshman_ticket">
                                    <button className="w-[270px] h-[48px] flex-shrink-0 rounded-[6px] bg-[#281CFF] text-[#FFF] font-[700] leading-[17px] text-[14px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]">신입생 티켓 예매하기</button>
                                </Link>
                                <Link href="tickets/general_ticket">
                                    <button className="w-[270px] h-[48px] flex-shrink-0 ml-[30px] rounded-[6px] bg-[#281CFF] font-[700] leading-[17px]  text-[#FFF] text-[14px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]">일반 티켓 예매하기</button>
                                </Link>
                            </div>) : (
                            <button className="ml-[30px] w-[540px] h-[48px] flex-shrink-0 rounded-[6px] bg-[#B9B9B9] text-[#FFF] font-[700] leading-[17px] text-[14px] text-center">지금은 예매 가능 기간이 아닙니다.</button>
                        )}
                        </div>
                    </div>

                    <div className="flex flex-row mt-[30px] md:mt-[60px]">
                        <div id="map2" className="md:hidden flex w-[35vw] h-[35vw] flex-shrink-0 z-0 rounded-[4px]"></div>
                        <div className="flex lg:hidden flex-col w-[60vw] ml-[2px] h-[500px] md:h-[660px] flex-shrink-0 rounded-[4px] border-solid border-[#B9B9B9] border mx-auto bg-[white]">
                            <div className='w-[60vw] h-[20px] flex md:h-[28px] text-[8px] md:text-[12px] flex-row gap-[13px] items-center justify-center text-center'>
                                <div className="font-[400]  w-[37px] h-[19px] text-center items-center flex whitespace-nowrap">Step 1</div>
                                <div className="font-[600] w-[67px] h-[19px]  text-center items-center flex leading-[19px] tracking-[0.24px] whitespace-nowrap">날짜 선택하기</div>
                            </div>
                            
                            <div className="w-[100%] h-[220px] items-center justify-center border-t border-[#E8E8E8] bg-[#F1F5FF] flex flex-row">
                                <div className="my-[8px] w-[55vw] h-[100%] flex items-center justify-center">
                                    <Calendar />
                                </div>  
                            </div>

                            <div className='w-[60vw] h-[20px] flex flex-row md:h-[28px] text-[8px] md:text-[12px] border-t border-[#E8E8E8] gap-[13px] items-center justify-center text-center'>
                                <div className="font-[400] w-[37px] h-[19px] text-center items-center flex whitespace-nowrap">Step 2</div>
                                <div className="font-[600] w-[67px] h-[19px] text-center items-center flex leading-[19px] tracking-[0.24px] whitespace-nowrap">시간 선택하기</div>
                            </div>

                            <div className="w-[100%] h-[45px] md:h-[100px] items-center border-t border-[#E8E8E8] bg-[#F1F5FF] flex">
                                <div className="mx-auto">
                                    <SelectBox />
                                </div>
                            </div>

                            <div className='w-[60vw] h-[20px] md:h-[28px] text-[8px] md:text-[12px] flex flex-row border-t border-[#E8E8E8] gap-[13px] items-center justify-center text-center'>
                                <div className="font-[400] w-[37px] h-[19px] text-center items-center flex whitespace-nowrap">Step 3</div>
                                <div className="font-[600] w-[67px] h-[19px] text-center items-center flex leading-[19px] tracking-[0.24px] whitespace-nowrap">예매 가능좌석</div>
                            </div>
                                    
                            <div className="w-[100%] h-[80px] md:h-[100px] items-center border-t border-[#E8E8E8] bg-[#F1F5FF] flex">
                                <div className=" flex flex-col w-[50vw] mx-auto text-[8px] md:text-[12px]">
                                        <div className="flex w-[100%] text-center flex-row justify-between md:justify-center md:gap-[25vw]">
                                            <div className="font-[600] leading-[19px] w-[80px] h-[19px] text-left">온라인 예매</div>
                                            <div className="text-right font-[500] w-[70px]">예매가능</div>  
                                        </div>
                                        <div className="mt-[13px]  flex w-[100%] text-center flex-row justify-between md:justify-center md:gap-[25vw]">
                                            <div className="font-[600] leading-[19px] w-[80px] h-[19px] text-left">현장 예매</div>
                                            <div className="text-right font-[500]  w-[70px]">예매가능</div>
                                        </div>
                                    </div>
                            </div>
                                
                            {isWithinSeason ? (
                                <div className="flex border-t border-[#E8E8E8] bg-[#fff] w-[100%] h-[100px] md:h-[150px] flex-col items-center justify-center mx-auto">
                                    <Link href="tickets/freshman_ticket">
                                        <button className="w-[40vw] h-[24px] md:w-[270px] md:h-[48px] flex-shrink-0 rounded-[4px] bg-[#281CFF] text-[#FFF] font-[700] leading-[17px] text-[10px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]">신입생 티켓 예매하기</button>
                                    </Link>
                                    <Link href="tickets/general_ticket">
                                        <button className="w-[40vw] h-[24px] md:w-[270px] md:h-[48px] flex-shrink-0 mt-[10px] rounded-[4px] bg-[#281CFF] font-[700] leading-[17px] text-[#FFF] text-[10px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]">일반 티켓 예매하기</button>
                                    </Link>
                                </div>) : (
                                <button className="ml-[30px] w-[540px] h-[48px] flex-shrink-0 rounded-[6px] bg-[#B9B9B9] text-[#FFF] font-[700] leading-[17px] text-[14px] text-center">지금은 예매 가능 기간이 아닙니다.</button>
                            )}
                            </div>
                    </div>
                </div>
            </Background>
        </div>
    )
}