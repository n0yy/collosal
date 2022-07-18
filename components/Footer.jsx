import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const services = [
    { id: 1, text: "Web Development" },
    { id: 2, text: "App Development" },
    { id: 3, text: "UI Design" },
    { id: 4, text: "Consultation" },
    { id: 5, text: "Maintenance" },
  ];

  const companies = [
    { id: 1, text: "About" },
    { id: 2, text: "Contact" },
    { id: 3, text: "Send Quote" },
    { id: 4, text: "Privacy Policy" },
    { id: 5, text: "Term of Services" },
    { id: 6, text: "Jobs" },
  ];

  const resources = [
    { id: 1, text: "Support" },
    { id: 2, text: "License" },
    { id: 3, text: "Documentation" },
    { id: 4, text: "Sitemap" },
  ];

  return (
    <footer className="text-white mx-5 lg:mx-36">
      <div className="border-y border-white/10 py-12 block lg:flex items-center justify-evenly">
        <h3 className="text-2xl font-bold w-full lg:w-6/12">
          {`We've prepared everything, it's time for you to tell the problem`}
        </h3>
        <div className="w-full mt-5 mx-auto lg:w-4/12 space-x-3">
          <Button
            text="Send Quote"
            href="/send-quote"
            color="bg-indigo-500 shadow-indigo-500/50"
          />
          <Button
            text="Ask Us"
            href=""
            color="bg-white/10 shadow-white/10 px-10"
          />
        </div>
      </div>

      <div className="my-10 lg:my-16 flex flex-wrap items-start justify-evenly gap-10">
        <div className="order-last lg:order-1">
          <Link href="/">
            <span className="space-x-2">
              <Image
                src="/logo/Logo.png"
                width={20}
                height={20}
                alt="Collosal Logo"
              />
              <span className="-mb-2">Collosal</span>
            </span>
          </Link>
          <div className="mt-3">
            <h6 className="font-normal text-white/50 text-xs">
              Copyright &copy; 2022
            </h6>
            <h6 className="font-normal text-white/50 text-xs">
              Design By Collosal LLC
            </h6>
          </div>
        </div>

        <div>
          <h3 className="text-lg">Services</h3>
          <ul className="mt-3 space-y-3">
            {services.map((service) => (
              <li className="text-xs text-white/60" key={service.id}>
                <a href="">{service.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">Company</h3>
          <ul className="mt-3 space-y-3">
            {companies.map((company) => (
              <li className="text-xs text-white/60" key={company.id}>
                <a href="">{company.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">Resources</h3>
          <ul className="mt-3 space-y-3">
            {resources.map((resource) => (
              <li className="text-xs text-white/60" key={resource.id}>
                <a href="">{resource.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
