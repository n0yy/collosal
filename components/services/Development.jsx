import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function Development() {
  return (
    <section className="block lg:flex items-start justify-evenly my-24">
      <div className="pr-0 lg:pr-28 w-full lg:w-6/12 mb-10 lg:mb-0">
        <h3 className="text-green-300">Development</h3>
        <h1 className="text-2xl text-white tracking-wider leading-10">
          Create solutions to repetitive problems, design applications and
          access anywhere!
        </h1>
        <p className="text-md text-white/50 mt-3">
          Just tell us your repetitive problem or the primitive method used
          today, and we will create a digital solution.
        </p>
        <div className="space-y-3 mt-7">
          <Card iconUrl="/icons/smartphone.png" text="Mobile App Development" />
          <Card iconUrl="/icons/monitor.png" text="Desktop App Development" />
          <Card iconUrl="/icons/globe.png" text="Web Development" />

          <Link href="/services/detail">
            <a className="text-right text-white flex justify-end text-sm pt-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              Services Detail
            </a>
          </Link>
        </div>
      </div>

      <div>
        <Image
          src="/Development Illustration.png"
          width={400}
          height={430}
          alt="Development Illustration"
        />
      </div>
    </section>
  );
}
