import React from "react";
import ReactSlider from "react-slick";
import GetBestPrice from "../home/getBestPrice";
import "./slider.scss"
import OverLayHero from "../home/overlayHero";

const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true  
  };
  return (
    <div className="position-relative ">
      <ReactSlider className="overflow-hidden h-slider  z-index-2" {...settings}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="">
            <img src={`/images/home/h${i + 1}.jpg`} className="home-img" alt="" />
          </div>
        ))}
      </ReactSlider>
        <GetBestPrice/>
        <OverLayHero/>
      </div>
  );
};

export default Slider;
