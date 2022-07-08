import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-36 py-5 fixed top-0 w-full bg-white/5 backdrop-blur-sm shadow-lg z-50">
      {/* logo */}
      <Link className="flex items-center text-white space-x-3" href="/">
        <span>
          <Image
            src="/logo/Logo.png"
            width={20}
            height={20}
            alt="Logo Collosal"
          />
        </span>
        <span className="text-lg font-bold">Collosal.</span>
      </Link>

      {/* menu */}
      <Menu>
        <MenuItem href="/services" text="Services" />
        <MenuItem href="/about" text="About" />
        <MenuItem href="/how-we-work" text="How We Work" />
        <MenuItem href="/roject" text="Project" />
      </Menu>

      <Link href="/contact">
        <a className="px-5 text-xs text-white py-2 rounded bg-white/10 shadow hover:shadow-lg">
          Contact
        </a>
      </Link>
    </nav>
  );
}
