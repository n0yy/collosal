import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-3 sm:px-36 pt-32 lg:pt-20 overflow-hidden">
        <motion.div
          className="absolute bg-orange-400/20 w-2/5 h-2/5 lg:h-96 rounded-full blur-3xl -z-50 left-0 bottom-9"
          animate={{ scale: [1, 1.3, 1.2, 1] }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.2, 0.4, 0.8, 1],
            repeat: Infinity,
          }}
        ></motion.div>
        <div className="absolute bg-sky-400/20 w-2/5 h-2/5 lg:h-96 rounded-full blur-3xl -z-50 left-10 lg:left-64 top-0"></div>
        <motion.div
          className="absolute bg-pink-400/20 w-2/5 h-2/5 lg:h-96 rounded-full blur-3xl -z-50 right-0 top-10"
          animate={{ scale: [1, 0.7, 0.6, 1] }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.2, 0.4, 0.8, 1],
            repeat: Infinity,
          }}
        ></motion.div>
        {React.Children.toArray(children)}
      </main>
      <Footer />
    </>
  );
}
