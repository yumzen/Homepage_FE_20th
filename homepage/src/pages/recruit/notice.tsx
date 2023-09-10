import Image from "next/image"
import recruit_icon from "/public/assets/images/recruit/divider_medium.svg";

export default function Notice(){
    return(
        <div className="w-full py-16 flex flex-col justify-center items-center">
            <Image src={recruit_icon} alt="notice"/>
            <p className="text-xl mt-4 mb-8 font-bold">모집정보</p>

            <p className="text-base font-semibold mt-4">지원자격</p>
            <p className="text-sm mt-1">
                홍익대학교 컴퓨터공학과 or 자율전공학부에서 컴퓨터공학과 진입 예정인 24학번 신입생
            </p>

            <p className="text-base font-semibold mt-4">모집 세션</p>
            <p className="text-sm mt-1">
                보컬 2명 / 기타 4명 / 드럼 2명 / 베이스 2명 / 신디사이저 2명
            </p>

            <p className="text-base font-semibold mt-4">모집 일정</p>
            <p className="text-center text-sm mt-1">
                지원서 마감 : ~ 2024.03.08 (금) 23:59까지<br/>
                보컬부문 지원 영상 : ~ 2024.03.10 (일) 23:59까지
            </p>

            <p className="text-base font-semibold mt-4">오디션 일정</p>
            <p className="text-center text-sm mt-1">
                2024.03.11(월) 4시-7시<br/>
                오디션 이후 뒷풀이 예정
            </p>

            <p className="text-base mt-4">유의사항</p>
            <p className="text-sm mt-1 text-center">
                1. 오디션은 대면으로 진행되며, 오디션 이후 7시부터 뒷풀이가 있을 예정입니다.<br/>
                2. 보컬 지원자에 한해 지원 영상을 받고 있습니다. 모집일정을 고려해주시기 바랍니다.<br/>
                3. 상세 일정은 지원자에게 개별 연락을 통해 공지됩니다.<br/>
                4. 기타 문의사항은 카카오톡 채널 @kahlua 로 문의 부탁드립니다.
            </p>
        </div>
    )
}