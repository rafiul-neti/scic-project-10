import React from "react";
import FooterHeading from "./FooterHeading";
import Link from "next/link";
import { quickFooterLinks } from "@/utils/AllUtils";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const QuickLinks = () => {
  return (
    <div>
      <FooterHeading className={`mb-5`}>Quick Links</FooterHeading>

      <div className="flex flex-col gap-3">
        {quickFooterLinks.map((elem, i) => (
          <Link
            href={elem.href}
            key={i}
            className={`uppercase hover:text-red-600 duration-200 ${roboto.className}`}
          >
            <span className="mr-2.5 text-lg">{">"}</span>
            {elem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
