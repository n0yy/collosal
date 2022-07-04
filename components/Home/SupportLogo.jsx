import Image from "next/image";

export default function SupportLogo() {
  const logos = [
    { logoUrl: "/logo/Github.png" },
    { logoUrl: "/logo/Forbes.com.png" },
    { logoUrl: "/logo/Google.png" },
    { logoUrl: "/logo/Microsoft.png" },
    { logoUrl: "/logo/Facebook.png" },
  ];
  return (
    <section className="border-y-[1px] border-white/20 py-7 flex items-center justify-evenly">
      {logos.map((logo) => (
        <Image src={logo.logoUrl} width={100} height={25} alt={logo.logoUrl} />
      ))}
    </section>
  );
}
