import Link from "next/link";
import React from "react";

const NavLink = ({ href, className, children }) => {
  return (
    <Link href={href} className={`text-lg font-medium ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
