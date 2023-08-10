import Image from "next/image";
import alarm from "/public/assets/icons/alarm.png";

export default function Caution(){
    return(
        <div className="flex flex-col justify-center items-center py-8">
            <Image src={alarm} alt="notice" width={24}/>
            <p className="text-xl font-bold mt-4">주의사항</p>
            <p className="text-base font-bold mt-8">1. 지원 방법</p>
            <p className="text-base font-bold mt-4">| 보컬 부문 |</p>
            <p className="text-sm mt-1 text-center">
                보컬 지원자의 경우는 다른 세션과 달리 대면 오디션과 별개로 지원 영상을 따로 받고 있습니다.<br/>
                선곡은 자유이며, 2-3곡 정도를 영상으로 찍어 보내주시길 바랍니다. 가사를 보고 불러도 되니 편하게 지원해 주세요.<br/>
                제출 방식은 기재해 주신 연락처를 통해 개별 공지해 드립니다.
            </p>
            <p className="text-base font-bold mt-4">| 드럼/기타/베이스/신디 부문 |</p>
            <p className="text-sm mt-1 text-center">
                보컬 지원자를 제외한 다른 세션의 경우 별도의 지원 영상이 필요하지 않습니다. 3월 11일 진행되는 오디션에만 참여해 주시면 됩니다.
            </p>
            <p className="text-base font-bold mt-8">
                2. 1지망과 2지망, 총 두 개의 세션에 지원하기 때문에 꼭 1지망 세션에 합격한다는 보장이 없습니다.
            </p>
            <p className="text-sm mt-1 text-center">
                이 점 유의하여 지원해 주시길 바랍니다.
            </p>
        </div>
    )
}