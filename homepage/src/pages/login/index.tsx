import React, { FormEvent } from "react";
import logo from "/public/assets/images/admin/admin_logo.svg";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("로그인 성공");
    console.log("ID ", id);
    console.log("PW ", password);
  };

  const onIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const onPwHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[780px] h-[560px] bg-gray flex-col justify-center items-center">
        <Image src={logo} alt="admin-logo" className="h-[30px] m-[40px]" />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={onSubmitHandler}
        >
          <label style={{ display: "none" }}>아이디</label>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={onIdHandler}
            className="w-[580px] h-[74px] mt-[40px] mb-[60px] pl-[30px] rounded-[10px]"
          />
          <label style={{ display: "none" }}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPwHandler}
            className="w-[580px] h-[74px] mb-[90px] pl-[30px] rounded-[10px]"
          />
          <button className="w-[214px] h-[60px] bg-btnGray text-white text-xl font-bold rounded-[10px]">
            관리자 로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
