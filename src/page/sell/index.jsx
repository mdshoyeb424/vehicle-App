import React from "react";
import Layout from "../layout";
import SellBuy from "../../components/sell";
import BackPath from "../../common/backPath";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SeoSript } from "../../components/seo/script";

const SellPage = () => {
  const { pathname } = useLocation();
  return (
    <Layout>
       <Helmet>
        <title>Sell To AA1 Scrap Center - Eco-friendly Vehicle Disposal</title>
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
      <BackPath paths={pathname} />
      <section className="pt-0">
        <SellBuy />
      </section>
    </Layout>
  );
};

export default SellPage;
