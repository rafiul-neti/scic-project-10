import React from "react";
import PriceTag from "./PriceTag";

const PriceTime = ({ items }) => {
  return (
    <div className="">
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex items-center justify-between py-2 text-lg">
            <h1 className="uppercase font-bold">{item.title}</h1>
            <PriceTag
              className={
                item.price === "09 AM - 09 PM"
                  ? "text-[#6C7293]"
                  : "text-red-600"
              }
            >
              {item.price}
            </PriceTag>
          </div>
          <hr className="border-white/10" />
        </div>
      ))}
    </div>
  );
};

export default PriceTime;
