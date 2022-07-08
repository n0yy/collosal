import Layout from "../components/Layout";
import Jumbotron from "../components/Home/Jumbotron";
import Head from "next/head";
import FeatureCard from "../components/Home/FeatureCard";
import SupportLogo from "../components/Home/SupportLogo";
import HowWeWork from "../components/Home/HowWeWork";
import OurTeam from "../components/Home/OurTeam";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Collosal</title>
      </Head>
      <Layout>
        <>
          <Jumbotron />
          <FeatureCard />
          <SupportLogo />
          <HowWeWork />
          <OurTeam />
          <Projects />
          <Services />
          <Testimonial />
        </>
      </Layout>
    </>
  );
}
