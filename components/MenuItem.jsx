import Link from "next/link";

export default function MenuItem({ href, text }) {
  return (
    <Link href={href}>
      <a className="text-gray-400 hover:text-white">{text}</a>
    </Link>
  );
}
