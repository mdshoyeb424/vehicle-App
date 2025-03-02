import React from "react";
import Headline from "@/common/headline";
import img from "@/assets/images/service/industrial-scrap.webp";

const IndustrialCom = () => {
  return (
    <div className="container industrial animation">
      <Headline headline="Industrial Scrap" />
      <div className="row my-4" data-aos="fade-up"  data-aos-duration="600">
        <div className="col-md-5">
          <img src={img} alt="sell your vehicle" className="w-100 h-100" />
        </div>
        <div className="col-md-7 mt-4 mt-md-0 d-flex flex-column justify-content-center align-items-center">
          <p>
            Industrial scrap refers to the discarded or excess materials
            generated during manufacturing, construction, or industrial
            processes. It encompasses a wide range of materials such as metal,
            plastic, paper, wood, and more. Industrial scrap holds significant
            value as it can be recycled, repurposed, or used as a raw material
            in other industries. Recycling industrial scrap not only helps
            conserve natural resources but also reduces waste and promotes
            sustainable practices. Companies specializing in industrial scrap
            management play a crucial role in collecting, processing, and
            transforming scrap into valuable resources, contributing to a
            circular economy and minimizing environmental impact.
          </p>
        </div>
      </div>
      <div className="text-center w-100 py-3" data-aos="fade-up"  data-aos-duration="600">
        <div className="d-flex flex-column flex-sm-row gap-3  justify-content-center mx-auto">
          <span className="text-27">To buy scrap vehicle, click here:</span>
          <button className="btn-green">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCom;
