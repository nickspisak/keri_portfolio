import React from "react";

const About = () => {
  return (
    <div className="about">
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
              My name is Keri Rogosz. I&#8217;m from Pittsburgh and have been in the
              sales and marketing field for awhile. After becoming an
              esthetician and growing my own client base, I&#8217;ve realized that
              advertising is my favorite part of my position. esthetics school
              taught us a lot about building client relationships and promoting
              your services.
            </p>
            <p>
              Since graduating I have taken it initiative to educate myself on
              all things marketing and have taken a few courses. I have been
              doing my own personal projects as well as work with a women&#8217;s
              health nonprofit. I am now ready to put these skills into practice
              and jumpstart my career.
            </p>
          </div>
          <div className="col-2 mt-3 mb-3">
            <img height={400} src="/images/keri_picture.png" alt="burgh" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <img height={700} src="/images/keri_letter.jpeg" />
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
