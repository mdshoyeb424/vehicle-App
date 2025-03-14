import React from "react";
import Layout from "../layout";
import Slider from "../../components/slider";
import HowWorks from "../../components/home/howWorks";
import WhyChoose from "../../components/home/whyChoose";
import MediaCoverage from "../../components/home/mediaCoverage";
import CallBack from "../../components/home/callBack";
import FAQ from "../../components/home/faq";
import { Helmet } from "react-helmet";
import { SeoSript } from "../../components/seo/script";
import TagSlid from "../../components/home/tagSlid";

const Home = () => {
  return (
    <Layout>
      <TagSlid/>
      <Helmet>
        <title>AA1 Scrap Center - Eco-friendly Vehicle Disposal</title>
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
  content="M/s AA1 Scrap Center, an eco-friendly vehicle scrapping facility approved by the Uttar Pradesh Transport Department, offers de-registering, de-polluting, dismantling, and recycling services for end-of-life vehicles, conveniently located near NCR. Contact us at +91 98370 15844."
/>

        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://www.aa1scrapcenter.com" />
        <SeoSript />
      </Helmet>
      <Slider />
      <section>
        <HowWorks />
      </section>
      <section className="bg-dark-blue text-white">
        <WhyChoose />
      </section>
      {/* <section>
        <MediaCoverage />
      </section> */}
      <section className="bg-dark-green text-white">
        <CallBack />
      </section>
      <section className="pt-0">
        <FAQ />
      </section>
    </Layout>
  );
};

export default Home;
