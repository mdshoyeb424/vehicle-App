import React from "react";
import "./process.scss";
import img1 from "@/assets/images/service/scrap_process_1.webp";
import img2 from "@/assets/images/service/scrap_process_2.webp";
import img3 from "@/assets/images/service/scrap_process_3.webp";
import img4 from "@/assets/images/service/scrap_process_1.webp";

const IndutrailProcess = () => {
  return (
    <div className="container px-4">
      <h2 className="fw-bold text-uppercase mb-5" data-aos="fade-up"  data-aos-duration="600">
        STAGES OF INDUSTRIAL SCRAP RECYCLING PROCESS
      </h2>

      <div className="d-flex animation flex-column gap-4">
        {data?.map((val, index) => (
          <div
            key={index}
            className="process-card p-3 row rounded-5  bg-green"
            data-aos="fade-up"  data-aos-duration="600"
          >
            <div className="col-lg-2 col-md-3 " >
              <img className="w-100 p-3 h-100" src={val?.img} alt={val?.head} />
            </div>
            <div data-aos="fade-up"  data-aos-duration="600" className="col-lg-10 col-md-9 d-flex flex-column justify-content-center text-white">
              <h4 className="fw-bold">{val?.head}</h4>
              <p>{val?.para}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4"><p>Once these stages are finished, the purified and appropriately shaped metal is sent to factories and mills, where it is utilized to produce new products.</p></div>
    </div>
  );
};

export default IndutrailProcess;
const data = [
  {
    img: img1,
    head: "Collection",
    para: "During this stage, materials primarily composed of metals are collected. Collectors often search through scrap yards to find items that are entirely or mostly made of metal. However, recycling organizations may also gather materials directly from mills and factories when they become available.",
  },
  {
    img: img2,
    head: "Disassembling",
    para: "Hot air is crucial for melting solders, separating components, and enabling efficient disassembly and retrieval of valuable components from electronic devices or equipment. Its use facilitates easy detachment and recovery of individual components for recycling or reuse, playing a vital role in precise component separation and subsequent recycling stages.",
  },
  {
    img: img3,
    head: "Sorting",
    para: "To ensure the high quality of the raw metal, it is essential to separate the recyclable metal from non-recyclable materials. Therefore, thorough sorting is conducted once the scrap material is acquired.",
  },
  {
    img: img4,
    head: "Crushing",
    para: "The scrap metal, after being crushed and compacted, is transformed into cubes. This process is accomplished using shears or balers. It is a well-known practice in recycling industrial waste and vehicle metal.",
  },
];
