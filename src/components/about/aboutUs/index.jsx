import React from "react";
// import "./about.scss";
import { aboutFeatureData, Aboutpara } from "../../../data";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row animation" >
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h3 className="fw-bold text-35 text-green">About Us</h3>
            <p>
              M/s AA1 Scrap Center operates a registered and eco-friendly
              vehicle scrapping facility approved by the Uttar Pradesh Transport
              Department, complying with all relevant guidelines. We offer
              seamless services for de-registering, de-polluting, dismantling,
              and recycling end-of-life vehicles. Located near the National
              Capital Region (NCR), our facility is easily accessible from major
              cities like Delhi, Ghaziabad, and Meerut.
            </p>
          </div>
          {aboutFeatureData?.map((val, index) => (
            <div className="d-flex gap-3 my-3" key={index}>
              <div>{val?.icon}</div>
              <div>
                <h5 className="fw-bold text-green">{val?.name}</h5>
                <p>{val?.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <img
            src="/images/about/about.webp"
            className="w-100 h-100"
            alt="About"
          />
        </div>
        <div
          className="pt-5 animation"
        >
          {Aboutpara?.map((val, index) => (
            <p key={index}>{val}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
