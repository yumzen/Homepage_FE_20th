import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className="w-full h-[148px] bg-[#EEEEEE] fixed bottom-0">
            <div className="flex flex-col w-full">
                <div className="flex item-center justify-center mt-[24px]">
                    <Image src="/footer_logo.png" alt="footer logo" width={160} height={36} />
                </div>
                <div className="mt-[16px]">
                    <ul className="flex items-center justify-center gap-2">
                    <li className="bg-[#464646] rounded-full w-[24px] h-[24px]">
                            <Link href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA==" passHref >
                                <Image src ="/foot_instagram.svg" alt="instagram" width={16} height={16} className=" mx-[4px] my-[3.9px]"/>
                            </Link>
                        </li>
                        <li className="bg-[#464646] rounded-full w-[24px] h-[24px]">
                            <Link href="https://www.youtube.com/@kahluaband8409" passHref >
                                <Image src ="/foot_kakaotalk.svg" alt="kakaotalk" width={18} height={18} className=" mx-[3.6px] my-[2.8px]"/>
                            </Link>
                        </li>
                        <li className="bg-[#464646] rounded-full w-[24px] h-[24px]">
                            <Link href="https://www.youtube.com/@kahluaband8409" passHref >
                                <Image src ="/foot_youtube.svg" alt="youtube" width={18} height={18} className=" mx-[3.5px] my-[5.6px]"/>
                            </Link>
                        </li>
                        <li className="bg-[#464646] rounded-full w-[24px] h-[24px]">
                            <Link href="https://github.com/kahluaband" passHref >
                                <Image src ="/foot_github.svg" alt="github" width={18} height={18} className=" mx-[2.8px] my-[3px]"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-[16px] flex item-center justify-center" >
                    <div className="text-[14px] text-[#6C6C6C]">© 2023 Kahlua. All rights reserved.</div>
                </div>
            </div>

        </div>
    );
}