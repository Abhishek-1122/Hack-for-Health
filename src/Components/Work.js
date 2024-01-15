import React from "react";
import Voice from "../Assets/voice.png";
import Sketch from "../Assets/sketch.png";

const Work = () => {
  const handleClick = () => {
    window.location.href = "../faq.html";

    // <Router>
    //   <Routes>
    //     <Route path="/faq" Component={Faq}></Route>
    //   </Routes>
    // </Router>;
  };

  const workInfoData = [
    {
      image: Voice,
      title: "Voice",
      text: "Utilizing SVM on voice parameters, our approach enables non-invasive Parkinson's detection, promising early and accurate diagnosis.",
      btnname: "Train",
      link: "https://parkinsons-voice.streamlit.app/ ",
    },
    {
      image: Sketch,
      title: "Sketch",
      text: "Reveal Parkinson's intricacies with our advanced algorithm trained on detailed spiral sketches, ensuring precise and early diagnostics.",
      btnname: "Draw",
      link: "https://parkonixxx.streamlit.app/",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our system combines a specialized algorithm trained on detailed spiral
          sketches and voice analysis for effective non-invasive Parkinson's
          detection. This provides reliable insights into symptoms, treatments,
          and lifestyle, offering valuable resources for understanding the
          disease.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <br></br>
            <button className="secondary-button1">
              <a href={data.link}>{data.btnname}</a>
            </button>
          </div>
        ))}
        <div className="faq-section ">
          <h1>Some Frequently asked Questions(FAQ)</h1>

          <button className="secondary-button" onClick={handleClick}>
            click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
