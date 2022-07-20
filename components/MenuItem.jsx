import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuItem({ href, text }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`text-gray-300 hover:text-white ${
          router.pathname === href
            ? "text-indigo-400 bg-slate/50 border-l lg:border-b lg:border-l-0 border-indigo-400 shadow-2xl px-3 py-1.5 hover:text-indigo-600"
            : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
}
