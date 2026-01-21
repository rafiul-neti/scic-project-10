import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/images/carousel-1.jpg";

const PageTop = ({ pageTitle }) => {
  return (
    <div className="relative h-90 w-full">
      <Image
        src={AboutImage}
        fill
        priority
        alt="about_us"
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/85 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="relative space-y-3.5 ">
          <h1 className="uppercase text-white font-bold text-5xl text-center">
            {pageTitle}
          </h1>
          <p className="uppercase text-white text-xl text-center">
            home / pages / <span className="text-red-600">{pageTitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
