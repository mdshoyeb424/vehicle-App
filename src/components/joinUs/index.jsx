import React, { useState } from "react";
import "./joinUs.scss";
import Headline from "../../common/headline";
import { joinUsService } from "../../services/EmailService";
const JoinUs = () => {
  const [joinData, setJoinUsData] = useState(null);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setJoinUsData({ ...joinData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await joinUsService(joinData);
  };
  return (
    <div className="join-us">
      <div className=" left"></div>
      <div className=" right">
        <div className="container">
          <Headline headline="Join Us for long term" />
          <form action="" onSubmit={handleSubmit}>
            <div className="row row-cols-2">
              {formdata.map((val, index) => (
                <div className="field" key={index}>
                  {val.type === "input" ? (
                    <input
                      type="text"
                      name={val.field}
                      value={joinData && joinData[val?.field]}
                      placeholder={val?.placeholder}
                      onChange={handlechange}
                    />
                  ) : val.type === "select" ? (
                    <select
                      name={val?.field}
                      id={val?.field}
                      value={joinData && joinData[val?.field]}
                      onChange={handlechange}
                    >
                      <option value="">Select Member Type</option>
                      {val?.options &&
                        val?.options.map((v, i) => (
                          <option value={v} key={index + i}>
                            {v}
                          </option>
                        ))}
                    </select>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                value={joinData?.message}
                onChange={handlechange}
                placeholder="Type your message"
              />
            </div>
            <div className="text-center">
              <button className="btn-green">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
const formdata = [
  {
    type: "input",
    name: "name",
    field: "name",
    placeholder: "Ex. John doe",
  },
  {
    type: "input",
    name: "contact",
    field: "contact",
    placeholder: "+91 95XXXXX...",
  },
  {
    type: "input",
    name: "email",
    field: "email",
    placeholder: "example@gmail.com",
  },
  {
    type: "select",
    name: "Member Type",
    field: "memberType",
    options: ["Individual", "Company"],
  },
  {
    type: "textarea",
    name: "message",
    field: "message",
    placeholder: "Type your message",
  },
];
