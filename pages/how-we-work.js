import { useEffect } from "react";
import Layout from "../components/Layout";
import HowWeWorkPages from "../components/How-We-Work";

export default function HowWeWork() {
  useEffect(() => {
    document.title = "How We Work";
  }, []);

  return (
    <Layout>
      <HowWeWorkPages />
    </Layout>
  );
}
