import React from "react";

interface BackgroundProps {
children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
const lines = Array.from({ length: 9 }, (_, index) => (
    <div key={index} className="hidden md:flex w-[1px] md:w-[2px] h-full bg-[#F2F2F2]" />
));

return (
    <div className="w-full h-[100%] flex items-center justify-between bg-[white]">
    {lines.map((line, index) => (
        <React.Fragment key={index}>{line}</React.Fragment>
    ))}
    <div className="absolute inset-0 mt-[110px]">{props.children}</div>
    </div>
);
};

export default Background;