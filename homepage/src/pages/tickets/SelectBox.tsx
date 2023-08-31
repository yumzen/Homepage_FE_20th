import { useState } from 'react';

export default function SelectBox() {
    const [selectedValue, setSelectedValue] = useState('18시 00분'); //기본값은 '18시 00분'으로 설정
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); 

    const options = [
        { value: '', label: '입장 시간을 선택하세요.' },
        { value: '18시 00분', label: '18시 00분' },
        { value: '18시 30분', label: '18시 30분' },
        { value: '19시 00분', label: '19시 00분' },
    ];

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionClick = (value:any) => {
        if (value !== '') {  //선택 불가한 value 설정
            setSelectedValue(value);
            setIsDropdownVisible(false);
        }
    };

    return (
        <div className="relative inline-block text-center">
            <button
                type="button"
                className="appearance-none outline-none text-[14px] font-[700] leading-[17px] cursor-pointer w-[270px] h-[48px] rounded-[6px] border-solid bg-[white] text-[#281CFF] border-[2px] border-[#281CFF]"
                onClick={toggleDropdown}
            >
                {selectedValue}
            </button>
            <ul
                className={`${
                    isDropdownVisible ? 'block' : 'hidden'
                } absolute top-[58px] left-0 right-0 bg-white border-solid border-[2px] border-[#281CFF] bg-[white] rounded-[6px] overflow-hidden`}
            >
                {options.map((option) => (
                    <li key={option.value}>
                        <button
                            type="button"
                            className=" w-full text-center py-[7px] text-[14px] focus:outline-none"
                            onClick={() => handleOptionClick(option.value)}
                            disabled={option.value === ''} //value가 ''일 경우, 버튼 비활성화
                        >
                            {option.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
