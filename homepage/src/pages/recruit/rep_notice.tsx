import Image from "next/image";
import recruit_rocket from "/public/assets/icons/recruit_rocket.png";

export default function RepNotice() {
    return (
        <div className="w-full h-auto bg-ocean-700 bg-opacity-10 py-16">
            <div className="text-center font-Salvar text-9xl">
                KAHLUA
            </div>
            <div className="text-center text-5xl font-bold mt-4">
                23nd MEMBER<br/>RECUIRMENT
            </div>
            <div className="text-center text-xs font-bold mt-2">
                모집기간 : 2023.03.01(금) ~ 2023.03.07(토)
                <br/>
                면접기간 : 2023.03.10(월) ~ 2023.03.11(화)
            </div>
            <div className="flex justify-center mt-6">
                <button className="flex justify-center space-x-4 items-center h-[96px] w-5/6 rounded-3xl bg-ocean-700 ">
                    <Image src={recruit_rocket} alt=".."/>
                    <div className="text-5xl font-semibold">KAHLUA 23기 지원하기</div>
                    <Image src={recruit_rocket} alt=".."/>
                </button>

            </div>
        </div>
    )
}