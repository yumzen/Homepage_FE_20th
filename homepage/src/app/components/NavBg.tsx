interface NavBgProps {
    children: React.ReactNode;
}

const NavBg: React.FC<NavBgProps> = (props) => {
    const verticalLines = Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="hidden md:flex w-[1px] md:w-[2px] h-full bg-[#F2F2F2]" />
    ));

    return (
        <div className="w-screen h-screen flex items-center justify-between bg-white">
            {verticalLines}
            <div className="absolute inset-0">
                {props.children}
            </div>
        </div>
    );
};

export default NavBg;