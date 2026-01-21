import React from "react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="pt-16 lg:pt-24">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
