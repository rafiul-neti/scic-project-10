import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import { prices } from "@/utils/AllUtils";
import Image from "next/image";
import React from "react";
import PriceImage from "../../../../public/images/price.jpg";

const PricePlan = () => {
  return (
    <section className="my-20 flex flex-col lg:flex-row">
      <div className="flex-1 bg-[#191C24] px-12 py-8">
        <TitleAndHeading
          heading={`Check Out Our Barber Services And Prices`}
          headingClass={`text-left mb-7! mt-3!`}
          title={`Price & Plan`}
          titleText={`bg-black`}
        />

        <div className="">
          {prices.map((price, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-2 text-lg">
                <h1 className="uppercase font-bold">{price.title}</h1>
                <p className="text-red-600">{price.price}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <Image src={PriceImage} alt="" />
      </div>
    </section>
  );
};

export default PricePlan;
