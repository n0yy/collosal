import Link from "next/link";

export default function Button({ text, href, color }) {
  return (
    <Link href={href}>
      <a
        className={`px-7 py-3 text-sm text-white rounded shadow-md hover:shadow-xl transition duration-200 ${color}`}
      >
        {text}
      </a>
    </Link>
  );
}
