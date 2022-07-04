import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-8 mt-2">
            <h1>About Me</h1>
            <p>
              My name is Keri Rogosz. Im from Pittsburgh and have been in the
              sales and marketing field for awhile. After becoming an
              esthetician and growing my own client base, I’ve realized that
              advertising is my favorite part of my position. esthetics school
              taught us a lot about building client relationships and promoting
              your services.
            </p>
            <p>
              Since graduating I have taken it initiative to educate myself on
              all things marketing and have taken a few courses. I have been
              doing my own personal projects as well as work with a women’s
              health nonprofit. I am now ready to put these skills into practice
              and jumpstart my career.
            </p>
          </div>
          <div className="col mt-3 mb-3">
            <img height={500} src="/images/keri_picture.png" alt="burgh" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img height={200} src="/images/facebook.png" />
          </div>
          <div className="col-4 mb-3">
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
          <div className="col-4 mt-4">
            <img height={100} src="/images/googleanalytics.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
