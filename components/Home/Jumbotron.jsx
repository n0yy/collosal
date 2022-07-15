import Button from "../Button";
import { motion } from "framer-motion";

export default function Jumbotron() {
  return (
    <section className="mt-5 lg:mt-16">
      {/* bg */}
      <>
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
      </>
      {/* end bg */}
      <div className="text-clip lg:text-center px-5 lg:px-52 space-y-4 lg:space-y-7">
        <h2 className="font-semibold text-md lg:text-xl text-green-300">
          CLIENT-DEVELOPMENT DRIVEN
        </h2>
        <h1 className="text-5xl font-bold text-white">
          We Design. We Develop. We Ship. In The Same Day.
        </h1>
        <p className="leading-7 tracking-wider text-gray-300">
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </p>
        <div className="space-x-3">
          <Button
            href="/send-quote"
            text="Send Quote"
            color="bg-indigo-500 shadow-indigo-500/50"
          />
          <Button
            href="/learn-more"
            text="Learn More"
            color="bg-white/10 shadow-white/10"
          />
        </div>
      </div>
    </section>
  );
}
