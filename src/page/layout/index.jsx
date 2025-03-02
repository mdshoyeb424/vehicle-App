import React from "react";
import "./layout.scss"
import Navbar from "../../common/navabr";
import Footer from "../../common/footer";
import ScrollTop from "../../common/scrollTop";

const Layout = ({ isNotNav, isNotFoot, children }) => {
  return (
    <>
      {!isNotNav && <Navbar />}
      <main> {children}</main>
      {!isNotFoot && <Footer />}
      <ScrollTop/>
    </>
  );
};

export default Layout;
