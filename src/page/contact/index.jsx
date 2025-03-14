import React from "react";
import Layout from "../layout";
import { useLocation } from "react-router-dom";
import Map from "../../components/contact/map";
import ContactForm from "../../components/contact/contactForm";
import AboutHero from "../../components/about/aboutHero";
import BackPath from "../../common/backPath";
import { Helmet } from "react-helmet";
import { SeoSript } from "../../components/seo/script";

const Contact = () => {
  const { pathname } = useLocation();
  return (
    <Layout>
       <Helmet>
        <title>Contact To AA1 Scrap Center - Eco-friendly Vehicle Disposal</title>
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
      {/* <AboutHero data={contactData} /> */}
      <BackPath paths={pathname} />
      <section className="pb-0">
        <ContactForm/>
      </section>
      <section className="pt-0"  >
      <Map />
      </section>
    </Layout>
  );
};

export default Contact;
const contactData = {
  name: "Contact",
  para: "We value your feedback and are always eager to hear from you. Whether you have a question, suggestion, or simply want to say hello, our dedicated team is here to assist you. Feel free to reach out to us using the contact information below or by filling out the convenient form.",
};
