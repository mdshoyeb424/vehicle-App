import React from "react";
import  { ColorLogo } from "../../logo";
import { WhyChooseData } from "../../../data";

const WhyChoose = () => {
  return (
      <div className="container">
        <h1 className="mb-5 text-center fw-bold d-flex align-items-center justify-content-center gap-3">
          Why Choose <ColorLogo/>
        </h1>
        <div className="row row-cols-md-3">
          {WhyChooseData?.map((val, index) => (
            <div
              key={index}
              className="d-flex flex-column my-sm-0 my-3 justify-content-center align-items-center"
            >
              <div className="why-choose-img col-12  p-3 p-sm-5" style={{aspectRatio:"1/1"}} >
                <img src={val?.img} alt="" className="w-100 h-100" />
              </div>
              <p className="fw-semibold my-4 text-20 text-center">
                {val?.name}
              </p>
              <small className="text-center">{val?.para}</small>
            </div>
          ))}
        </div>
      </div>
  );
};

export default WhyChoose;
