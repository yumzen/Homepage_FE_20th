import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
const images = [
  "/assets/images/about/concert1.jpg",
  "/assets/images/about/concert2.jpg",
  "/assets/images/about/concert3.jpg",
  "/assets/images/about/concert4.jpg",
  "/assets/images/about/concert5.jpg",
  "/assets/images/about/concert6.jpg",
];

export default function ImageSlider1() {
  const [active, setActive] = useState<number>(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 크리스마스 공연</p>
          <Image
            src={images[0]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 3월 정기공연</p>
          <Image
            src={images[1]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 9월 정기 공연</p>
          <Image
            src={images[2]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2023 3월 정기 공연</p>
          <Image
            src={images[3]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 크리스마스 공연</p>
          <Image
            src={images[4]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 크리스마스 공연</p>
          <Image
            src={images[5]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 2022 크리스마스 공연</p>
          <Image
            src={images[6]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
