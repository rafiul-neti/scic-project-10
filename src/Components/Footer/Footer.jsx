import React from "react";
import GetInTouch from "./GetInTouch";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <section className="mt-20 bg-[#191C24] pt-10">
      <div className="w-10/12 mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-between mb-14">
        <GetInTouch />
        <QuickLinks />
        <Newsletter />
      </div>

      <div className="w-10/12 mx-auto bg-black flex flex-col lg:flex-row items-center justify-between px-6 py-7">
        <p className={`text-[#6C7293] ${roboto.className}`}>
          ©{" "}
          <Link href={`/`} className="underline hover:text-red-600">
            CutCraft
          </Link>
          , All Rights Reserved.
        </p>
        <p className={`text-[#6C7293] ${roboto.className}`}>
          Designed by{" "}
          <Link
            href={`https://www.linkedin.com/in/irafiul210`}
            className="underline hover:text-red-600"
          >
            Rafiul
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
