import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/mid-pic.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.mayoclinic.org/diseases-conditions/parkinsons-disease/symptoms-causes/syc-20376055";
  };
  const handleClickk = () => {
    window.location.href = "https://www.youtube.com/watch?v=e4sniKtN-zo";
  };
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Parkinson disorder</h1>
        <p className="primary-text">
          Parkinson's disorder is a neurodegenerative condition affecting
          movement, characterized by tremors, stiffness, and impaired balance.
          It results from the loss of dopamine-producing cells in the brain.
          Treatment focuses on symptom management, often involving medications
          and therapy.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleClick}>
            Learn More
          </button>
          <button className="watch-video-button" onClick={handleClickk}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
