import React from "react";

interface BackgroundProps {
children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
return (
    <div className="w-screen h-[100%] flex items-center justify-center bg-white">
    <div className="w-[2px] h-full bg-[#F2F2F2]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]" />
    <div className="absolute inset-0 mt-[110px]">
        {props.children}
    </div>
    </div>
);
};

export default Background;