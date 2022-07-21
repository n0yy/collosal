import { useEffect } from "react";
import Jumbotron from "./Jumbotron";
import OurTeam from "./OurTeam";
import Statistics from "./Statistics";
import SupportLogo from "./SupportLogo";

export default function AboutPages() {
  useEffect(() => {
    document.title = "About";
  });

  return (
    <>
      <Jumbotron />
      <Statistics />
      <SupportLogo />
      <OurTeam />
    </>
  );
}
