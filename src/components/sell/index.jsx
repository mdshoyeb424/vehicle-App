import React, { useState } from "react";
import "./sell.scss";
import Headline from "../../common/headline";
import { sellService } from "../../services/EmailService";

const SellBuy = () => {
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
    await sellService(vehicleInfo);
  };

  return (
    <div className="container sell">
      <form onSubmit={handleSubmit}>
        <Headline headline="Turn Your Car into Cash at the Best Price!" />
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="vehicle-details">
              <div className="row row-cols-md-2">
                {sellBuyForm.map((val, index) => (
                  <div className="info-item mb-2" key={index}>
                    <label className="text-green ">{val?.name}:</label>
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
                      <select name={val.field}   value={vehicleInfo[val?.field]} onChange={handleVehicleInputChange}>
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
                <button className="btn-green">
                 Submit Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellBuy;

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
