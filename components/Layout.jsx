import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-3 sm:px-36 pt-32 lg:pt-20 overflow-hidden">
        {React.Children.toArray(children)}
      </main>
      <Footer />
    </>
  );
}
