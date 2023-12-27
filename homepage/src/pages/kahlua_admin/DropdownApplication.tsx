import React from "react";

const DropdownApplication = () => {
  return (
    <div
      id="dropdown"
      className="w-[238px] h-[332px] flex-col justify-center items-center bg-white"
    >
      <li>전체</li>
      <li>보컬</li>
      <li>드럼</li>
      <li>베이스</li>
      <li>신디</li>
      <li>기타</li>
    </div>
  );
};

export default DropdownApplication;
