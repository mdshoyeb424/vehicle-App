import React from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "../../../components/about/aboutHero";
import BackPath from "../../../common/backPath";
import Offer from "../../../components/services/offers";
import Parts from "../../../components/services/parts";
import Layout from "../../layout";

const Sell = () => {
  const { pathname } = useLocation();
  return (
    <Layout>
      <AboutHero data={data} />
      <BackPath paths={pathname?.replaceAll("-", " ")} />
      <section data-aos="fade-up"  data-aos-duration="600">
        <Offer />
      </section>
      <section>
    <Parts/>
   </section>
    </Layout>
  );
};

export default Sell;
const data = {
  name: "Sell Your Vehicle",
  para: "SRI RVSF, India's top authorized unit for scrapping and deregistration of ELVs, aims to make roads safer and the environment cleaner. We offer hassle-free recycling for vehicles, industrial scrap, and refurbished spare parts. Our goal is to provide high-quality scrap to buyers, suppliers, and dealers nationwide. Customized solutions to satisfy every client's needs are our delight.",
};
