import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import { barbers } from "@/utils/AllUtils";
import React from "react";
import BarberCard from "./BarberCard";

const OurBarbers = () => {
  return (
    <section>
      <TitleAndHeading
        title={`Our Barber`}
        heading={`meet our barber`}
        titleClass={`justify-center`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {barbers.map((barber, i) => (
          <BarberCard
            key={i}
            image={barber.image}
            name={barber.name}
            designation={barber.designation}
          />
        ))}
      </div>
    </section>
  );
};

export default OurBarbers;
