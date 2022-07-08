import Link from "next/link";

export default function MenuItem({ href, text }) {
  return (
    <Link href={href}>
      <a className="text-gray-200 hover:text-white">{text}</a>
    </Link>
  );
}
