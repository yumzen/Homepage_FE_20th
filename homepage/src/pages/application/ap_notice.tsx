import Image from "next/image";
import recruit_rocket from "/public/assets/images/recruit/divider_medium.svg";

export default function ApplicationNotice(){
    return(
        <div className="flex flex-col justify-center items-center py-8">
            <Image src={recruit_rocket} alt="notice" width={24}/>
            <div className="flex mt-4">
                <p className="text-xl font-bold text-ocean-700">지원</p>
                <p className="text-xl font-bold">하기</p>
            </div>
            <p className="text-sm mt-8 text-center">
                안녕하세요! 홍익대학교 컴퓨터공학과 밴드학회 깔루아입니다.<br/>
                단순 인원 집계용으로 사용되는 가입 지원서이므로 부담 없이 작성해 주시면 됩니다.<br/>
                <br/>
                오디션 일자는 3월 11일 월요일이며, 상세 일정은 아래 작성해 주신 연락처로 개별 공지드리겠습니다.<br/>
                <br/>
                보컬 2명 / 드럼 2명 / 기타 4명 / 베이스 2명 / 신디(피아노) 2명 을 모집하고 있습니다.<br/>
                위에 기재된 악기 외에도 다룰 줄 아는 악기가 있으시다면 아래에 기재해 주세요.
            </p>
        </div>
    )
}