import Services from "@/Components/Home/Services/Services";
import Testimonial from "@/Components/Home/Testimonial/Testimonial";
import PageTop from "@/Components/Shared/PageTop";
import React from "react";

const OurServices = () => {
  return (
    <section>
      <PageTop pageTitle={"services"} />

      <div className="my-20 w-11/12 mx-auto">
        <Services />
      </div>

      <div className="">
        <Testimonial />
      </div>
    </section>
  );
};

export default OurServices;
