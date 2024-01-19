import Image from "next/image";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/Main/divider_large.svg";
import rect1 from "/public/assets/images/Main/rectangle_1.svg";
import rect3 from "/public/assets/images/Main/rectangle_3.svg";
import rect4 from "/public/assets/images/Main/rectangle_4.svg";
import circle from "/public/assets/images/Main/circle.svg";
import cd from "/public/assets/images/Main/image_cd1.svg";
import axios from "axios";

// refreshToken cookie 주고 받기 위함
axios.defaults.withCredentials = true;

export default function Home() {
  return (
    //배경이 있으려면 높이를 무조건 설정해줘야되는데 nav bar가 높이에 포함이 안돼서 일단 높이를 screen-104px로 해둠
    <div className="h-[calc(100vh-104px)]">
      <Background>
        <Deco />
        <Headline />
        {/* animate-spin origin-bottom */}

        <Image
          src={cd}
          alt=".."
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-0 right-0 z-20 object-cover object-bottom l:w-[900px] l:h-[450px] m:w-[780px] m:h-[400px] s:w-[720px] s:h-[380px] x:w-[700px] x:h-[360px]"
        />
      </Background>
    </div>
  );
}

function Headline() {
  return (
    <div className="mt-10 bg-transparent ml-[calc(8%)] l:ml-[calc(22%)] s:ml-[calc(19%)] x:ml-[calc(16%)] q:ml-[calc(14%)]">
      <Image
        src={divider}
        alt="kahlua"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[80px] x:w-[88px] s:w-[108px]"
      />
      <p className="font-GothamBold text-5xl font-bold mt-2 s:text-7xl">
        Band Club
      </p>
      <p className="font-Salvar text-5xl font-bold mt-2 s:text-7xl">KAHLUA</p>
      <p className=" font-pretendard text-[#6A6A6A] mt-4 l:text-xl m:text-lg s:text-base">
        We are Hongik University Computer Engineering
        <br />
        Band Club KAHLUA!
      </p>
    </div>
  );
}

function Deco() {
  return (
    <div className=" bg-transparent ">
      <Image
        src={rect3}
        alt=".."
        width={165}
        className="absolute right-0 top-0 w-[calc(12.5%)] mt-10"
      />
      <Image
        src={circle}
        alt=".."
        width={160}
        className="hidden absolute w-[calc(12%)] top-40 l:right-[calc(24%)] s:right-[calc(20%)] x:right-[calc(14%)] x:block"
      />
      <Image
        src={circle}
        alt=".."
        width={160}
        className="hidden absolute left-[calc(5%)] w-[calc(12%)] top-64 x:block"
      />
      <Image
        src={rect4}
        alt=".."
        width={165}
        className="absolute left-0 top-[390px] w-[calc(12.5%)]"
      />
      <Image
        src={rect1}
        alt=".."
        width={165}
        className="absolute left-[calc(12.5%)] bottom-0 w-[calc(12.5%)]"
      />
    </div>
  );
}
