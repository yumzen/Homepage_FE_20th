import React, { useEffect, useState } from "react";
import Image from "next/image";
import btDown from "public/assets/images/performance/bt_down.svg";
import btUp from "public/assets/images/performance/bt_up.svg";
import All from "./All";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/performance/divider_medium.svg";
import styles from "./index.module.css";
import playIcon from "/public/assets/images/performance/ic_play.svg";

require("dotenv").config();

const thumbnails = [
  "/assets/images/performance/thumbnail1.jpg",
  "/assets/images/performance/thumbnail2.jpg",
  "/assets/images/performance/thumbnail3.jpg",
  "/assets/images/performance/thumbnail4.jpg",
  "/assets/images/performance/thumbnail5.jpg",
  "/assets/images/performance/thumbnail6.jpg",
  "/assets/images/performance/thumbnail7.jpg",
  "/assets/images/performance/thumbnail8.jpg",
  "/assets/images/performance/thumbnail9.jpg",
  "/assets/images/performance/thumbnail10.jpg",
  "/assets/images/performance/thumbnail11.jpg",
  "/assets/images/performance/thumbnail12.jpg",
  "/assets/images/performance/thumbnail13.jpg",
];

export default function Performance() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(0);

  function openMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const openHandler = () => {
      if (isOpen === false) {
        setIsOpen(false);
      }
    };
  }, [isOpen]);

  function yearHandler(year: number) {
    setSelectedYear(year);
  }

  return (
    <div
      className={`${
        selectedYear === 0 ? "h-[2500px]" : " h-[1300px]"
      }  flex items-center justify-center`}
    >
      <Background>
        <div className="font-['pretendard']">
          <div className="flex flex-col justify-center items-center mt-[4rem] mb-[16rem]">
            <Image
              src={divider}
              alt="divider"
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <p className="text-center font-bold text-2xl mt-[16px] mb-[48px]">
              정기 공연 및 연합 공연 영상
            </p>

            <div
              className={`${
                isOpen ? "h-[120px]" : "h-[60px]"
              } flex relative flex-wrap w-[620px] rounded-[10px] mb-[96px] bg-[#EEEEEE]`}
            >
              <button
                className={styles.btnStyle}
                onClick={() => {
                  yearHandler(0);
                }}
              >
                ALL
              </button>
              <button
                className={styles.btnStyle}
                onClick={() => {
                  yearHandler(2023);
                }}
              >
                2023
              </button>
              <button
                className={styles.btnStyle}
                onClick={() => {
                  yearHandler(2022);
                }}
              >
                2022
              </button>
              <button
                className={styles.btnStyle}
                onClick={() => {
                  yearHandler(2019);
                }}
              >
                2019
              </button>
              <button
                className="justify-center items-center min-w-[60px] h-[60px] cursor-pointer"
                onClick={openMenu}
              >
                <Image
                  src={isOpen ? btUp : btDown}
                  alt="arrow-icon"
                  id="arrow"
                  width={26}
                  height={12}
                  style={{ border: "none" }}
                />
              </button>
              <button
                className={`${
                  isOpen ? "flex" : "hidden"
                } justify-center items-center min-w-[140px] h-[60px] font-bold text-lg cursor-pointer`}
                onClick={() => {
                  yearHandler(2018);
                }}
              >
                2018
              </button>
              <button
                className={`${
                  isOpen ? "flex" : "hidden"
                } justify-center items-center min-w-[140px] h-[60px] font-bold text-lg cursor-pointer`}
                onClick={() => {
                  yearHandler(2017);
                }}
              >
                2017
              </button>
              <button
                className={`${
                  isOpen ? "flex" : "hidden"
                } justify-center items-center min-w-[140px] h-[60px] font-bold text-lg cursor-pointer`}
                onClick={() => {
                  yearHandler(2016);
                }}
              >
                2016
              </button>
            </div>

            <div className="w-full flex mx-[10rem] justify-center">
              <div
                id="gridContainer"
                className="grid gap-[64px] justify-center grid-cols-3"
              >
                {selectedYear === 0 && <All />}
                {selectedYear === 2023 && (
                  <>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuvOWc_mlR5d5eC3EnYZPiH"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[0]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2023.03.06 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row mt-[0.5rem]">
                          <p className={styles.subText}># 스물다섯 스물하나</p>
                          <p className={styles.subText}># 데이식스</p>
                          <p className={styles.subText}># 잔나비</p>
                          <p className={styles.subText}># YB 밴드</p>
                          <p className={styles.subText}># 백예린</p>
                          <p className={styles.subText}># 미도와 파라솔</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luus1TGr0V9kNhXqSRJJbJkTW"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[1]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2023.01.28 새해맞이 공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># Last Christmas</p>
                          <p className={styles.subText}># 너드커넥션</p>
                          <p className={styles.subText}># 쏜애플</p>
                          <p className={styles.subText}>
                            # Can&apos;t take my eyes off you
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === 2022 && (
                  <>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luusvf1KLF90v1FQBAOejv8_g"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[2]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2022.09.01 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># The Volunteers</p>
                          <p className={styles.subText}># 사건의 지평선</p>
                          <p className={styles.subText}># (여자)-아이들</p>
                          <p className={styles.subText}># Sk8er Boy</p>
                          <p className={styles.subText}># Muse</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutWQhQJW-c1j1_rkFdwsRYt"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[3]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2022.03.07 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 윤하</p>
                          <p className={styles.subText}># Reality</p>
                          <p className={styles.subText}># 새소년</p>
                          <p className={styles.subText}>
                            # Champagne Supernova
                          </p>
                          <p className={styles.subText}># 비와 당신</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === 2019 && (
                  <>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luuuq168b0ZO6X0bE5p5W8LbX"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[4]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 박하사탕</p>
                          <p className={styles.subText}># Basket Case</p>
                          <p className={styles.subText}># 크라잉넛</p>
                          <p className={styles.subText}>
                            # Wake Up When September Ends
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luusva097pGe_sxwVQ5LwBeLN"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[5]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.06 깔루아&고스락 연합공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 그의 바다</p>
                          <p className={styles.subText}># This Love</p>
                          <p className={styles.subText}># 아이유</p>
                          <p className={styles.subText}># 로맨틱펀치</p>
                          <p className={styles.subText}># Triptych</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutTG8UD9hNIWbv_F3JotPS-"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[6]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.03 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}>
                            # 나에게로 떠나는 여행
                          </p>
                          <p className={styles.subText}># Hysteria</p>
                          <p className={styles.subText}># 브로큰발렌타인</p>
                          <p className={styles.subText}>
                            # Time Is Running Out
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === 2018 && (
                  <>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuvV3XHuq5t_xgpziwANqfau"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[7]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2018.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 델리스파이스</p>
                          <p className={styles.subText}># 자우림</p>
                          <p className={styles.subText}>
                            # Don&apos;t Look Back In Anger
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === 2017 && (
                  <>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuIldOPyDdJ-G84HM2zGYR5"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[8]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.11 문화제
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 쏜애플</p>
                          <p className={styles.subText}># 시퍼런 봄</p>
                          <p className={styles.subText}>
                            # 우리의 밤은 당신의 낮보다 아름답다
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutEF-XP649aTv4I8xTaaNKd"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[9]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 봄이 오면</p>
                          <p className={styles.subText}># 빅뱅</p>
                          <p className={styles.subText}># 낙화</p>
                          <p className={styles.subText}>
                            # 뜨거운 여름은 가고 남은 건 볼품없지만
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luuv5NBskT0N_LHOGiPNET16p"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[10]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.05 공학인의 밤
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 장기하와 얼굴들</p>
                          <p className={styles.subText}># 암실</p>
                          <p className={styles.subText}># 살아있는 너의 밤</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuHdbZ3r2wiFAIXYSHmHNBx"
                        )
                      }
                    >
                      <div className="relative">
                        <Image
                          src={thumbnails[11]}
                          alt="thumbnail"
                          sizes="100vw"
                          width={0}
                          height={0}
                          className={styles.thumbnail}
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.03 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># Butterfly</p>
                          <p className={styles.subText}># 아틀란티스 소녀</p>
                          <p className={styles.subText}># Hooka</p>
                          <p className={styles.subText}>
                            # Almost is never Enough
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === 2016 && (
                  <div
                    className="w-[360px] h-[326px] rounded-[10px] cursor-pointer overflow-hidden will-change-transform"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuyEwS6WeHKNWWnsAGjwV3c"
                      )
                    }
                  >
                    <div className="relative">
                      <Image
                        src={thumbnails[12]}
                        alt="thumbnail"
                        sizes="100vw"
                        width={0}
                        height={0}
                        className={styles.thumbnail}
                      />
                      <Image
                        src={playIcon}
                        alt="playIcon"
                        className={styles.playicon}
                      />
                    </div>
                    <div
                      className="w-full pt-[1rem]"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <h3 className="text-[20px] font-bold">
                        2016.09 정기공연
                      </h3>
                      <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                        <p className={styles.subText}># 검정치마</p>
                        <p className={styles.subText}># 버스커 버스커</p>
                        <p className={styles.subText}># Starlight</p>
                        <p className={styles.subText}># 우리 지금 만나</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
}
