import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { company, logo } from "../../data";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container footer py-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column gap-3">
            <div className="logo-img">
              <img src={logo} className="w-100 " alt="" />
            </div>
            <div>
              <p>
                M/s AA1 Scrap Center operates a registered and eco-friendly
                vehicle scrapping facility approved by the Uttar Pradesh
                Transport Department, complying with all relevant guidelines. We
                offer seamless services for de-registering, de-polluting,
                dismantling, and recycling end-of-life vehicles. Located near
                the National Capital Region (NCR), our facility is easily
                accessible from major cities like Delhi, Ghaziabad, and Meerut.
              </p>
            </div>
            <div className="social d-flex gap-3">
              {social?.map((val, index) => (
                <a
                  className="icon"
                  href={val?.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {val?.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-6 my-3 my-md-0">
            <div className="row row-cols-md-2">
              {footerData?.map((val, index) => (
                <div key={index}>
                  <h5 className="fw-semibold">{val?.head}</h5>
                  {val?.children && (
                    <ul className="d-flex flex-column gap-3 ps-0 ">
                      {val?.children?.map((v, i) => (
                        <li key={index + i}>
                          {v?.path ? (
                            <Link
                              to={v?.path}
                              className="text-decoration-none text-capitalize text-light-white"
                            >
                              {v?.name}
                            </Link>
                          ) : (
                            v?.name
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          &#169; Copyright {company.name}. All Rights Reserved <br />
          Designed by MSB
        </div>
      </div>
    </div>
  );
};

export default Footer;
const social = [
  { icon: <BsTwitter />, path: "" },
  { icon: <RiFacebookCircleFill />, path: "" },
  { icon: <BsInstagram />, path: "" },
  { icon: <FaLinkedin />, path: "" },
];

const footerData = [
  {
    head: "Navigation",
    children: [
      { name: "Home", path: "/" },
      { name: "about", path: "/about-us" },
      { name: "contact", path: "/contact" },
    ],
  },
  {
    head: "Contact Us",
    children: [
      {
        name: company.Address
      },
      {
        name: (
          <span>
            <b>Phone:</b>{" "}
            <a
              className="text-green text-decoration-none"
              href={`tel:${company.phone2}`}
            >
             {company.phone1}
            </a> <br />
            <a
              className="text-green text-decoration-none ms-5 ps-2"
              href={`tel:${company.phone2}`}
            >
             {company.phone2}
            </a>{" "}
          </span>
        ),
      },
      {
        name: (
          <span>
            <b>Email:</b>{" "}
            <a
              className="text-green text-decoration-none"
              href={`mailto:${company.email}`}
            >
             {company.email}
            </a>
          </span>
        ),
      },
    ],
  },
];
