import { useState } from "react";
import Image from "next/image";

interface Order {
    id: number;
    orderNumber: string;
    name: string;
    cancelable: boolean;
}

const Modal = () => {
    const [orderNumber, setOrderNumber] = useState("");
    const [searchResult, setSearchResult] = useState<Order[]>([]);
    const [searched, setSearched] = useState(false);
    const [validOrderNumber, setValidOrderNumber] = useState(true);

    const handleSearch = () => {
        const tempSearchResult = [
            { id: 1, orderNumber: "123456", name: "서지현", cancelable: true },
            { id: 2, orderNumber: "789012", name: "임가은", cancelable: false },
        ];

        const filteredSearchResult = tempSearchResult.filter(order => order.orderNumber === orderNumber);
        if (filteredSearchResult.length > 0) {
            setSearchResult(filteredSearchResult);
            setSearched(true);
        } else {
            setSearched(false);
            setValidOrderNumber(false);
        }
    };


    const [isClose, setIsClose] = useState(false);

    const handleIsClose = () => {
        setIsClose(true);
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
        handleIsClose();
        }
    };

    return !isClose ? (
        <div onClick={handleOverlayClick} className= "fixed top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
    <div className="font-['pretendard'] w-[566px] h-[604px] bg-[#FFF] flex-shrink-0 fixed border-[#000] border-solid border-[1px] z-20">
        <button onClick={handleIsClose} className="ml-[540px] mt-[12px] w-[26px] h-[38px] flex-col content-center text-[20px] font-[700]">X</button>
        <div className="w-[565px] h-[1px] bg-[#000]"/>
        <div className="flex flex-col items-center text-center content-center mt-[40px] leading-normal">
            <Image src="/assets/images/tickets/ticket.png" alt="ticket" width={32} height={16}/>
            <p className="font-[700] mt-[12px] text-[24px]">예매 내역 확인</p>
            <p className="mt-[28px] font-[400] text-[14px]">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
        </div>
        <div className="mt-[40px] flex flex-col items-center text-center content-center ">
                <div className="w-[514px] h-[48px] flex border-[1px] border-solid border-[#000] outline-none">
            <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="예매번호를 입력해 주세요."
                className="flex-grow px-[16px] outline-none"
            />
            <div onClick={handleSearch} className="relative bg-[#D9D9D9] w-[29px] h-[25px] mt-[12px] mr-[8px] cursor-pointer">
                <Image src="/assets/images/tickets/search.png" alt="돋보기" width={100} height={100} className="absolute w-[16px] h-[16px] mt-[5px] ml-[7px]"/>
            </div>
        </div>
            </div>
            {searched && (
                <div>
                    <div className="mt-[24px] ml-[24px] bg-[#dde2ff] w-[514px] h-[106px] flex-shrink-0">
                        <div className="flex flex-row align-center justify-center">
                            <div className="mt-[11px] w-[72px] flex text-center items-center text-[14px]"> 예매 번호 </div>
                            <div className="mt-[11px] ml-[124px] w-[72px] flex text-center items-center text-[14px]"> 예매자 성명 </div>
                            <div className="mt-[11px] ml-[124px] w-[80px] flex text-center items-center text-[14px]"> 취소 가능 여부 </div>
                        </div>
                        <div className="mt-[10px] h-[1px] w-[100%] bg-[#A4A4A4] "/>
                        {searchResult.map((order: any) => (
                                <div key={order.id} className="mt-[12px] flex flex-row align-center justify-center">
                                    <div className="mt-[11px] ml-[20px] w-[118px] flex text-center items-center text-[14px]"> {order.orderNumber} </div>
                                    <div className="mt-[11px] ml-[112px] w-[118px] flex text-center items-center text-[14px]"> {order.name} </div>
                                    <div className="mt-[11px] ml-[96px] w-[118px] flex text-center items-center text-[14px]"> {order.cancelable ? "취소 가능" : "취소 불가능"} </div>
                                </div>
                            ))}
                    </div>
                    <div className="w-[514px] h-[48px] mt-[72px] ml-[24px] flex items-center">
                        <button className="w-full h-full bg-[#D9D9D9] text-center text-[#000] text-[14px]">
                            예매 취소하기
                        </button>
                    </div>
                </div>
            )}
            {!validOrderNumber && (
                    <div className="mt-[48px] flex text-center justify-center items-center font-[700] text-[14px]">잘못된 예매 번호 입니다.</div>
            )}
    </div>
    </div>
    ): null;
};

export default Modal;