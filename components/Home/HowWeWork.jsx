import Image from "next/image";
import { motion } from "framer-motion";

export default function HowWeWork() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.section
      className="mt-32 block lg:flex items-center justify-between mx-5 lg:mx-0"
      initial={{ x: -100, opacity: 0.1 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="w-full lg:w-1/2 -z-50">
        <Image
          src="/how_we_work.png"
          width={600}
          height={500}
          alt="How We Work"
        />
      </div>
      <div className="space-y-3 w-full mt-5 lg:mt-0 lg:w-1/2">
        <h3 className="text-green-300 font-semibold">HOW WE WORK?</h3>
        <h1 className="text-3xl font-bold text-white leading-10">
          Everything is well planned, well designed and developed wholeheartedly
        </h1>
        <p className="leading-7 text-gray-400">
          Careful planning makes us confident, developed with best practices so
          that the project can be maintained. We always test projects before
          they are shipped.
        </p>
      </div>
    </motion.section>
  );
}
