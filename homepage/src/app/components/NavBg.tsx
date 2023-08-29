
interface NavBgProps {
    children: React.ReactNode;
}

const NavBg: React.FC<NavBgProps> = (props) => {
    return (
        <div className="w-screen h-[100%] flex items-center justify-between bg-[white]">
            <div className="w-[2px] h-full bg-[#F2F2F2]" />
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="w-[2px] h-full bg-[#F2F2F2] "/>
            <div className="w-[2px] h-full bg-[#F2F2F2] "/>
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="w-[2px] h-full bg-[#F2F2F2] " />
            <div className="absolute inset-0 mt-[30px]">
                {props.children }
            </div>
        </div>
    );
};

export default NavBg;
