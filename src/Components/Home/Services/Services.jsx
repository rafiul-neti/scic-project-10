import SectionTitle from "@/Components/Shared/SectionTitle";
import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/utils/AllUtils";

const Services = () => {
  return (
    <section>
      <TitleAndHeading
        title={`Services`}
        titleClass={`justify-center`}
        heading={`what we provide`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-4.5 md:gap-10">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
