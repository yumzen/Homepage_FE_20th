import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom, Slide } from "react-slideshow-image";
import styles from "./ImageSlider.module.css";
import Image from "next/image";

export default function ImageSlider() {
  const images = [
    "/assets/images/about/concert1.jpg",
    "/assets/images/about/concert2.jpg",
    "/assets/images/about/concert3.jpg",
    "/assets/images/about/concert4.jpg",
    "/assets/images/about/concert5.jpg",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,
  };

  return (
    <div className="w-full h-[332px]]">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center item-center">
            <Image
              src={each}
              alt="image-slider"
              width={604}
              height={320}
              layout="fixed"
              className={styles.image}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
