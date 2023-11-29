import { useEffect, useState } from "react";
import Image from "next/image";

const error_modal = () => {
    const [isClose, setIsClose] = useState(false);

    
    const handleIsClose = () => {
        setIsClose(true);
    };
    
    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
        handleIsClose();
        }
    };
    
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
        handleIsClose();
        }
    };
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
        document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    return !isClose ? (
        <div onClick={handleOverlayClick} className= "fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="font-['pretendard'] w-[580px] h-[592px] bg-[#FFF] flex-shrink-0 fixed z-20">
                <button onClick={handleIsClose} className="ml-[544px] w-[36px] h-[38px] flex-col items-center flex justify-center text-[20px] font-[700]">x</button>
                <div className="w-[100%] h-[1px] bg-[#D3D3D3]"/>
                <div className="flex flex-col items-center text-center content-center mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12}/>
                    <p className="font-[700] mt-[12px] text-[24px] leading-[28px]">이미 예약한 정보입니다.</p>
                    <p className="mt-[20px] font-[500] text-[14px] laeding-[21px] text-[#4A4A4A]">입력하신 정보를 다시 한번 확인해주세요.</p>
                </div>
                </div>
        </div>
    ): null;
};

export default error_modal;