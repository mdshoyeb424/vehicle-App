import React from "react";
import "./aboutHero.scss";

const AboutHero = ({data}) => {
  return (
    <div className="aboutHero animation">
      <div className="overlay">
        <div className="col-11 col-lg-6 col-md-8 col-sm-10  m-auto text-white">
        <h1 className="ttt text-55 fw-bold text-center">{data?.name}</h1>
        <p className="text-center">
          {data?.para}
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutHero;
