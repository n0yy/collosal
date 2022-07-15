import Image from "next/image";
import { motion } from "framer-motion";

export default function SupportLogo() {
  const logos = [
    { logoUrl: "/logo/Github.png" },
    { logoUrl: "/logo/Forbes.com.png" },
    { logoUrl: "/logo/Google.png" },
    { logoUrl: "/logo/Microsoft.png" },
    { logoUrl: "/logo/Facebook.png" },
  ];
  return (
    <motion.section
      className="border-y-[1px] border-white/20 py-7 flex flex-wrap gap-6 items-center justify-evenly"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {logos.map((logo) => (
        <Image
          src={logo.logoUrl}
          width={100}
          height={25}
          alt={logo.logoUrl}
          key={logo.logoUrl}
        />
      ))}
    </motion.section>
  );
}
