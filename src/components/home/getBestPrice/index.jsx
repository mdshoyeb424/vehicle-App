import React, { useState } from "react";
import "./getBestPrice.scss";
import { getBestPriceService } from "../../../services/EmailService";

const GetBestPrice = () => {
  const [vehicleInfo, setVehicleInfo] = useState({});
  const handleVehicleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo({
      ...vehicleInfo,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await getBestPriceService(vehicleInfo);
  };


  return (
    <div className="get-best-price col-xl-3 border col-lg-4 col-md-6 col-sm-7 offset-lg-7 offset-md-5 offset-sm-4   position-absolute">
      <div className="text-center my-4">
        <h4 className="text-center fw-bold text-capitalize mb-0">
          Claim your best deal
        </h4>
        <small className="text-green">Sell Your Vehicle, Drive Home the Best Deal.</small>
      </div>
      <div className="container mt-3 sell">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="vehicle-details">
                <div className="row row-cols-2">
                  {sellBuyForm.map((val, i) => (
                    <div className={`info-item mb-2 w-${col12.includes(val.field)&&"100"}`} key={i}>
                      {/* <label className="text-green pb-1">{vehicleInfo[val?.name]}:</label> */}
                      {val.type === "textArea" ? (
                      <textarea
                        name={val.field}
                        value={vehicleInfo[val?.field]}
                        placeholder={val.placeholder}
                        onChange={handleVehicleInputChange}
                      />
                    ) : val.type === "input" ? (
                      <input
                        type={val.type}
                        name={val.field}
                        value={vehicleInfo[val?.field]}
                        onChange={handleVehicleInputChange}
                        placeholder={val.placeholder}
                        required={val.field === "contact"}
                      />
                    ) : (
                      <select name={val.field} id={val.field}   value={vehicleInfo[val?.field]} onChange={handleVehicleInputChange}>
                        <option value="">{val.defaultValue}</option>
                        {val.options &&
                          val.options.map((v, i) => (
                            <option value={v} key={Math.random()}>
                              {v}
                            </option>
                          ))}
                      </select>
                    )}
                    </div>
                  ))}
                </div>
                <div className="d-flex gap-5 justify-content-center">
                    <button
                      type="submit"
                      className="btn-green mt-3"
                    >
                      Send Us
                    </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetBestPrice;

const col12=["address","nameOfVehicle","name"];

const sellBuyForm = [
  {
    type: "input",
    field: "name",
    name: "Name",
    placeholder: "Enter your name",
  },
  {
    type: "input",
    field: "contact",
    name: "Contact No.",
    placeholder: "+91 95XXXXXXXX",
  },
  {
    type: "input",
    field: "email",
    name: "Email Id",
    placeholder: "Example@gmail.com",
  },

  {
    type: "input",
    field: "nameOfVehicle",
    name: "Vehicle Name",
    placeholder: "Car Name ( e.g. WagonR, Santro, Beat etc)",
  },
  {
    type: "select",
    field: "model",
    name: "Model",
    options: Array.from({ length: 2024 - 1970 + 1 }, (v, i) => 1970 + i),
    defaultValue: "Select Modal Year",
  },
  {
    type: "select",
    field: "fuelType",
    name: "Fuel Type",
    defaultValue: "Select Fuel Type",
    options: ["Petrol", "Diesel", "CNG"],
  },
  {
    type: "input",
    field: "address",
    name: "Address",
    placeholder: "Address....",
  },
];
