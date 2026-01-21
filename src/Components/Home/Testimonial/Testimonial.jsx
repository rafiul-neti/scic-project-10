"use client";
import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa6";
import Image from "next/image";
import { reviews } from "@/utils/AllUtils";
import { Roboto } from "next/font/google";
import TitleAndHeading from "@/Components/Shared/TitleAndHeading";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const Testimonial = () => {
  return (
    <section>
      <TitleAndHeading
        title={`Testimonial`}
        titleClass={`justify-center`}
        heading={`What Our Clients Say!`}
      />
      <div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-8 rounded-2xl bg-[#191C24]">
                <FaQuoteRight className="text-[#C3DFE2] text-5xl" />
                <p
                  className={`mt-3 text-white/90 text-base ${roboto.className}`}
                >
                  {review.comment}
                </p>
                <div className="my-6 border border-[#03464D] border-dashed h-0.5"></div>
                <div className="flex items-center gap-5">
                  <div className="w-18 bg-red-600 p-1 rounded-full">
                    <Image
                      src={review.user_photoURL}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-2xl font-bold tracking-wide">
                      {review.userName}
                    </h5>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
