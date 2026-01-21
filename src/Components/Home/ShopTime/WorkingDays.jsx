import PriceTime from "@/Components/Shared/PriceTime";
import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import Image from "next/image";
import React from "react";
import OpenImage from "../../../../public/images/open.jpg";
import { workingDays } from "@/utils/AllUtils";

const WorkingDays = () => {
  return (
    <section className="my-20 flex flex-col-reverse lg:flex-row-reverse">
      <div className="flex-1 bg-[#191C24] px-12 py-8">
        <TitleAndHeading
          heading={`Professional Barbers Are Waiting For You`}
          headingClass={`text-left mb-7! mt-3!`}
          title={`Working Hours`}
          titleText={`bg-black`}
        />

        <div className="">
          <PriceTime items={workingDays} priceClass={``} />
        </div>
      </div>
      <div className="flex-1">
        <Image src={OpenImage} alt="open_image" />
      </div>
    </section>
  );
};

export default WorkingDays;
