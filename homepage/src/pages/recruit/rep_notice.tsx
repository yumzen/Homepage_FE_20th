import Image from "next/image";
import recruit_rocket from "/public/assets/icons/recruit_rocket.png";

export default function RepNotice() {
    return (
        <div className="w-full h-auto bg-ocean-700 bg-opacity-10 py-16 flex flex-col justify-center items-center">
            <p className="font-Salvar text-9xl">
                KAHLUA
            </p>
            <p className="text-center text-5xl font-bold mt-4">
                23nd MEMBER<br/>RECUIRMENT
            </p>
            <p className="text-center text-xs font-bold mt-2">
                모집기간 : 2023.03.01(금) ~ 2023.03.07(토)
                <br/>
                면접기간 : 2023.03.10(월) ~ 2023.03.11(화)
            </p>
            <a className="flex justify-center space-x-4 items-center h-[96px] w-5/6 rounded-3xl bg-ocean-700 mt-6" href="/application">
                <Image src={recruit_rocket} alt=".."/>
                <p className="text-4xl font-semibold">KAHLUA 23기 지원하기</p>
                <Image src={recruit_rocket} alt=".."/>
            </a>
        </div>
    )
}