import { useEffect } from "react";
import Layout from "../components/Layout";
import About from "../components/About";

export default function about() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <Layout>
      <About />
    </Layout>
  );
}
