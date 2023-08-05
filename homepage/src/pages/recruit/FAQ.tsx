import Image from "next/image"
import person1 from "/public/assets/images/recruit/person1.png"
import person2 from "/public/assets/images/recruit/person2.png"
import person3 from "/public/assets/images/recruit/person3.png"
import person4 from "/public/assets/images/recruit/person4.png"

export default function FAQ(){
    return(
        <div className="py-10">
            <p className="text-center text-xl font-bold text-white mb-16">
                FAQ
            </p>

            <div dir="rtl" className="px-16 flex flex-row items-center md:px-64">
                <Image src={person1} alt="질문자" className="-mx-16 z-40 -mt-8"/>
                <div className="bg-ocean-700 w-[352px] h-20 flex items-center rounded-3xl ps-8 text-[#EEEEEE] text-sm">
                    .다룰 줄 아는 악기가 없지만 깔루아에 들어가고 싶어요<br/>
                    ?깔루아에 지원해도 될까요
                </div>
            </div>

            <div dir="ltr" className="px-20 flex flex-row items-center md:px-64">
                <Image src={person2} alt="답변자" className="-mx-20 z-20 -mt-8 " width={240}/>
                <div className="bg-[#EEEEEE] w-[512px] h-28 flex items-center rounded-3xl ps-6 text-sm">
                    저는 드럼이라는 걸 대학 와서 처음 만져봤는데요.<br/>
                    선배들, 동기들이 붙잡고 가르쳐줘서 이제 혼자서도 척척 합주 연습을 할 수 있답니다!<br/>
                    선배들이 처음부터 친절하게 가르쳐주니 전혀 걱정 마세요!<br/>
                    악기를 안 다뤄본 동기들도 많아요!
                </div>
            </div>
            
            <div dir="rtl" className="px-16 flex flex-row items-center md:px-64">
                <Image src={person3} alt="질문자" className="-mx-16 z-40 -mt-8 " width={200}/>
                <div className="bg-ocean-700 w-[476px] h-12 flex items-center rounded-3xl ps-8 mt-12 text-[#EEEEEE] text-sm">
                    ?저는 자율 전공인데 컴퓨터 공학과 소속 동아리인 깔루아에 들어갈 수 있나요
                </div>
            </div>

            <div dir="ltr" className="px-20 flex flex-row items-center md:px-64">
                <Image src={person4} alt="답변자" className="-mx-20 z-20 -mt-8 " width={240}/>
                <div className="bg-[#EEEEEE] w-[360px] h-20 flex items-center rounded-3xl ps-6 mt-4 text-sm">
                    네! 저도 자율전공이랍니다.<br/>
                    “컴퓨터 공학과에 진입할 예정” 이라면 전혀 상관 없어요!
                </div>
            </div>
        </div>
    )
}