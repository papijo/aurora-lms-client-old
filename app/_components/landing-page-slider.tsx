"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Mechatronics BootCamp",
    description: "Learn Marketable skills",
    img: "https://images.unsplash.com/photo-1670282146483-b5d54f55be01",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Facility Management",
    description: "Become a leader in Infrastruture Management",
    img: "https://images.unsplash.com/photo-1469389335181-2198b4caa734",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Cyber-Security",
    description: "Have Zero Trust Infrastructure Implementation",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => {
          return (
            <div
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
              key={slide.id}
            >
              {/* Text Container */}
              <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-6 text-center">
                <h2 className="text-xl lg:text-3xl 2xl:text-4xl">
                  {slide.description}
                </h2>
                <h1 className="text-3xl lg:text-4xl 2xl:text-4xl font-semibold">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-3xl 2xl:text-4xl animate-pulse ">
                  Visit us at:{" "}
                </p>
                <p className="text-xl lg:text-3xl 2xl:text-4xl animate-pulse ">
                  No 6 Ademola Adetokunbo Street
                </p>
                <p className="text-xl lg:text-3xl 2xl:text-4xl animate-pulse ">
                  Maitama, F.C.T Abuja
                </p>
              </div>

              {/* Image Container */}
              <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => {
          return (
            <div
              className={`w-3 h-3 rounded-full ring-2 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
              } `}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full">
                  {" "}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
