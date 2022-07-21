import { useEffect } from "react";
import Layout from "../components/Layout";
import AboutPages from "../components/About";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <Layout>
      <AboutPages />
    </Layout>
  );
}
