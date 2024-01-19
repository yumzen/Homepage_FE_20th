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
  "/assets/images/about/ensemble1.jpg",
  "/assets/images/about/ensemble2.jpg",
  "/assets/images/about/ensemble3.jpg",
  "/assets/images/about/ensemble4.jpg",
  "/assets/images/about/ensemble5.jpg",
  "/assets/images/about/ensemble6.jpg",
  "/assets/images/about/ensemble7.jpg",
  "/assets/images/about/ensemble8.jpg",
  "/assets/images/about/ensemble9.jpg",
  "/assets/images/about/ensemble10.jpg",
  "/assets/images/about/ensemble11.jpg",
];

export default function ImageSlider2() {
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
        <SwiperSlide>
          <Image
            src={images[6]}
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
        {/* <SwiperSlide>
          <p className="text-sm font-bold"># 19기 첫 합주</p>
          <Image
            src={images[7]}
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
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            src={images[8]}
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
        {/* <SwiperSlide>
          <p className="text-sm font-bold"># 공연 준비</p>
          <Image
            src={images[9]}
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
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            src={images[10]}
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
