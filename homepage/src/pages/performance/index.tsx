import React, { useEffect, useState } from "react";
import Image from "next/image";
import ferrisWheel from "/public/assets/icons/ferris-wheel.png";
import arrow from "/public/assets/icons/arrow.png";
import axios from "axios";
import Link from "next/link";

const CHANNEL_ID = "UC282oT6m-7lx37VOmgHoocg";
const API_KEY = "AIzaSyCUrweLnrBfcElC2lVmg6UddXmJgoSWsEA";

export default function Performance() {
  const [playlist, setPlaylist] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`
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
        <div className="grid gap-[60px] justify-center grid-cols-3">
          <div className="w-[360px] h-[326px] rounded-[30px] bg-zinc-200 cursor-pointer overflow-hidden will-change-transform">
            <div className="w-full">
              {playlist && (
                <Image src={playlist[0].snippet.thumbnails["url"]} alt="p1" />
              )}
              <a href={"/playlist/" + playlist[0].id} />
            </div>
            <div>
              <p>{playlist[0].snippet.localized["title"]}</p>
            </div>
          </div>
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
