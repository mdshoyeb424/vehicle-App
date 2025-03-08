import React from "react";
import Slider from "react-slick";
import "./tagSlid.scss"

const TagSlid = () => {
  const settings = {
    vertical: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-dark py-2 overflow-hidden">
      <Slider {...settings}>
        {slogans.map((val, index) => (
          <div 
            key={index} 
            className="text-center text-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}  
          >
            <p className="fw-semibold tag-slid text-capitalize" >
              {val}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TagSlid;

const slogans = [
  "Get best price of your car, bike, any other vehicle",
  "⁠Get free towing of your vehicle to RVSF",
  "Best Scrapping Facility located in NCR",
  "Environmentally sound scrapping procedures",
  "⁠Instant service near Delhi, Ghaziabad, Meerut", "Saharanpur, Muzaffarnagar, Dehradun, Roorkee, Haridwar", "Shamli, Bijnor, and nearby regions",
];
