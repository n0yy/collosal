import Image from "next/image";
import Button from "../Button";

export default function Projects() {
  const projects = [
    {
      title: "Mobile Project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nesciunt, iusto magni nemo quibusdam reiciendis?",
      detailUrl: "/",
      imageUrl: "/mobile-project.png",
    },
    {
      title: "Desktop Project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nesciunt, iusto magni nemo quibusdam reiciendis?",
      detailUrl: "/",
      imageUrl: "/desktop-project.png",
    },
  ];

  return (
    <section className="my-32">
      <div className="text-center mx-64">
        <h6 className="text-green-400 text-sm mb-2">PROJECTS</h6>
        <h3 className="text-2xl text-white font-semibold">
          We have completed many amazing projects that you will not believe
        </h3>
      </div>

      <div className="mt-20 flex items-center justify-evenly">
        {/* card */}
        {projects.map((project) => (
          <div className="w-5/12 space-y-5 min-h-min" key={project.title}>
            <img
              src={project.imageUrl}
              alt="Mobile Project"
              width="500"
              height="450"
              className="border border-white/10 rounded-md"
            />
            <div className="text-white text-center space-y-4">
              <h3 className="text-xl">{project.title}</h3>
              <h6 className="text-white/70">{project.description}</h6>
              <div className="z-10">
                <Button text="Detail" href="/" color="border rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
