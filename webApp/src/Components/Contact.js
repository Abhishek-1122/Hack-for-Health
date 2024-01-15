import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Have a Question?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Any queries?" />
        <button className="secondary-button1">
          <a href="mailto:gkakshata10@gmail.com">Submit</a>
        </button>
      </div>
      <div className="faq-section">
        <div className="warning">
          "Dear Users,
          <br />
          While our AI-powered Parkinson's prediction tool aims to provide
          valuable insights, it is crucial to remember that it is not a
          substitute for professional medical advice. If you receive results
          indicating a potential risk of Parkinson's or any health concern, we
          strongly advise consulting with a qualified healthcare professional
          for a comprehensive evaluation and personalized guidance. Your health
          is our priority, and seeking a doctor's opinion ensures accurate
          diagnosis and appropriate care."
        </div>
      </div>
    </div>
  );
};

export default Contact;
