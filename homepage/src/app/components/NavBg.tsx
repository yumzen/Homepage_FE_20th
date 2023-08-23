
interface NavBgProps {
    children: React.ReactNode;
}

const NavBg: React.FC<NavBgProps> = (props) => {
    return (
        <div className="w-[100%] h-[90px] flex items-center justify-center bg-white">
            <div className="w-[2px] h-full bg-[#F2F2F2]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="w-[2px] h-full bg-[#F2F2F2] ml-[185px]"/>
            <div className="absolute inset-0 mt-[30px]">
                {props.children}
            </div>
        </div>
    );
};

export default NavBg;
