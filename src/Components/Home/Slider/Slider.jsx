"use client";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "We Will Keep You An Awesome Look",
    image: "/images/carousel-1.jpg",
  },
  {
    title: "Luxury Haircut at Affordable Price",
    image: "/images/carousel-2.jpg",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-104 lg:h-160">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/85 z-10" />

              {/* Text Content */}
              <div className="relative z-20 flex h-full items-center justify-center px-4">
                <div className="w-3/4 lg:w-1/2 mx-auto space-y-4.5">
                  <h2 className="uppercase text-[1.45rem] sm:text-[2.15rem] md:text-5xl lg:text-7xl font-extrabold lg:font-bold text-white mb-4 leading-9 md:leading-14 lg:leading-20">
                    {slide.title}
                  </h2>
                  <p className="flex items-center gap-3 text-base md:text-xl lg:text-2xl font-bold">
                    <FaLocationDot className="text-[#EB1616]" />
                    <span className="uppercase">
                      123 Street, Dhaka, Bangladesh
                    </span>
                  </p>
                  <p className="flex items-center gap-3 text-base md:text-xl lg:text-2xl font-bold">
                    <FaPhone className="text-[#EB1616]" />
                    <span>+880 1642 548791</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
