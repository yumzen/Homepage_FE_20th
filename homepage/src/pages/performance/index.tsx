import React from "react";
import Image from "next/image";
import ferrisWheel from "/public/assets/icons/ferris-wheel.png";
import arrow from "/public/assets/icons/arrow.png";

export default function Performance() {
  return (
    <div className="font-['pretendard']">
      <div className="flex flex-col justify-center items-center mt-[4rem] mb-[16rem]">
        <Image
          src={ferrisWheel}
          alt="performance-page-logo"
          width={24}
          height={24}
        />
        <p className="text-center font-bold text-2xl mt-[4rem]">
          정기 공연 및 연합 공연 영상
        </p>
        <div className="inline-flex relative w-[620px] h-[60px] rounded-[30px] my-[4rem] bg-zinc-200">
          <div className="flex justify-center items-center min-w-[140px] h-inherit font-bold text-lg">
            ALL
          </div>
          <div className="flex justify-center items-center min-w-[140px] h-inherit font-bold text-lg">
            2023
          </div>
          <div className="flex justify-center items-center min-w-[140px] h-inherit font-bold text-lg">
            2022
          </div>
          <div className="flex justify-center items-center min-w-[140px] h-inherit font-bold text-lg">
            2021
          </div>
          <div className="flex justify-center items-center min-w-[60px] h-inherit">
            <Image src={arrow} alt="arrow-icon" width={18} height={12} />
          </div>
        </div>
        <div className="grid gap-[60px] justify-center grid-cols-3">
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform"></div>
        </div>
      </div>
    </div>
  );
}
