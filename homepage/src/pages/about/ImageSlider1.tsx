import React from "react";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Zoom } from "react-slideshow-image";
import Image from "next/image";

export default function ImageSlider1() {
  const images = [
    "/assets/images/about/concert1.jpg",
    "/assets/images/about/concert2.jpg",
    "/assets/images/about/concert3.jpg",
    "/assets/images/about/concert4.jpg",
    "/assets/images/about/concert5.png",
    "/assets/images/about/concert6.jpg",
    "/assets/images/about/concert7.jpg",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,

    // icons
    prevArrow: (
      <div className="flex ml-10 justify-center items-center content-center text-center">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="flex mr-10 justify-center items-center content-center text-center ">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full h-[332px]]">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center item-center relative w-[460px] h-[320px]"
          >
            <Image
              src={each}
              alt="image-slider"
              layout="fill"
              className="rounded-[30px] z-10"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
