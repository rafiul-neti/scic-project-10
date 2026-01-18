import React from "react";
import SectionTitle from "./SectionTitle";

const TitleAndHeading = ({ title, heading, titleClass, headingClass }) => {
  return (
    <>
      <SectionTitle className={titleClass}>{title}</SectionTitle>
      <h1 className={`${headingClass} uppercase text-center mt-5 mb-12 text-[40px] font-bold`}>
        {heading}
      </h1>
    </>
  );
};

export default TitleAndHeading;
