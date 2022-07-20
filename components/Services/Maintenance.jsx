import Image from "next/image";
import Link from "next/link";

export default function Maintenance() {
  const maintenances = [
    { iconUrl: "/icons/backup.png", text: "Backup everyday" },
    { iconUrl: "/icons/upgrade.png", text: "Upgrade" },
    { iconUrl: "/icons/cleaning.png", text: "Cleaning everyweek" },
    { iconUrl: "/icons/check.png", text: "Fixing Error" },
  ];

  return (
    <section className="block lg:flex items-center justify-between py-24">
      <div>
        <Image
          src="/Maintenance Illustration.png"
          width={550}
          height={550}
          alt="Maintenance"
        />
      </div>
      <div className="w-full lg:w-5/12 mt-10 lg:mt-0">
        <h3 className="text-green-300">Maintenance</h3>
        <h1 className="text-2xl text-white leading-10 tracking-wide">
          Think of your server as your own child, taking care of it every day
        </h1>
        <p className="text-white/50 mt-3 leading-7 tracking-wide">
          We will back up your servers every day, clean them every week, upgrade
          them when there is an update.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between">
          {maintenances.map((maintenance, index) => (
            <div
              className="flex items-center space-x-5 w-5/12 mb-5 mr-5"
              key={index}
            >
              <Image
                src={maintenance.iconUrl}
                width={50}
                height={50}
                alt={maintenance.text}
              />
              <p className="text-sm text-white">{maintenance.text}</p>
            </div>
          ))}

          <Link href="/services/detail">
            <a className="text-right text-white flex justify-end text-sm pt-10">
              <>
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
              </>
              Services Detail
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
