import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin, MdMenu, MdOutlineArrowDropDown } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { logo } from "../../data";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="nav-header fixed-top">
        <nav className="container">
          <ul className="d-flex mb-0">
            <li className="nav-logo my-auto d-flex">
              <NavLink to="/" className="d-flex flex-column">
                <img src={logo} className="h-100 w-100" alt="" />
              </NavLink>
            </li>
            <li
              onClick={() => navigate("/")}
              className="my-auto d-flex flex-column  fw-bold text-white company-tag cursor-pointer"
            >
              <h4 className="text-30 mb-0">AA1 Scrap Center</h4>
              <small className="text-center">Scrap Legally, Save Economy</small>
            </li>
            <li className="d-flex flex-column w-100">
              <ul className=" d-flex gap-4 justify-content-end pt-1">
                <li className="">
                  <a
                    href="tel:+91 9837015844"
                    className="d-flex align-items-center gap-2 "
                  >
                    <FiPhoneCall />{" "}
                    <span className="d-none d-sm-block">+91 98370 15844</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/29%C2%B028'09.6%22N+77%C2%B048'10.5%22E/@29.4693356,77.8003273,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.4693356!4d77.8029022?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-2  text-decoration-underline"
                  >
                    <MdLocationPin />{" "}
                    <span className="d-none d-sm-block"> Location</span>
                  </a>
                </li>
              </ul>
              {!isNav ? (
                <li className="opener my-auto text-white ms-auto">
                  <MdMenu onClick={() => setIsNav(true)} size={40} />
                </li>
              ) : (
                <li className="opener text-white ms-auto">
                  <BsX onClick={() => setIsNav(false)} size={40} />
                </li>
              )}
              <ul
                className={`d-flex ${
                  isNav && "toggle-list"
                } nav-list pt-3 ms-auto`}
              >
                {navData?.map((val, index) => (
                  <li
                    key={index}
                    className={`${val?.children ? "drop-list" : ""}`}
                  >
                    {val?.children ? (
                      <>
                        {val?.name}{" "}
                        <MdOutlineArrowDropDown className="drop" size={30} />
                      </>
                    ) : (
                      <NavLink to={val?.path}> {val?.name}</NavLink>
                    )}
                    {val?.children && (
                      <ul className="sub-list ">
                        {val?.children?.map((v, i) =>
                          v.ancer ? (
                            v.ancer
                          ) : (
                            <NavLink
                              key={index + i}
                              to={v?.path}
                              className={({ isActive }) =>
                                (isActive ? "active" : "") +
                                ` text-decoration-none`
                              }
                            >
                              <li>{v?.name}</li>
                            </NavLink>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

const navData = [
  { name: "Get best price", path: "/" },
  { name: "Sell", path: "/sell-buy?type=sell" },
  { name: "about us", path: "/about-us" },
  { name: "contact us", path: "/contact-us" },
  { name: "Join us", path: "/join-us" },
  // {
  //   name: "more",
  //   path: "",
  //   children: [
  //     { name: "Sell your vehicle", path: "/sell-your-vehicle" },
  //     { name: "Industrial strap", path: "/industrial-strap" },
  //     {
  //       name: "Buy vahicle parts",
  //       ancer: (
  //         <a
  //           href="https://docs.google.com/spreadsheets/d/1WWED0Rej4P71Fv0ozVGELT1etpO2mR61Mk_HWN4l2xE/edit?usp=sharing"
  //           target="_blank"
  //           className="text-decoration-none me-auto"
  //           rel="noopener noreferrer"
  //         >
  //           <li> Buy vahicle parts</li>
  //         </a>
  //       ),
  //     },
  //   ],
  // },
];
