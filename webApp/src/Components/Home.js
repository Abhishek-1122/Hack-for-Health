import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/main-pic.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            <div>
              Identification of Parkinson's disorder at early stage using
              Machine Learning
            </div>
          </h1>
          <p className="primary-text">
            Predicting Parkinson's early using ML on voice and handwriting,
            offering non-invasive diagnostics for timely intervention.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
