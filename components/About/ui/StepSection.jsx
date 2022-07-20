import Image from "next/image";

export default function StepSection({
  imageUrl,
  title,
  subtitle,
  firstText,
  secondText,
  layout,
}) {
  return (
    <section
      className={`${
        layout === "start" && "flex-row-reverse"
      } flex flex-col lg:flex-row items-center justify-between my-32`}
    >
      <Image src={imageUrl} width={400} height={400} alt={subtitle} />
      <div className="space-y-4 text-white w-full lg:w-5/12 py-10 lg:py-0">
        <h3 className="text-green-300">{subtitle}</h3>
        <h1 className="font-semibold text-2xl tracking-wide">{title}</h1>
        <p className="text-sm text-white/50 tracking-wider">{firstText}</p>
        <p className="text-sm text-white/50 tracking-wider">{secondText}</p>
      </div>
    </section>
  );
}
