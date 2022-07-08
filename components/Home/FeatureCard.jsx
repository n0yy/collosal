import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureCard() {
  const features = [
    {
      logoUrl: "/logo/figma.svg",
      title: "Design",
      text: "The project interface will be designed first, our favorite tool is Figma.",
    },
    {
      logoUrl: "/logo/code.svg",
      title: "Develop",
      text: "Transform design and write business logic here. Choose the technology you want.",
    },
    {
      logoUrl: "/logo/ship.svg",
      title: "Ship",
      text: "After the work is complete, we will send the project and all its assets to you.",
    },
  ];

  return (
    <motion.section
      className="my-40 flex items-center justify-evenly"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {features.map((feature) => (
        <motion.div
          className="w-72 h-64 bg-white/5 rounded-md p-7 shadow hover:shadow-2xl cursor-pointer"
          key={feature.logoUrl}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* logo */}
          <div className="w-7 h-7 bg-white/10 flex items-center justify-center mb-7">
            <Image src={feature.logoUrl} alt="figma" width={16} height={16} />
          </div>
          {/* body */}
          <div className="space-y-3">
            <h5 className="text-xl text-white">{feature.title}</h5>
            <p className="leading-7 text-gray-400">{feature.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
