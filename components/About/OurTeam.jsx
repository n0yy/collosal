import Image from "next/image";

export default function OurTeam() {
  const ourTeams = [
    {
      id: 1,
      name: "Albert Flores",
      job: "Founder",
      imageUrl: "/albert-flores.png",
    },
    {
      id: 2,
      name: "Devon Lane",
      job: "Chief Technology Officer",
      imageUrl: "/devon-lane.png",
    },
    {
      id: 3,
      name: "Darrell Steward",
      job: "UI Designer",
      imageUrl: "/darrell-steward.png",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      job: "Software Engineer",
      imageUrl: "/marvin-mcKinney.png",
    },
    {
      id: 5,
      name: "Floyd Miles",
      job: "System Analyst",
      imageUrl: "/floyd-miles.png",
    },
    {
      id: 6,
      name: "Annette Black",
      job: "Project Manager",
      imageUrl: "/annete-black.png",
    },
  ];
  return (
    <section className="py-32">
      <div className="text-white text-center px-10 lg:px-80 mb-28">
        <h3 className="text-green-300 uppercase">our team</h3>
        <h1 className="text-3xl font-semibold">
          Meet the team! All creative people are here
        </h1>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-5">
        {ourTeams.map((person, index) => (
          <div
            className="text-white bg-white/5 w-fit rounded-b-lg shadow-xl"
            key={index}
          >
            <Image
              src={person.imageUrl}
              width={330}
              height={360}
              alt="Albert Flores"
            />
            <div className="p-5">
              <h5 className="text-xl">{person.name}</h5>
              <h6 className="text-xs text-white/50">{person.job}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
