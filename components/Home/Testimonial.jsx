import Image from "next/image";
import Slider from "react-slick";
import SliderSettings from "../../utils/SliderSettings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Courtney Henry",
      avatarUrl: "/avatar/courtney-henry.png",
      jobTitle: "Biffco Enterprises Ltd.",
      message:
        "Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable.",
    },
    {
      id: 2,
      name: "Esther Howard",
      avatarUrl: "/avatar/esther-howard.png",
      jobTitle: "Abstergo Ltd.",
      message:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
    },
    {
      id: 3,
      name: "Ronald Richards",
      jobTitle: "Barone LLC.",
      avatarUrl: "/avatar/ronald-richards.png",
      message:
        "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
    },
  ];

  return (
    <section className="my-32 text-white">
      <header className="text-center px-0 lg:px-72 space-y-3">
        <span className="text-green-400 text-sm uppercase font-bold">
          testimonial
        </span>
        <h3 className="text-2xl font-bold">
          What do our clients say that we never let down?
        </h3>
      </header>
      {/* card */}
      <div className="mt-20 relative">
        {/* background blop */}
        <div className="absolute bg-pink-400/20 blur-xl -z-50 left-0 w-72 h-72 lg:w-80 lg:h-80 rounded-full animate-pulse"></div>
        <div className="absolute bg-lime-400/20 blur-xl -z-50 w-3/4 lg:w-96 h-3/4 lg:h-96 rounded-full animate-pulse right-1/3"></div>
        <div className="absolute bg-sky-400/20 blur-xl -z-50 w-72 lg:w-80 h-72 lg:h-80 rounded-full animate-pulse right-0"></div>

        <div className="px-5">
          <Slider {...SliderSettings}>
            {testimonials.map((testimonial) => (
              <div
                className="h-96 bg-white/10 p-10 rounded-lg shadow-2xl border border-indigo-500/75 backdrop-blur-md mb-10"
                key={testimonial.id}
              >
                {/* header  */}
                <header className="text-center">
                  <Image
                    src={testimonial.avatarUrl}
                    width={90}
                    height={90}
                    alt=""
                  />
                  <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                  <h6 className="text-xs text-gray-400">
                    {testimonial.jobTitle}
                  </h6>
                </header>
                {/* message */}
                <p className="text-center mt-5 text-sm font-extralight text-gray-300 leading-6 tracking-wide">
                  {`"${testimonial.message}"`}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
