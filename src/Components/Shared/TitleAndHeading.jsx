import React from "react";
import SectionTitle from "./SectionTitle";

const TitleAndHeading = ({
  title,
  heading,
  titleClass,
  headingClass,
  titleText,
}) => {
  return (
    <>
      <SectionTitle className={titleClass} classForText={titleText}>
        {title}
      </SectionTitle>
      <h1
        className={`uppercase text-center mt-5 mb-12 text-3xl lg:text-[40px] font-bold ${headingClass}`}
      >
        {heading}
      </h1>
    </>
  );
};

export default TitleAndHeading;
