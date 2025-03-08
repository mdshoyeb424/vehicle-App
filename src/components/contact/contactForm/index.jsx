import React, { useState } from "react";
import "./contactForm.scss";
import { BsEnvelope } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { company } from "../../../data";
import { contactusService } from "../../../services/EmailService";

const ContactForm = () => {
  const [contactData, setContactData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await contactusService(contactData);
  };

  return (
    <div className="container">
      <h3 className="fw-bold text-green text-center mb-5">
        Drop us a message or{" "}
        <a href={`tel:${company.phone1}`} className="text-light-green">
          Call Us
        </a>{" "}
        for fast assistance.
      </h3>
      <div className="row animation" >
        <div className="col-xl-3 col-lg-4 d-flex flex-column">
          {contactDataDetails?.map((val, index) => (
            <div key={index} className="d-flex gap-3 my-2">
              <div className="p-2 rounded-1 bg-green mb-auto text-white">
                {val?.icon}
              </div>
              <div className="d-flex flex-column ">
                <h5 className="fw-bold">{val?.name}</h5>
                {val?.path ? val.path : <p>{val?.details}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="col-xl-9 col-lg-6" >
          <form action="" className="contact-form" onSubmit={handleSubmit}>
            <div className="row animation">
              <div className="col-md-6">
                <input
                  name="name"
                  className="con"
                  value={contactData?.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  name="email"
                  onChange={handleChange}
                  value={contactData?.email}
                  type="email"
                    className="con"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <input
                type="tel"
                  className="con"
                name="contact"
                value={contactData?.contact}
                onChange={handleChange}
                required
                placeholder="Contact Number"
              />
            </div>
            <div>
              <textarea
                name="message"
                  className="con"
                onChange={handleChange}
                value={contactData?.message}
                placeholder="Type your message(e.g., buying, selling, or other inquiries)"
                rows={5}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn-green">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const contactDataDetails = [
  {
    icon: <IoLocationOutline size={25} />,
    name: "Location:",
    details: company.Address,
  },
  {
    icon: <BsEnvelope size={25} />,
    name: "Email:",
    path: (
      <a
        href={`mailto:${company.email}`}
        className="text-light-green text-decoration-none fs-5"
      >
        {company.email}
      </a>
    ),
  },
  {
    icon: <CiMobile2 size={25} />,
    name: "Call:",
    path: (
      <>
        <a
          href={`tel:${company.phone1}`}
          className="text-light-green text-decoration-none fs-5"
        >
          {company.phone1}
        </a>
        <a
          href={`tel:${company.phone2}`}
          className="text-light-green text-decoration-none fs-5"
        >
          {company.phone2}
        </a>
        <a
          href={`tel:${company.phone3}`}
          className="text-light-green text-decoration-none fs-5"
        >
          {company.phone3}
        </a>
      </>
    ),
  },
];
