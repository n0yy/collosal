import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="mt-32 flex items-center justify-between">
      <div className="w-1/2">
        <Image
          src="/how_we_work.png"
          width={600}
          height={500}
          alt="How We Work"
        />
      </div>
      <div className="space-y-3 w-1/2">
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
    </section>
  );
}
