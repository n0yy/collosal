import Image from "next/image";

export default function Jumbotron() {
  return (
    <section className="flex flex-wrap items-center justify-evenly py-3 pb-20 lg:py-16 border-b-[1px] border-white/25">
      <Image src="/about-hero.png" width={300} height={410} alt="An image" />
      <div className="w-full lg:w-5/12 space-y-3 mt-10 lg:mt-0">
        <h3 className="text-green-300">ABOUT</h3>
        <h1 className="text-4xl text-white tracking-wider font-semibold">
          We are creative, smart and hardworking people
        </h1>
        <p className="text-white/50 tracking-wider">
          Several creative people gather in the same place - that&apos;s
          Collosal. We collaborate to produce the best results, loved by clients
          and comfortable for users. Here we maintain togetherness even though
          with different backgrounds, all the people here are already experts in
          their respective fields.
        </p>
      </div>
    </section>
  );
}
