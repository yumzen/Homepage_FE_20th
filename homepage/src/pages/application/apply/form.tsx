import axios from "axios";
import { useEffect, useState } from "react";

const OPTIONS_Gender = [
  { value: "남성", name: "남성" },
  { value: "여성", name: "여성" },
];

const OPTIONS_Session1 = [
  { value: "보컬", name: "보컬" },
  { value: "드럼", name: "드럼" },
  { value: "기타", name: "기타" },
  { value: "베이스", name: "베이스" },
  { value: "신디", name: "신디" },
];

const OPTIONS_Session2 = [
  { value: "보컬", name: "보컬" },
  { value: "드럼", name: "드럼" },
  { value: "기타", name: "기타" },
  { value: "베이스", name: "베이스" },
  { value: "신디", name: "신디" },
];

export default function Form() {
  const [name, setName] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("남성");
  const [address, setAddress] = useState("");
  const [first_preference, setFirst] = useState("보컬");
  const [second_preference, setSecond] = useState("보컬");
  const [play_instrument, setInstrument] = useState("");
  const [motive, setMotive] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isDataComplete =
      name.trim() !== "" &&
      phone_num.trim() !== "" &&
      birthdate.trim() !== "" &&
      gender.trim() !== "" &&
      address.trim() !== "" &&
      first_preference.trim() !== "" &&
      second_preference.trim() !== "" &&
      true;
    setIsFormComplete(isDataComplete);
  }, [
    name,
    phone_num,
    birthdate,
    gender,
    address,
    first_preference,
    second_preference,
    play_instrument,
    motive,
  ]);

  const handleSubmit = async () => {
    try {
      const formData = {
        name,
        phone_num,
        birthdate,
        gender,
        address,
        first_preference,
        second_preference,
        play_instrument,
        motive,
      };

      const validGenderChoices = ["남성", "여성"];
      const validSessionChoices = ["보컬", "드럼", "기타", "베이스", "신디"];

      // Validate gender
      if (!validGenderChoices.includes(gender)) {
        console.error(`${gender} is not a valid choice for gender.`);
        return;
      }

      // Validate first_preference
      if (!validSessionChoices.includes(first_preference)) {
        console.error(
          `${first_preference} is not a valid choice for first preference.`
        );
        return;
      }

      // Validate second_preference
      if (!validSessionChoices.includes(second_preference)) {
        console.error(
          `${second_preference} is not a valid choice for second preference.`
        );
        return;
      }

      const response = await axios.post(
        "https://kahluaband.com/application/apply/",
        formData
      );
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        console.log("요청이 성공적으로 처리되었습니다.");
        console.log("응답 데이터:", response.data);
      } else {
        console.error("요청이 실패했습니다. HTTP 상태 코드:", response.status);
        console.error("에러 응답:", response.data);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  type SelectBoxProps = {
    options: { value: string; name: string }[];
    onChange: (value: string) => void;
    value: string;
  };

  const SelectBox: React.FC<SelectBoxProps> = (props) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange(e.target.value);
    };

    return (
      <div className="flex flex-col">
        <select
          className="text-base cursor-pointer w-full h-[64px] rounded-[10px] border border-[#464646] border-solid text-center"
          onChange={handleOptionChange}
          value={props.value}
        >
          <option value="" disabled>
            선택
          </option>
          {props.options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  function Name() {
    return (
      <div className="w-[calc(50%-16px)] h-auto">
        <div className="text-xl font-bold">이름</div>
        <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
          <input
            value={name}
            minLength={30}
            type="text"
            className="text-base w-full h-full rounded-[10px] p-4 "
            placeholder="지원자 이름"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    );
  }

  function Birth() {
    return (
      <div className="w-[calc(50%-16px)] h-auto">
        <p className="text-xl font-bold">생년월일</p>
        <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
          <input
            value={birthdate}
            type="text"
            className="text-base w-full h-full rounded-[10px] p-4"
            placeholder="8자리로 입력해주세요"
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
      </div>
    );
  }

  function Number() {
    return (
      <div className="w-[calc(50%-16px)] h-auto">
        <p className="text-xl font-bold">전화번호</p>
        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
          <input
            value={phone_num}
            type="text"
            className="text-base w-full h-full rounded-[10px] p-4"
            placeholder="기호없이 11자리로 입력해주세요 '예:01012345678'"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
      </div>
    );
  }

  function Gender() {
    return (
      <div className="w-1/4 h-auto">
        <p className="text-xl font-bold">성별</p>
        <div className="h-[64px] flex-shrink-0 rounded-[10px] mt-4">
          <SelectBox
            options={OPTIONS_Gender}
            onChange={(value) => setGender(value)}
            value={gender}
          />
        </div>
      </div>
    );
  }

  function Address() {
    return (
      <div className="mt-8">
        <p className="text-xl font-bold">거주지</p>
        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
          <input
            value={address}
            type="text"
            className="text-base w-full h-full rounded-[10px] p-4"
            placeholder="기숙사의 경우 '예:2기숙사/부산'으로 입력해주세요"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
    );
  }

  function Session1() {
    return (
      <div className="w-[calc(50%-16px)] h-auto">
        <span className="text-xl font-bold">1지망 선택 (필수)</span>
        <span className="text-xs text-[#8E8E8E] ml-2">세션 중 1가지 선택</span>
        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 rounded-[10px] mt-4">
          <SelectBox
            options={OPTIONS_Session1}
            onChange={(value) => setFirst(value)}
            value={first_preference}
          />
        </div>
      </div>
    );
  }

  function Session2() {
    return (
      <div className="w-[calc(50%-16px)] h-auto">
        <span className="text-xl font-bold">2지망 선택 (필수)</span>
        <span className="text-xs text-[#8E8E8E] ml-2">
          1지망에 선택한 세션을 제외하고 선택
        </span>
        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 mt-4">
          <SelectBox
            options={OPTIONS_Session2}
            onChange={(value) => setSecond(value)}
            value={second_preference}
          />
        </div>
      </div>
    );
  }

  function Experience() {
    return (
      <div className="mt-8">
        <p className="text-xl font-bold">다룰 줄 아는 악기 (선택)</p>
        <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
          <input
            value={play_instrument}
            type="text"
            className="text-base  w-full h-full rounded-[10px] p-4"
            placeholder=""
            onChange={(e) => setInstrument(e.target.value)}
          />
        </div>
      </div>
    );
  }

  function Motive() {
    return (
      <div className="pt-8">
        <p className="text-xl font-bold">지원 동기 (자유롭게 작성)</p>
        <textarea
          value={motive}
          className="text-base w-full h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4"
          placeholder=""
          onChange={(e) => setMotive(e.target.value)}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center pb-10">
        <div className="inline-flex flex-wrap flex-row items-start justify-between">
          <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
            <p className="s:text-xl font-bold text-lg">이름</p>
            <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
              <input
                value={name}
                minLength={30}
                type="text"
                className="text-sm s:text-base w-full h-full rounded-[10px] p-4 "
                placeholder="지원자 이름"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
            <p className="s:text-xl font-bold text-lg">생년월일</p>
            <div className="input-with-placeholder relative h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
              <input
                value={birthdate}
                type="text"
                className="text-sm s:text-base w-full h-full rounded-[10px] p-4"
                placeholder="8자리로 입력해주세요"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="inline-flex flex-wrap flex-row s:space-x-8 items-start ">
          <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
            <p className="s:text-xl font-bold text-lg">전화번호</p>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
              <input
                value={phone_num}
                type="text"
                className="text-sm s:text-base w-full h-full rounded-[10px] p-4"
                placeholder="기호없이 11자리로 입력해주세요 '예:01012345678'"
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
          </div>
          <div className="s:w-1/4 h-auto pt-8 p:w-1/2">
            <p className="s:text-xl font-bold text-lg">성별</p>
            <div className="h-[64px] flex-shrink-0 rounded-[10px] mt-4">
              <SelectBox
                options={OPTIONS_Gender}
                onChange={(value) => setGender(value)}
                value={gender}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="s:text-xl font-bold text-lg">거주지</p>
          <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
            <input
              value={address}
              type="text"
              className="text-sm s:text-base w-full h-full rounded-[10px] p-4"
              placeholder="기숙사의 경우 '예:2기숙사/부산'으로 입력해주세요"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]" />

      <div className="flex flex-col justify-center pb-10">
        <div className="inline-flex flex-wrap flex-row items-start justify-between">
          <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
            <span className="s:text-xl font-bold text-lg">
              1지망 선택 (필수)
            </span>
            <span className="text-xs text-[#8E8E8E] ml-2">
              세션 중 1가지 선택
            </span>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 rounded-[10px] mt-4">
              <SelectBox
                options={OPTIONS_Session1}
                onChange={(value) => setFirst(value)}
                value={first_preference}
              />
            </div>
          </div>
          <div className="s:w-[calc(50%-16px)] p:w-full h-auto pt-8">
            <span className="s:text-xl font-bold text-lg">
              2지망 선택 (필수)
            </span>
            <span className="text-xs text-[#8E8E8E] ml-2">
              1지망에 선택한 세션을 제외하고 선택
            </span>
            <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 mt-4">
              <SelectBox
                options={OPTIONS_Session2}
                onChange={(value) => setSecond(value)}
                value={second_preference}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="s:text-xl font-bold text-lg">
            다룰 줄 아는 악기 (선택)
          </p>
          <div className="input-with-placeholder relative w-full h-[64px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4">
            <input
              value={play_instrument}
              type="text"
              className="text-base  w-full h-full rounded-[10px] p-4"
              placeholder=""
              onChange={(e) => setInstrument(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 h-[3px] mx-auto bg-[#D3D3D3]" />

      <div className="pt-8">
        <p className="s:text-xl font-bold text-lg">지원 동기 (자유롭게 작성)</p>
        <textarea
          value={motive}
          className="text-base w-full h-[256px] flex-shrink-0 border border-[#464646] border-solid rounded-[10px] mt-4 p-4"
          placeholder=""
          onChange={(e) => setMotive(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <button
          disabled={!isFormComplete}
          className="w-80 h-16 bg-ocean rounded-[10px] mt-28 mb-32 text-[#FFFFFF]"
          onClick={handleSubmit}
        >
          제출하기
        </button>
      </div>
    </>
  );
}
