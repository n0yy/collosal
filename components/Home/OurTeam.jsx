import { motion } from "framer-motion";
import Image from "next/image";

export default function OutTeam() {
  return (
    <motion.section
      className="mt-32 flex items-center justify-between"
      initial={{ x: 100, opacity: 0.1 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="w-5/12 space-y-3">
        <h3 className="text-green-300 font-semibold">OUR TEAM</h3>
        <h1 className="leading-10 text-white text-3xl font-bold">
          We& apos;re a team of designers, engineers and analysts
        </h1>
        <p className="text-gray-300 leading-7">
          Our team consists of many creative people. We are committed to
          maintaining quality work as well as speed. These creative people work
          together to create maximum work results.
        </p>
      </div>
      <div className="w-6/12">
        <Image src="/Team Illustration.png" alt="Team Illustration" />
      </div>
    </motion.section>
  );
}
