import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function ImageSlider3() {
  const [active, setActive] = useState<number>(0);
  const images = [
    "/assets/images/about/play1.jpg",
    "/assets/images/about/play2.jpg",
    "/assets/images/about/play3.jpg",
    "/assets/images/about/play4.jpg",
    "/assets/images/about/play5.jpg",
    "/assets/images/about/play6.jpg",
    "/assets/images/about/play7.jpg",
    "/assets/images/about/play8.jpg",
    "/assets/images/about/play9.jpg",
    "/assets/images/about/play10.jpg",
    "/assets/images/about/play11.jpg",
    "/assets/images/about/play12.jpg",
    "/assets/images/about/play13.jpg",
    "/assets/images/about/play14.jpg",
  ];

  function prevIndexHandler() {
    if (active === 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  }

  function nextIndexHandler() {
    if (active === images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }

  return (
    <div className="relative w-full h-full">
      {/* Testimonial image */}
      <div>
        <div className="flex justify-center item-center">
          <div>
            {images.map((each, index) => (
              <Transition
                key={index}
                show={active === index}
                className="flex justify-center item-center"
              >
                <Image
                  key={index}
                  className="relative top-4 left-1/2 -translate-x-1/2 rounded-[30px]"
                  src={each}
                  width={480}
                  height={320}
                  objectFit="fill"
                  alt="image slider"
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <button
        id="data-carousel-prev"
        type="button"
        onClick={prevIndexHandler}
        className="absolute top-0 left-0 z-30 flex justify-center items-center h-full px-4 ml-16 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex justify-center items-center w-16 h-16 ml-16 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-black dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        id="data-carousel-next"
        type="button"
        onClick={nextIndexHandler}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 mr-16 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-16 h-16 mr-16 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-black dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
