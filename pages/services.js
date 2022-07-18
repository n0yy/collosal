import Layout from "../components/Layout";
import Header from "../components/services/Header";
import UIDesign from "../components/services/UIDesign";
import Development from "../components/services/Development";
import Maintenance from "../components/services/Maintenance";
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
