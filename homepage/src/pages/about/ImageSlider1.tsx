import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./SliderStyle.module.css";

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
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1080: { slidesPerView: 3, spaceBetween: 30 },
        }}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={images[0]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[1]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[2]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[3]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[4]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[5]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
