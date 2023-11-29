import React from "react";
import './App.css';

const About = () => {
  return (
    <div className="about">
      <h4 className='experience' style={{'color': '#b1adad'}}>20 Years Experience. Expert. Launched profitable campaigns. Project leader. Master&#8217;s Degree in Marketing.</h4>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1 className="aboutMe">About Me</h1>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8 mt-2">
            <p>
             Strategic Marketing Expert with 5 Years of Expertise: Elevating Brands through Proven Excellence in Social Media, Communications, Project Management, Client Relations, and Event Planning.

            </p>
   
          </div>
          <div className="col-2 mt-3 mb-3">
            <img height={400} src="/images/keri_picture.png" alt="burgh" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
          <img height={400} className="post" src="/images/post.jpeg" alt="post" />
          </div>
          <div className="col">
            <h2>Career Interests</h2>
            <p>
              My career goals are to grow my marketing skills and develop my
              experience. My skills lean towards digital marketing, social
              media, and creative concepts. I also have event planning
              experience from a past position. My confidence lies in those roles
              but I am always ready to accept the challenge of learning anything
              I can.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default About;
