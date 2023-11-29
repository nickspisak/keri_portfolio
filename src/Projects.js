import React from "react";
import "./App.css";

const Projects = () => {
  let elementsArray = document.querySelectorAll(".picture");
console.log(elementsArray);

  return (
    <div className="projects">
      <h1 className="title">My Projects</h1>
      <div className="container">
      <div className="row" style={{'marginTop': '10px'}}>
          <div className="col">
            <div></div>
          </div>
          <div className="col">
            <img src="/images/facebook.jpg" alt="mock facebook posts"/>
          </div>
          <div className="col">
            <div><h3 className="subtitle">Social Media Calendar</h3></div>
          </div>
      </div>
      <div className="row" style={{'marginTop': '10px'}}>
          <div className="col">
            <div></div>
          </div>
          <div className="col">
            <a href="https://docs.google.com/spreadsheets/d/1oo_Zujy9G9vp0gfhPyiIxbguM0QR5AHrX6kQEYKVwHU/edit?usp=sharing">
              <h4 className="subtitle">Link to full project</h4>
            </a>
          </div>
          <div className="col">
            <div>   
            </div>
          </div>
      </div>
      <div className="row" style={{'marginTop': '10px', 'marginBottom': '10px'}}>
          <div className="col">
            <div></div>
          </div>
          <div className="col">
         <img src="/images/invitation.png" alt="invitation design" />
          </div>
          <div className="col">
            <div>              <h3 className="subtitle">Event Planning Experience</h3>
</div>
          </div>
      </div>
          <div className="row" style={{'marginTop': '20px'}}>
            <div className="col">
              <div></div>
            </div>
            <div className="col">
              <img src="/images/clinical.png" alt="blog post" />
            </div>
            <div className="col">
              <div><h3 className="subtitle">Clinical Trial</h3></div>
            </div>
          </div>
          <div className="row" style={{'marginTop': '10px'}}>
            <div className="col">
              <div></div>
            </div>
            <div className="col">
              <img src="/images/case.png" alt="case study" />
            </div>
            <div className="col">
              <div> <h3 className="subtitle">Fabricated Case Study</h3></div>
            </div>
          </div>
          </div>
     
      <div className="container">
        <div className="row" style={{'marginTop': '10px'}}>
          <div className="col">
            <div></div>
          </div>
          <div className="col mb-3 mt-3">
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
          <div className="col-6 mt-3">
            <h3 className="subtitle">
              My Blog with self created pictures to accompany each post
            </h3>
          </div>
          <div className="col">
            <div></div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-3 mt-3">
            <img height={500} src="/images/wardrobe.jpeg" alt="wardrobePost" />
          </div>
          <div className="col mt-3">
            <img height={500} src="/images/wardrobeDesc.jpeg" alt="desc" />
          </div>
        </div>
        <div className="row">
        <div className="col">
            <a href="https://themodernlifeguide.wordpress.com">
              <h4 className="subtitle">Link to my Blog</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{'height' : '125px'}}></div>
      </div>
    </div>
  );
};
export default Projects;
