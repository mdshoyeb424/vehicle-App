import React, { useRef } from "react";
import Logo from "../../logo";
import Slider from "react-slick";
import "./media.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MediaCoverageData } from "../../../data";

const MediaCoverage = () => {
  const sliderRef = useRef(null); // create a reference for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="container media">
      <h1 className="mb-5 text-center fw-bold d-flex justify-content-center gap-3">
     Media & News
      </h1>
      <div className="custom-arrows-container gap-3 mb-3 d-flex col-lg-10 col-md-11 mx-auto">
        <button
          onClick={handlePrev}
          className="arrows"
        >
         <FaArrowLeft />
        </button>
        <button
          onClick={handleNext} className="arrows"
        >
          <FaArrowRight />
        </button>
      </div>
      {/* Slider */}
      <Slider
        ref={sliderRef}
        className="overflow-hidden col-lg-10 col-md-11 mx-auto"
        {...settings}
      >
        {MediaCoverageData.map((val, i) => (
          <div key={i} className="px-4 ">
            <div className="works-card">
              <div className="how-works-img ">
                <img
                  src={`/images/home/h${i + 1}.webp`}
                  className="w-100 h-100 object-fill-cover"
                  alt=""
                />
              </div>
              <div className="px-2 text-white mt-2">
                <p>{val?.para}</p>
              </div>
              <div className="px-2 ">
                <p>
                  (
                  <a
                    href="http://https://shoyebmd424.github.io/vehicle/"
                    target="_blank"
                    rel="noopener noreferrer" style={{ wordWrap:" break-word"}}
                  >
                    https://shoyebmd424.github.io/vehicle/
                  </a>{" "}
                  )
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default MediaCoverage;
