import Image from "next/image";

export default function Card({ iconUrl, text }) {
  return (
    <div className="flex items-center space-x-5 text-white bg-white/10 px-3 py-2 rounded-md border-[1px] border-white/20 shadow-xl">
      <Image src={iconUrl} width={30} height={30} alt={text} />
      <p className="text-sm">{text}</p>
    </div>
  );
}
