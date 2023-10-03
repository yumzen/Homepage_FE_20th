import Image from "next/image";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/Main/divider_large.svg";
import rect1 from "/public/assets/images/Main/rectangle_1.svg"
import rect3 from "/public/assets/images/Main/rectangle_3.svg"
import rect4 from "/public/assets/images/Main/rectangle_4.svg"
import circle from "/public/assets/images/Main/circle.svg"
import cd from "/public/assets/images/Main/image_cd1.svg"



export default function Home() {
return (
    //배경이 있으려면 높이를 무조건 설정해줘야되는데 nav bar가 높이에 포함이 안돼서 일단 높이를 screen-104px로 해둠
    <div className="h-[calc(100vh-104px)]">
        <Background>
            <Deco/>
            <Headline/>
            {/* animate-spin origin-bottom */}
            <Image src={cd} alt=".." width={1000} className="absolute bottom-0 right-0 h-[450px] z-20 object-cover object-bottom "/>
        </Background>
    </div>
);
}


function Headline(){
    return(
        <div className="ml-[calc(22%)] mt-10 bg-transparent">
            <Image src={divider} alt="kahlua" width={108}/> 
            <p className="font-GothamBold text-7xl font-bold mt-2">Band Club</p>
            <p className="font-Salvar text-7xl font-bold mt-2">KAHLUA</p>
            <p className=" font-pretendard text-xl text-[#6A6A6A] mt-4">We are Hongik University Computer Engineering<br/>
            Band Club KAHLUA!</p>

        </div>
    )
}

function Deco(){
    return(
        <div className=" bg-transparent ">
            <Image src={rect3} alt=".." width={165} className="absolute right-0 top-0 w-[calc(12.5%)] mt-10"/>
            <Image src={circle} alt=".." width={160} className="absolute right-[calc(24%)] w-[calc(12%)] top-40"/>
            <Image src={circle} alt=".." width={160} className="absolute left-[calc(5%)] w-[calc(12%)] top-64"/>
            <Image src={rect4} alt=".." width={165} className="absolute left-0 top-[390px] w-[calc(12.5%)]"/>
            <Image src={rect1} alt=".." width={165} className="absolute left-[calc(12.5%)] bottom-0 w-[calc(12.5%)]"/>
        </div>
    )
}