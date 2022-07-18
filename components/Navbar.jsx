import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 lg:px-36 py-5 fixed top-0 w-full bg-white/5 backdrop-blur-sm shadow-lg z-50">
        {/* logo */}
        <Link href="/">
          <span className="flex items-start text-white space-x-3">
            <Image
              src="/logo/Logo.png"
              width={20}
              height={20}
              alt="Logo Collosal"
            />
            <span className=" font-bold">Collosal.</span>
          </span>
        </Link>

        {/* menu */}
        <Menu>
          <MenuItem href="/services" text="Services" />
          <MenuItem href="/about" text="About" />
          <MenuItem href="/how-we-work" text="How We Work" />
          <MenuItem href="/project" text="Project" />
        </Menu>

        <Link href="/contact">
          <a className="hidden lg:block px-5 text-xs text-white py-2 rounded bg-white/10 shadow hover:shadow-lg">
            Contact
          </a>
        </Link>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* overlay */}
      {toggleMenu && (
        <div className="w-full min-h-full z-50 fixed bg-indigo-500  flex flex-col p-10 space-y-7 backdrop-blur-md transition duration-500 ease-in">
          <span
            className="absolute right-10 top-10 cursor-pointer text-white"
            onClick={() => setToggleMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <MenuItem href="#services" text="Services" />
          <MenuItem href="#about" text="About" />
          <MenuItem href="#how-we-work" text="How We Work" />
          <MenuItem href="#project" text="Project" />
        </div>
      )}
    </>
  );
}
