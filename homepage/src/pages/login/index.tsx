import React, { FormEvent } from "react";
import logo from "/public/assets/images/admin/admin_logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");

  const onIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPwHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  const onLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("로그인 성공");
    console.log("EMAIL: ", email);
    console.log("PW: ", password);
  };

  return (
    <div className="font-pretendard w-full h-screen flex justify-center items-center">
      <div className="w-[780px] h-[560px] bg-gray">
        <Image
          src={logo}
          alt="admin-logo"
          className="w-[250px] h-[30px] m-[40px]"
        />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={onLoginHandler}
        >
          <label style={{ display: "none" }}>이메일</label>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onIdHandler}
            required
            className="w-[580px] h-[74px] mt-[40px] mb-[60px] pl-[30px] rounded-[10px]"
          />
          <label style={{ display: "none" }}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPwHandler}
            required
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
