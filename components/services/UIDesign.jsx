import Image from "next/image";

export default function UIDesign() {
  return (
    <section className="py-20 block px-5 lg:px-0 lg:flex items-end justify-between">
      <Image
        src="/UI Design Illustration.png"
        width={500}
        height={400}
        alt="UI Design Illustration"
      />
      <div className="space-y-3 w-full lg:w-5/12 mt-10 lg:mt-0">
        <h3 className="text-green-300">UI Design</h3>
        <h1 className="text-2xl text-white tracking-wider">
          Don't let your idea get caught by others, design a prototype for your
          idea
        </h1>
        <p className="text-md text-white/50">
          Delegate your ideas as quickly as possible, create beautiful designs
          and vivid prototypes.
        </p>
        <div className="flex items-center space-x-5">
          <span>
            {" "}
            <Image
              src="/Small Card Icon-1.png"
              width={250}
              height={140}
              alt="Small Card"
            />
          </span>
          <span>
            <Image
              src="/Small Card Icon.png"
              width={250}
              height={140}
              alt="Small Card"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
