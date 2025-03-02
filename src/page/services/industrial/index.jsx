import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";
import AboutHero from "../../../components/about/aboutHero";
import BackPath from "../../../common/backPath";
import IndustrialCom from "../../../components/services/industrial";
import IndutrailProcess from "../../../components/services/industrialRecycleProcess";

const Industrial = () => {
  const {pathname}=useLocation();
  return (
    <Layout>
      <AboutHero  data={data}/>
      <BackPath paths={pathname?.replaceAll("-"," ")}/>
      <section data-aos="fade-up"  data-aos-duration="600">
        <IndustrialCom/>
      </section>
      <section className="pt-1" data-aos="fade-up"  data-aos-duration="600">
       <IndutrailProcess/>
      </section>
    </Layout>
  );
};

export default Industrial;
const data = {
  name: "Industrial Scrap",
  para: "SRI RVSF is establishing itself as a solution provider for Industrial Scrap, encompassing both Ferrous and Non-Ferrous Scrap. SRI RVSF offers a comprehensive solution to help you dispose of your industrial scrap and achieve the best return on your investment.",
};
