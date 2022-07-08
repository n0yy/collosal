import Button from "../Button";
import { motion } from "framer-motion";

export default function Services() {
  const ourServices = [
    {
      id: 1,
      title: "UI Design",
      price: 1200,
      services: [
        "10 design pages",
        "Well-documented",
        "4 Revisions",
        "$100/addition pages",
      ],
      detailUrl: "/",
    },
    {
      id: 2,
      title: "Development",
      price: 5000,
      services: [
        "Web & Mobile",
        "Well-documented",
        "8 Revisions",
        "$1000/addition pages",
      ],
      detailUrl: "/",
    },
    {
      id: 3,
      title: "Maintenance",
      price: 3000,
      services: [
        "Daily Backup",
        "3 hours of maintenance",
        "Including fixing",
        "$50/addition hour",
      ],
      detailUrl: "/",
    },
  ];

  return (
    <section className="bg-indigo-600/20 rounded-xl p-10">
      {/* title */}
      <div className="text-center px-64 space-y-3">
        <h3 className="text-green-400 text-sm uppercase font-bold">
          Our Services
        </h3>
        <h1 className="text-2xl text-white font-bold">
          What do you need? Choose a service that can help you
        </h1>
      </div>
      {/* card */}
      <div className="flex items-center justify-evenly mt-20">
        {ourServices.map((items) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={` ${
              items.id === 1
                ? "bg-indigo-600"
                : items.id === 2
                ? "bg-blue-700"
                : "bg-pink-600"
            } bg-indigo-600 px-5 py-10 w-3/12 rounded-xl shadow-xl`}
            key={items.id}
          >
            {/* header */}
            <header className="text-white flex justify-between">
              <h3 className="underline">{items.title}</h3>
              <div>
                <span className="block text-xs text-white/75">
                  Starting from
                </span>
                <span className="text-2xl font-bold">${items.price}</span>
              </div>
            </header>
            <div className="text-center text-white my-12">
              <ul>
                {items.services.map((service) => (
                  <li className="text-sm font-semibold">{service}</li>
                ))}
              </ul>
            </div>
            <>
              <Button
                text="Detail"
                href="/"
                color="bg-white block py-2 text-indigo-700 text-center"
              />
            </>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
