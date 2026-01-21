import Link from "next/link";
import React from "react";

const NavLink = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`text-xl font-medium ${className} tracking-wider uppercase text-[#6C7293] hover:text-red-600 duration-300`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
