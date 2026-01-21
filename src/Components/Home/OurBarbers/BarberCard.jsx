import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const BarberCard = ({ name, image, designation }) => {
  return (
    <div>
      <Image src={image} alt={name} className="w-full" />
      
      <div className="bg-[#191C24] text-center py-5 space-y-1.5">
        <h1 className="text-2xl uppercase font-bold">{name}</h1>
        <p className={`text-red-600 text-lg ${roboto.className}`}>
          {designation}
        </p>
      </div>
    </div>
  );
};

export default BarberCard;
