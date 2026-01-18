import SectionTitle from "@/Components/Shared/SectionTitle";
import React from "react";
import aboutImg from "../../../../public/images/about.jpg";
import Image from "next/image";
import { subSections } from "@/utils/AllUtils";

const About = () => {
  return (
    <section className="my-20 w-11/12 mx-auto flex flex-col lg:flex-row gap-36 lg:gap-10">
      <div className="relative flex-1 flex justify-end items-start">
        <Image src={aboutImg} alt="About Profile" className="w-3/4" />
        <div className="absolute px-10 md:px-12 lg:px-14 py-6 md:py-9 bg-[#191C24] -bottom-20 left-0 md:left-7 lg:bottom-3 lg:left-5">
          <h1 className="uppercase text-4xl w-auto leading-relaxed font-bold">
            <span className="text-[#EB1616]">25 years</span>
            <br />
            <span className="text-3xl">experience</span>
          </h1>
        </div>
      </div>

      <div className="flex-1">
        <SectionTitle className={`mb-7`}>About Us</SectionTitle>
        <h2 className="text-[38px] font-bold mb-7 uppercase leading-12">
          More Than Just A Haircut. Learn More About Us!
        </h2>
        <p className="text-[#6C7293]">
          At CutCraft, we believe a haircut is more than just style — it’s an
          experience. Our team of skilled stylists crafts each look with care,
          ensuring you leave feeling confident and refreshed. From classic trims
          to modern styles, we provide personalized attention for every client.
          <br />
          <br />
          <span>
            Our passion for hair goes beyond cutting: we nurture, style, and
            inspire. Every visit is an opportunity to express yourself and enjoy
            expert care in a welcoming environment.
          </span>
        </p>

        <div className="my-7 flex items-center gap-5">
          {subSections.map((subSection, i) => (
            <div key={i} className="">
              <h3 className="mb-4 text-2xl font-bold uppercase">
                {subSection.title}
              </h3>
              <p className="text-[#6C7293]">{subSection.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
