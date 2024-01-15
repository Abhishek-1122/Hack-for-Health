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
    </div>
  );
};

export default Contact;
