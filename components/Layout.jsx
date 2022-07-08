import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-36 pt-20">{React.Children.only(children)}</main>
      {/* <Footer /> */}
    </>
  );
}
