import React from "react";
import "./parts.scss";
import Headline from "@/common/headline";
import img1 from "@/assets/images/service/part_1.webp";
import img2 from "@/assets/images/service/part_2.webp";
import img3 from "@/assets/images/service/part_3.webp";
import img4 from "@/assets/images/service/part_4.webp";

const Parts = () => {
  return (
    <div className="container parts" data-aos="fade-up"  data-aos-duration="600">
      <Headline headline="Vehicle Parts Sales" />
      <div>
        <p>
          Want to save money? SRI RVSF is a rapidly growing network for selling
          used car spare parts online in India and offers the high-quality auto
          parts customers need. SRI RVSF provides a wide range of top-grade auto
          parts disassembled from ELVs at competitive prices. We contribute to
          the auto industry by offering the best quality scrap and auto parts at
          affordable rates. SRI RVSF believes in serving quality to the
          automobile and auto-component industry.
        </p>
      </div>
      <div className="row animation row-cols-lg-4 row-cols-md-3 row-cols-sm-2 w-100 mx-auto ">
        {parts?.map((val, index) => (
          <div key={index} className="px-4 pt-4 parts-card ps-0" data-aos="fade-up"  data-aos-duration="600">
            <div>
              <img className="w-100 h-100 rounded-3 rounded-bottom-0" src={val?.img} alt={val?.head} />
            </div>
            <div className="bg-white text-center py-3 rounded-3 rounded-top-0" data-aos="fade-up"  data-aos-duration="600">
              <h5 className="fw-bold text-dark">{val?.head}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
const parts = [
  { img: img1, head: "Doors and Bonnet" },
  { img: img2, head: "Lights" },
  { img: img3, head: "Rim" },
  { img: img4, head: "Bumpers" },
];
