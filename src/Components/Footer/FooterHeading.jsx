import React from "react";

const FooterHeading = ({ children, className }) => {
  return (
    <h1
      className={`uppercase text-2xl lg:text-[30px] font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

export default FooterHeading;
