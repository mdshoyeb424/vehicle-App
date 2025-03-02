import React, { useState } from "react";
import { callBackService } from "../../../services/EmailService";

const CallBack = () => {
  const [data, setData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handeSumbit = () => {
    e.preventDefault();
    callBackService(data);
  };
  return (
    <form action="" onSubmit={handeSumbit}>
      <div className="container">
        <div className="row px-4 px-md-0">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2>Let us help you with the process</h2>
          </div>
          <div className=" col-lg-6 col-md-8">
            <div className="bg-white rounded-5  row ps-sm-3  pe-0">
              <div className="col-sm-8 col-12 p-1 ps-3 ps-sm-0">
                <label htmlFor="phone" className="text-dark">
                  NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  placeholder="9723XXXXXX"
                  className="bg-transparent w-100 border-0 outline-none fs-5"
                  style={{ outline: "none" }}
                />
              </div>
              <button className="btn-light-green col-sm-4 col-12 rounded-5">
                GET A CALL BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CallBack;
