import React from "react";
import FooterHeading from "./FooterHeading";
import { iconDetails } from "@/utils/AllUtils";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const GetInTouch = () => {
  return (
    <div>
      <FooterHeading className={`mb-5`}>Get in touch</FooterHeading>
      {iconDetails.map((item, i) => (
        <div key={i} className="flex items-center gap-3 space-y-3">
          <span className="w-10 h-10 bg-black flex items-center justify-center">
            <item.icon className="text-red-600" size={20} />
          </span>
          <p className={`${roboto.className}`}>{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default GetInTouch;
