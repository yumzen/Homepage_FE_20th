import Image from "next/image";

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

export default function All() {
  return (
    <>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuvOWc_mlR5d5eC3EnYZPiH"
          )
        }
      >
        <Image
          src={thumbnails[0]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2023.03.06 정기공연</h3>
          <div className="flex flex-wrap flex-row mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 스물다섯 스물하나</p>
            <p className="text-[14px] mr-[0.75rem]"># 데이식스</p>
            <p className="text-[14px] mr-[0.75rem]"># 잔나비</p>
            <p className="text-[14px] mr-[0.75rem]"># YB 밴드</p>
            <p className="text-[14px] mr-[0.75rem]"># 백예린</p>
            <p className="text-[14px]"># 미도와 파라솔</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9Luus1TGr0V9kNhXqSRJJbJkTW"
          )
        }
      >
        <Image
          src={thumbnails[1]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2023.01.28 새해맞이 공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># Last Christmas</p>
            <p className="text-[14px] mr-[0.75rem]"># 너드커넥션</p>
            <p className="text-[14px] mr-[0.75rem]"># 쏜애플</p>
            <p className="text-[14px] mr-[0.75rem]">
              # Can&apos;t take my eyes off you
            </p>
            <p className="text-[14px] mr-[0.75rem]"># Radiohead</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9Luusvf1KLF90v1FQBAOejv8_g"
          )
        }
      >
        <Image
          src={thumbnails[2]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2022.09.01 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># The Volunteers</p>
            <p className="text-[14px] mr-[0.75rem]"># 사건의 지평선</p>
            <p className="text-[14px] mr-[0.75rem]"># (여자)-아이들</p>
            <p className="text-[14px] mr-[0.75rem]"># Sk8er Boy</p>
            <p className="text-[14px] mr-[0.75rem]"># Muse</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuutWQhQJW-c1j1_rkFdwsRYt"
          )
        }
      >
        <Image
          src={thumbnails[3]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2022.03.07 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 윤하</p>
            <p className="text-[14px] mr-[0.75rem]"># Reality</p>
            <p className="text-[14px] mr-[0.75rem]"># 새소년</p>
            <p className="text-[14px] mr-[0.75rem]"># Champagne Supernova</p>
            <p className="text-[14px] mr-[0.75rem]"># 비와 당신</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9Luuuq168b0ZO6X0bE5p5W8LbX"
          )
        }
      >
        <Image
          src={thumbnails[4]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2019.09 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 박하사탕</p>
            <p className="text-[14px] mr-[0.75rem]"># Basket Case</p>
            <p className="text-[14px] mr-[0.75rem]"># 크라잉넛</p>
            <p className="text-[14px] mr-[0.75rem]">
              # Wake Up When September Ends
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9Luusva097pGe_sxwVQ5LwBeLN"
          )
        }
      >
        <Image
          src={thumbnails[5]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">
            2019.06 깔루아&고스락 연합공연
          </h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 그의 바다</p>
            <p className="text-[14px] mr-[0.75rem]"># This Love</p>
            <p className="text-[14px] mr-[0.75rem]"># 아이유</p>
            <p className="text-[14px] mr-[0.75rem]"># 로맨틱펀치</p>
            <p className="text-[14px] mr-[0.75rem]"># Triptych</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuutTG8UD9hNIWbv_F3JotPS-"
          )
        }
      >
        <Image
          src={thumbnails[6]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2019.03 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 나에게로 떠나는 여행</p>
            <p className="text-[14px] mr-[0.75rem]"># Hysteria</p>
            <p className="text-[14px] mr-[0.75rem]"># 브로큰발렌타인</p>
            <p className="text-[14px] mr-[0.75rem]"># Time Is Running Out</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuuvV3XHuq5t_xgpziwANqfau"
          )
        }
      >
        <Image
          src={thumbnails[7]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2018.09 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 델리스파이스</p>
            <p className="text-[14px] mr-[0.75rem]"># 자우림</p>
            <p># Don&apos;t Look Back In Anger</p>
            <p className="text-[14px] mr-[0.75rem]"># Radiohead</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuIldOPyDdJ-G84HM2zGYR5"
          )
        }
      >
        <Image
          src={thumbnails[8]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2017.11 문화제</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 쏜애플</p>
            <p className="text-[14px] mr-[0.75rem]"># 시퍼런 봄</p>
            <p className="text-[14px] mr-[0.75rem]">
              # 우리의 밤은 당신의 낮보다 아름답다
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuutEF-XP649aTv4I8xTaaNKd"
          )
        }
      >
        <Image
          src={thumbnails[9]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2017.09 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 봄이 오면</p>
            <p className="text-[14px] mr-[0.75rem]"># 빅뱅</p>
            <p className="text-[14px] mr-[0.75rem]"># 낙화</p>
            <p className="text-[14px] mr-[0.75rem]">
              # 뜨거운 여름은 가고 남은 건 볼품없지만
            </p>
            <p className="text-[14px] mr-[0.75rem]"># Radiohead</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9Luuv5NBskT0N_LHOGiPNET16p"
          )
        }
      >
        <Image
          src={thumbnails[10]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2017.05 공학인의 밤</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 장기하와 얼굴들</p>
            <p className="text-[14px] mr-[0.75rem]"># 암실</p>
            <p className="text-[14px] mr-[0.75rem]"># 살아있는 너의 밤</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuHdbZ3r2wiFAIXYSHmHNBx"
          )
        }
      >
        <Image
          src={thumbnails[11]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2017.03 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># Butterfly</p>
            <p className="text-[14px] mr-[0.75rem]"># 아틀란티스 소녀</p>
            <p className="text-[14px] mr-[0.75rem]"># Hooka</p>
            <p className="text-[14px] mr-[0.75rem]"># Almost is never Enough</p>
          </div>
        </div>
      </div>
      <div
        className="w-[360px] h-[326px] rounded-[30px] bg-[#EEEEEE] cursor-pointer overflow-hidden will-change-transform"
        onClick={() =>
          window.open(
            "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuyEwS6WeHKNWWnsAGjwV3c"
          )
        }
      >
        <Image
          src={thumbnails[12]}
          alt="thumbnail"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="w-full p-[1rem]">
          <h3 className="text-[20px] font-bold">2016.09 정기공연</h3>
          <div className="flex flex-wrap flex-row  mt-[0.5rem]">
            <p className="text-[14px] mr-[0.75rem]"># 검정치마</p>
            <p className="text-[14px] mr-[0.75rem]"># 버스커 버스커</p>
            <p className="text-[14px] mr-[0.75rem]"># Starlight</p>
            <p className="text-[14px] mr-[0.75rem]"># 우리 지금 만나</p>
          </div>
        </div>
      </div>
    </>
  );
}
