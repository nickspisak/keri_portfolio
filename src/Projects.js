import React from "react";
import "./App.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="title">My Projects</h1>
      <p className="subtitle">All Photos were taken or Created by Myself</p>
      <p className="subtitle">Mockup Social Media Report for Ulta Beauty</p>
      <img className="picture" src="/images/first.jpeg" alt="ultaproject_1" />
      <img className="picture" src="/images/second.jpeg" alt="ultaproject_2" />
      <img className="picture" src="/images/third.jpeg" alt="ultaproject_3" />
      <img className="picture" src="/images/fourth.jpeg" alt="ultaproject_4" />
      <img className="picture" src="/images/fifth.jpeg" alt="ultaproject_5" />
      <div className="container">
        <div className="row">
          <div className="col">
            <div></div>
          </div>
          <div className="col mt-3">
            <img height={500} src="/images/burgh.png" alt="burgh" />
          </div>
          <div className="col mt-3">
            <h3 className="subtitle">Mock Spa Advertisment</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div></div>
          </div>

          <div className="col mb-3">
            <img src="/images/fourthofjuly.png" />
          </div>
          <div className="col">
            <h4 className="subtitle">Email Marketing Project</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div></div>
        </div>
        <div className="col mt-3 mb-3">
          <img className="insta" src="/images/insta.jpeg" alt="insta" />
        </div>
        <div className="col mt-3">
          <h4 className="subtitle">
            Personal Profile theme created in Highschool
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Projects;
