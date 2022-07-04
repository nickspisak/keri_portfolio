import React from "react";

const Contact = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 mt-4">
            <h1>Let's Stay in Touch</h1>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col mb-4 mt-4">
            <ul>
              <li>Email: Krogosz@gmail.com</li>
              <li>Personal Phone: (878) 302-2165</li>
              <img src="/images/resume.jpg" height={550} />
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
