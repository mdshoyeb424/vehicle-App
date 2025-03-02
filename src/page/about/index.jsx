import React from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "../../components/about/aboutHero";
import AboutUs from "../../components/about/aboutUs";
import Layout from "../layout";
import BackPath from "../../common/backPath";
import FAQ from "../../components/home/faq";
import { Helmet } from "react-helmet";
import { SeoSript } from "../../components/seo/script";

const About = () => {
  const { pathname } = useLocation();
  return (
    <Layout>
       <Helmet>
        <title>About AA1 Scrap Center - Eco-friendly Vehicle Disposal</title>
        <meta
          name="description"
          content="AA1 Scrap Center offers environmentally friendly vehicle scrapping services. We process end-of-life vehicles and support a cleaner environment."
        />
        <meta
          name="keywords"
          content="end-of-life vehicles, ELVs, vehicle disposal, eco-friendly, vehicle recycling, scrap center, de-register vehicles, NCR vehicle disposal, vehicle scrapping, vehicle dismantling, vehicle depollution, sustainable vehicle disposal, vehicle recycling in NCR, scrap car recycling, pollution control in vehicle scrapping, commercial vehicle scrapping, passenger vehicle scrapping, eco-friendly car disposal, vehicle scrapping process, vehicle disposal near Delhi, vehicle disposal near Ghaziabad, scrap yard services, vehicle disposal near Meerut, Muzaffarnagar vehicle disposal"
        />

        <meta
          property="og:title"
          content="AA1 Scrap Center - Eco-friendly Vehicle Disposal"
        />
        <meta
          property="og:description"
          content="AA1 Scrap Center offers environmentally friendly vehicle scrapping services. We process end-of-life vehicles and support a cleaner environment."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://www.aa1scrapcenter.com" />
        <SeoSript />
      </Helmet>
      <AboutHero data={hero} />
      <BackPath paths={pathname} />
      <section  className="pb-0" >
        <AboutUs />
      </section>
      <section  className="pt-0" >
        <FAQ />
      </section>
    </Layout>
  );
};

export default About;
const hero = {
  name: "About",
  para: "M/s AA1 Scrap Center operates a Registered Vehicle Scrapping Facility (RVSF) approved by the Uttar Pradesh Transport Department. Equipped with modern technologies, we safely and scientifically scrap End-of-Life Vehicles (ELVs) in compliance with MoRTH, CPCB, and state guidelines. Our facility can process over 50,000 ELVs annually, contributing to environmental safety by dismantling and recycling old, polluting vehicles.Located in the National Capital Region (NCR), near cities like Delhi, Ghaziabad, Meerut, and others, we offer a seamless, transparent process for de-registering, de-polluting, dismantling, and recycling all types of vehicles.",
};
