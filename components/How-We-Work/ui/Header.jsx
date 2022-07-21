export default function Header({ subTitle, title }) {
  return (
    <section className="px-10 lg:px-72 text-ellipsis lg:text-center border-b border-white/20 py-16 lg:py-20">
      <h3 className="text-green-300">{subTitle}</h3>
      <h1 className="text-4xl text-white tracking-wider font-semibold">
        {title}
      </h1>
    </section>
  );
}
