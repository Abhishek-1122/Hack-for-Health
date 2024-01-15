import React from "react";
import Logo from "../Assets/logo.png";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          {/* <a href="">Testimonials</a> */}
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section-columns">
          <span>gkakshata10@gmail.com</span>
          <span>ulliabhishek@gmail.com</span>
          <span>bhumikabhu2002@gmail.com</span>
        </div>
        Made with ❤️ from Team <span style={{ marginRight: "10px" }}> </span>
        <strong>Expecto-Winno</strong>
      </div>
    </div>
  );
};

export default Footer;
