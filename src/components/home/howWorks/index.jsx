import React from "react";
import Logo from "../../logo";
import { HowWorksData } from "../../../data";
import "./howWorks.scss"
import { useNavigate } from "react-router-dom";

const HowWorks = () => {
  const navigate=useNavigate();
  return (
    <div className="container how-works">
      <h1 className="mb-5 text-center fw-bold d-flex justify-content-center gap-3">How <Logo/> Works</h1>
      <div className="row row-cols-md-5 row-cols-md-3 row-cols-2">
        {HowWorksData?.map((val, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-center align-items-center my-md-0 my-3"
          >
            <div>
              <img src={val?.img} alt="" />
            </div>
            <p className="fw-semibold my-4 text-20 text-center">{val?.name}</p>
            <small className="text-center">{val?.para}</small>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={()=>navigate("/sell-buy")} className=" btn-green mt-5 text-uppercase rounded-5">
          Get Instant Price
        </button>
      </div>
    </div>
  );
};

export default HowWorks;

