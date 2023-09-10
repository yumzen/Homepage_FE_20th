const OPTIONS = [
    { value: "남성", name: "남성" },
    { value: "여성", name: "여성" },
    { value: "선택안함", name: "선택안함" },
    ];
    
const SelectBox = (props: any) => {
    return (
    <select className=" text-base cursor-pointer w-[320px] h-[64px] rounded-[10px] border border-[#464646] border-solid text-center">
        <option value="" disabled >성별을 선택하세요.</option>
        {props.options.map((option: any) => (
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
        ))}
    </select>
    );
};

export default function Form(){
    return(
        <>
            <div className="py-8 px-2 ">
                <div className="flex justify-center space-x-16 items-start">
                    <div className="">
                        <p className="text-xl font-bold">이름</p>
                        <div className="input-with-placeholder relative w-[560px] h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input type="text" className="text-base w-full h-full rounded-[10px] p-4 " placeholder="지원자 이름"/>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xl font-bold">생년월일</p>
                        <div className="input-with-placeholder relative w-[560px] h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="8자리로 입력해주세요"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-4 items-center mt-8">
                    <p className="text-xl font-bold">성별</p>
                    <div className="w-[320px] h-[64px] flex-shrink-0 rounded-[10px]">
                        <SelectBox options={OPTIONS}/>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-bold">전화번호</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="기호없이 11자리로 입력해주세요 '예:01012345678'"/>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-bold">거주지</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="기숙사의 경우 '예:2기숙사/부산'으로 입력해주세요"/>
                    </div>
                </div>
            </div>

            <div className="mt-2 h-[3px] w-5/6 mx-auto bg-[#000]"/>

            <div className="py-8 px-2">
                <div className="flex justify-center space-x-16 items-start">
                    <div className="">
                        <p className="text-xl font-bold">1지망 선택 (필수)</p>
                        <div className="input-with-placeholder relative w-[560px] h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="보컬/드럼/기타/베이스/신디 중 1가지 선택"/>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xl font-bold">2지망 선택 (필수)</p>
                        <div className="input-with-placeholder relative w-[560px] h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                            <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="보컬/드럼/기타/베이스/신디 중 1가지 선택"/>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-bold">다룰 줄 아는 악기 (선택)</p>
                    <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                        <input type="text" className="text-base  w-full h-full rounded-[10px] p-4" placeholder=""/>
                    </div>
                </div>
            </div>

            <div className="mt-2 h-[3px] w-5/6 mx-auto bg-[#000000]"/>
            
            <div className="pt-8 pb-16 px-2 ">
                <p className="text-xl font-bold">지원 동기 (자유롭게 작성)</p>
                <textarea className="text-base w-[1184px] h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4" placeholder=""/>
            </div>

            <button className=" w-80 h-16 bg-ocean rounded-[10px] mb-16 text-[#FFFFFF]">
                제출하기
            </button>
        </>

    )
}