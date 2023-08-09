"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    
const [showMenu, setShowMenu] = useState(false);
const [focusedLink, setFocusedLink] = useState("");
const pathname = usePathname();

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth >= 700) {
        setShowMenu(false);
    }
    };

    window.addEventListener("resize", handleResize);

    setFocusedLink(pathname?.split("/")[1] || "");

    return () => {
    window.removeEventListener("resize", handleResize);
    };
}, [pathname]);

let Links =[
    {name:"소개하기",link:"/about"},
    {name:"공연영상",link:"/performance"},
    {name:"예매하기",link:"/tickets"},
    {name:"지원하기",link:"/recruit"},
];

return (
    <nav className="w-full shadow-sm bg-white z-10 py-[20px] px-[20px] font-['pretendard']">
        <div className="mx-auto lg:max-w-7xl md:items-center md:flex gap-[16px]">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width={192} height={36} className= "w-[192px] h-[192px] max-w-[192px] max-h-[36px]" priority/>
                </Link>
                <div className="md:hidden">
                    <button className="p-2 outline-none" onClick={toggleMenu}>
                    {showMenu ? (<Image src="/close.svg" width={32} height={32} alt="logo" /> ) : ( <Image src="/hamburger.svg" width={32} height={32} alt="logo" className="focus:border-none active:border-none" />)}
                    </button>
                </div>
            </div>
            <div className={`${ showMenu ? "mt-8 mb-8 flex flex-col" : "hidden flex-row justify-between md:pl-8" } md:flex w-full items-center`}>
                <ul className={`${ showMenu ? "flex-col py-[40px] mt-12 mb-4": "flex-col md:flex md:flex-row md:gap-[15px]"}`}>
                    { Links.map((link) => (
                        <li key={link.name} className={` text-[#000] text-center hover:font-bold ${ showMenu ? "text-[20px] w-[100%] h-[100%] mb-4":"text-[15px] w-[84px] h-[32px] font-medium flex-shrink-0 flex justify-center items-center"}`}>
                            <Link href={link.link} onClick={() => setFocusedLink(link.name)}>
                                <div className={focusedLink === link.name || pathname?.startsWith(link.link) ? "font-bold" : ""}>{link.name}</div>
                            </Link>
                        </li>
                        ))}
                </ul>
                <ul className={`${ showMenu ? " my-12 flex flex-row gap-[60px] items-center justify-center mx-12":"hidden lg:flex lg:flex-row flex-row gap-[12px] items-center justify-center"}`}>
                    <li className="w-[100%] h-[100%] mx-2 ">
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/youtube.png" alt="유튜브" width={24} height={18} />
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2">
                    <Link href="https://www.youtube.com/@kahluaband8409" passHref>
                        <Image src="/kakaotalk.png" alt="카카오톡 채널" width={22} height={22} />
                    </Link>
                    </li>
                    <li className="w-[100%] h-[100%] mx-2">
                    <Link
                        href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA=="
                        passHref
                    >
                        <Image src="/instagram.png" alt="인스타그램" width={20} height={20} />
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}