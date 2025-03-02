import React from "react";
import "./overlayHero.scss";
import Typewriter  from "typewriter-effect";

const OverLayHero = () => {
  return (
    <div className="overlay">
      <div className="mt- me-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-7 writter-box  py-5  px-ms-5 px-0-5 mx-xl-5  me-auto">
                <div className="text-white col-12 text-capitalize fw-bold writter">
              <Typewriter
                options={{
                  strings: slogans,
                  autoStart: true,
                  loop: true,
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLayHero;
 
const slogans=[" Get best price of your car, bike, any other vehicle","⁠Get free towing of your vehicle to RVSF","Best Scrapping Facility located in NCR","Environmentally sound scrapping procedures", "⁠Instant service near Delhi, Ghaziabad,Meerut, Saharanpur,Muzaffarnagar, Dehradun, Roorkee, Haridwar, Shamli, Bijnor, and nearby regions"]