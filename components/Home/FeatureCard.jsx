import Image from "next/image";

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
    <section className="my-40 flex items-center justify-evenly">
      {features.map((feature) => (
        <div
          className="w-72 h-64 bg-white/5 rounded-md p-7 shadow hover:shadow-2xl"
          key={feature.logoUrl}
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
        </div>
      ))}
    </section>
  );
}
