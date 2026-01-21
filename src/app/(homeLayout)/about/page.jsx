import React from "react";
import About from "@/Components/Home/About/About";
import OurBarbers from "@/Components/Home/OurBarbers/OurBarbers";
import PageTop from "@/Components/Shared/PageTop";

const AboutUs = () => {
  return (
    <section>
      <PageTop pageTitle={"about"} />

      <div className="">
        <About />
      </div>

      <div className="w-11/12 mx-auto p-5 lg:p-0">
        <OurBarbers />
      </div>
    </section>
  );
};

export default AboutUs;
