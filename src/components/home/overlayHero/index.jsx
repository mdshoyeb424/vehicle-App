import React, { useState } from "react";
import "./overlayHero.scss";
import { callBackService } from "../../../services/EmailService";


const OverLayHero = () => {
  const [data, setData] = useState(null);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
    const handeSumbit = (e) => {
      e.preventDefault();
      callBackService(data);
    };
  return (
    <div className="overlay">
      <div className="mt- me-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-7 writter-box  py-5  px-ms-5 px-0-5 mx-xl-5  me-auto">
              <div className="text-white  col-12 text-capitalize fw-bold writter">
                <form onSubmit={handeSumbit} action="" className="call-back-form">
                  <div className="d-flex bg-white rounded-5 ps-3">
                    <div className=" d-flex">
                      <input
                      onChange={handleChange}
                      name="contact"
                        style={{ outline: "none" }}
                        type="tel"
                        maxLength={14}
                        placeholder="+91 98XXXXXXXX"
                        className="d-flex rounded-5 border-0 px-2"
                      />
                    </div>
                    <div>
                      <button
                        style={{ width: "max-content" }}
                        className="btn-light-green  rounded-5"
                      >
                        Get a Call back
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLayHero;

const slogans = [
  " Get best price of your car, bike, any other vehicle",
  "⁠Get free towing of your vehicle to RVSF",
  "Best Scrapping Facility located in NCR",
  "Environmentally sound scrapping procedures",
  "⁠Instant service near Delhi, Ghaziabad,Meerut, Saharanpur,Muzaffarnagar, Dehradun, Roorkee, Haridwar, Shamli, Bijnor, and nearby regions",
];
