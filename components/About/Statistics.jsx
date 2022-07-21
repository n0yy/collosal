import Image from "next/image";

export default function Statistics() {
  const statistics = [
    { id: 1, text: "8", subText: "Countries", imageUrl: "/logo/flag.png" },
    { id: 2, text: "192", subText: "Clients", imageUrl: "/logo/person.png" },
    { id: 1, text: "$100k", subText: "Earning", imageUrl: "/logo/dollar.png" },
  ];
  return (
    <section className="py-32 space-y-20 ">
      <div className="text-center px-10 lg:px-80">
        <h3 className="text-green-300">statistics</h3>
        <h1 className="text-3xl font-semibold text-white">
          In 3 years we reached 8 countries, 193 clients and earning $100k USD
        </h1>
      </div>
      <div className="bg-white/5 w-full px-5 lg:px-12 gap-4 py-7 rounded block lg:flex items-center justify-between">
        {statistics.map((statistic, index) => (
          <div
            className="flex items-center text-white space-x-7 mb-5 lg:mb-0"
            key={index}
          >
            <Image
              src={statistic.imageUrl}
              alt={statistics.subText}
              width={60}
              height={60}
            />
            <span className="leading-4">
              <h1 className="text-2xl font-bold">{statistic.text}</h1>
              <h3 className="text-white/50 uppercase text-xs tracking-wider">
                {statistic.subText}
              </h3>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
