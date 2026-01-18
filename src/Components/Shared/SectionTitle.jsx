import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const SectionTitle = ({ children, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span
        className={`bg-[#191C24] text-[#EB1616] tracking-wider px-6 py-1 font-medium ${roboto.className}`}
      >
        {children}
      </span>
    </div>
  );
};

export default SectionTitle;
