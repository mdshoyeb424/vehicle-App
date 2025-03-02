import React from "react";
import "./offers.scss";
import Headline from "@/common/headline";
import img from "@/assets/images/service/service-main.webp";
import { FaFile, FaRecycle, FaTruck } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="container offer">
      <Headline headline="What We Offer" />
      <div className="row animation my-4" data-aos="fade-up"  data-aos-duration="600">
        <div className="col-md-5">
          <img src={img} alt="sell your vehicle" className="w-100 h-100" />
        </div>
        <div className="col-md-7 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center">
          <p>
            SRI RVSF, one of India's largest authorized units, specializes in
            the scrapping and deregistration of End-of-Life (ELV) vehicles. Our
            primary objective is to enhance road safety and maintain a clean
            environment through the recycling process. At SRI RVSF, we ensure a
            hassle-free recycling procedure for vehicles, industrial scrap, and
            refurbished spare parts. Our aim is to provide top-notch scrap
            quality to buyers, suppliers, and dealers across various locations
            throughout India. We take immense pleasure in delivering tailored
            solutions that cater to the unique requirements of each client.
          </p>
        </div>
      </div>
      <section >
      <div className="row animation row-cols-md-3 row-cols-sm-2">
        {data?.map((val, index) => (
          <div key={index} className="d-flex gap-3 drop" data-aos="fade-up"  data-aos-duration="600">
            <div className="text-green">{val?.icon}</div>
            <div>
              <h5 className="fw-bold text-green">{val?.head}</h5>
              <p>{val?.para}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default Offer;
const data = [
  {
    icon: <FaFile size={60} />,
    head: "Documentation",
    para: "Handling the necessary paperwork and documentation required for scrapping and deregistering the vehicle",
  },
  {
    icon: <FaTruck size={60} />,
    head: "Scrapping",
    para: "Disassembling and recycling the vehicle's components and materials in an environmentally friendly manner",
  },
  {
    icon: <FaRecycle size={60} />,
    head: "Recycling",
    para: "Ensuring proper disposal and recycling of hazardous materials, such as fluids, batteries, and tires",
  },
];
