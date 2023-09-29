const OPTIONS_Gender = [
    { value: "남성", name: "남성" },
    { value: "드럼", name: "여성" },
    ];

const OPTIONS_Session1 = [
    { value: "보컬", name: "보컬" },
    { value: "드럼", name: "드럼" },
    { value: "기타", name: "기타" },
    { value: "베이스", name: "베이스" },
    { value: "신디사이저", name: "신디" },
    ];

const OPTIONS_Session2 = [
    { value: "보컬", name: "보컬" },
    { value: "드럼", name: "드럼" },
    { value: "기타", name: "기타" },
    { value: "베이스", name: "베이스" },
    { value: "신디사이저", name: "신디" },
    ];
    
const SelectBox = (props: any) => {
    return (
    <select className=" text-base cursor-pointer w-full h-[64px] rounded-[10px] border border-[#464646] border-solid text-center">
        <option value="" disabled >선택</option>
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
            <div className="flex flex-col justify-center pt-8 pb-10">
                <div className="inline-flex flex-wrap flex-row space-x-8 items-start">
                    <Name/>
                    <Birth/>
                </div>
                <div className="inline-flex flex-wrap flex-row space-x-8 items-start pt-8">
                    <Number/>
                    <Gender/>
                </div>
                <Address/>
            </div>

            <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]"/>

            <div className="flex flex-col justify-center pt-8 pb-10">
                <div className="inline-flex flex-wrap flex-row space-x-8 items-start">
                    <Session1/>
                    <Session2/>
                </div>
                <Experience/>
            </div>

            <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]"/>
            
            <Motive/>

            <div className="flex flex-col justify-center items-center">
                <button className="w-80 h-16 bg-ocean rounded-[10px] mt-28 mb-32 text-[#FFFFFF]">
                    제출하기
                </button>
            </div>
        </>

    )
}

function Name(){
    return(
        <div className="w-[calc(50%-16px)] h-auto">
            <p className="text-xl font-bold">이름</p>
            <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                <input type="text" className="text-base w-full h-full rounded-[10px] p-4 " placeholder="지원자 이름"/>
            </div>
        </div>
    )
}

function Birth(){
    return(
        <div className="w-[calc(50%-16px)] h-auto">
            <p className="text-xl font-bold">생년월일</p>
            <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="8자리로 입력해주세요"/>
            </div>
        </div>
    )
}

function Number(){
    return(
        <div className="w-[calc(50%-16px)] h-auto">
            <p className="text-xl font-bold">전화번호</p>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="기호없이 11자리로 입력해주세요 '예:01012345678'"/>
            </div>
        </div>
    )
}

function Gender(){
    return(
        <div className="w-1/4 h-auto">
            <p className="text-xl font-bold">성별</p>
            <div className="h-[64px] flex-shrink-0 rounded-[10px] mt-4">
                <SelectBox options={OPTIONS_Gender}/>
            </div>
        </div>
    )
}

function Address(){
    return(
        <div className="mt-8">
            <p className="text-xl font-bold">거주지</p>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                <input type="text" className="text-base w-full h-full rounded-[10px] p-4" placeholder="기숙사의 경우 '예:2기숙사/부산'으로 입력해주세요"/>
            </div>
        </div>
    )
}

function Session1(){
    return(
        <div className="w-[calc(50%-16px)] h-auto">
            <span className="text-xl font-bold">1지망 선택 (필수)</span>
            <span className="text-xs text-[#8E8E8E] ml-2">세션 중 1가지 선택</span>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 rounded-[10px] mt-4">
                <SelectBox options={OPTIONS_Session1}/>
            </div>
        </div>
    )
}

function Session2(){
    return(
        <div className="w-[calc(50%-16px)] h-auto">
            <span className="text-xl font-bold">2지망 선택 (필수)</span>
            <span className="text-xs text-[#8E8E8E] ml-2">1지망에 선택한 세션을 제외하고 선택</span>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 mt-4">
                <SelectBox options={OPTIONS_Session2}/>
            </div>
        </div>
    )
}

function Experience(){
    return(
        <div className="mt-8">
            <p className="text-xl font-bold">다룰 줄 아는 악기 (선택)</p>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
                <input type="text" className="text-base  w-full h-full rounded-[10px] p-4" placeholder=""/>
            </div>
        </div>
    )
}

function Motive(){
    return(
        <div className="pt-8">
            <p className="text-xl font-bold">지원 동기 (자유롭게 작성)</p>
            <textarea className="text-base w-full h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4" placeholder=""/>
        </div>
    )
}