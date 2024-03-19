import React from "react";
import project from "./data/projects.json";
export default function Projects() {
  return (
    <div id="project" classNameName="container project my-3 mb-4">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {project.map((data) => {
          return (
            <div key={data.key} className="my-3 col-md-4 col-lg-3 col-sm-6 mx-3">
              <div
                className="card bg-dark text-light"
                style={{border:'1px solid yellow', width: "18rem", boxShadow:'5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                data-aos="flip-right" data-aos-duration="1000"
              >
                <div className="img p-3">
                  <img src={data.imageSrc}  className="card-img-top" alt="..." style={{border:'2px solid yellow', borderRadius:'10px', height:'200px'}} />
                </div>
                <div className="card-body text-center ">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} target="_blanck" className="btn btn-primary mx-3">
                    Demo
                  </a>
                  <a href={data.source} target="_blanck" className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
