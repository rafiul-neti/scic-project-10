import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import { prices } from "@/utils/AllUtils";
import Image from "next/image";
import React from "react";
import PriceImage from "../../../../public/images/price.jpg";
import PriceTime from "@/Components/Shared/PriceTime";

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
          <PriceTime items={prices} />
        </div>
      </div>
      <div className="flex-1">
        <Image src={PriceImage} alt="price_image" />
      </div>
    </section>
  );
};

export default PricePlan;
