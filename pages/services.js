import Layout from "../components/Layout";
import Header from "../components/services/Header";
import UIDesign from "../components/services/UIDesign";
import Development from "../components/services/Development";
import Maintenance from "../components/services/Maintenance";

export default function services() {
  return (
    <>
      <head>
        <title>Services</title>
      </head>
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
