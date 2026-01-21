import React from "react";

const PriceTag = ({ className, children }) => {
  return <p className={`${className}`}>{children}</p>;
};

export default PriceTag;
