import Layout from "../components/Layout";
import Header from "../components/Services/Header";
import UIDesign from "../components/Services/UIDesign";
import Development from "../components/Services/Development";
import Maintenance from "../components/Services/Maintenance";
import Head from "next/head";

export default function services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Layout>
        <>
          <Header />
          <UIDesign />
          <Development />
          <Maintenance />
        </>
      </Layout>
    </>
  );
}
