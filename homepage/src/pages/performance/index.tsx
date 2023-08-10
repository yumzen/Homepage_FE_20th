import React, { useEffect, useState } from "react";
import Image from "next/image";
import ferrisWheel from "/public/assets/icons/ferris-wheel.png";
import arrow from "/public/assets/icons/arrow.png";
import axios from "axios";
import Link from "next/link";

require("dotenv").config();

export default function Performance() {
  const [playlist, setPlaylist] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setPlaylist(res.data.items);
      })
      .catch(() => {});
  }, []);
  console.log(playlist);

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
        <div className="inline-flex relative w-[620px] h-[60px] rounded-[30px] my-[4rem] bg-zinc-300">
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
        <div className="w-full">
          <div
            id="gridContainer"
            className="grid gap-[60px] justify-center grid-cols-3"
          >
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-200 cursor-pointer overflow-hidden will-change-transform"></div>
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-300 cursor-pointer overflow-hidden will-change-transform"></div>
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-200 cursor-pointer overflow-hidden will-change-transform"></div>
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-300 cursor-pointer overflow-hidden will-change-transform"></div>
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-200 cursor-pointer overflow-hidden will-change-transform"></div>
            <div className="w-[360px] h-[326px] rounded-[30px] bg-ocean-300 cursor-pointer overflow-hidden will-change-transform"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
