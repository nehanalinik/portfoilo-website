import React from "react";
import { RiShareBoxLine, RiGithubFill } from "react-icons/ri";
import { ProjectDetails } from "../helper/ProjectDetails";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="heading">
        <h3>Projects</h3>
      </div>
      <div className="projects-section">
        {ProjectDetails.map((items) => {
          return (
            <div className="project1" key={items.id}>
              <div className="img-content">
                <img src={items.picture} alt={items.projectName} />
              </div>
              <div className="text-content">
                <div className="title">
                  <h3>{items.projectName}</h3>
                </div>
                <div className="tech-used-live-view">
                  <ul className="tech-used">
                    {items.skills.map((data, index) => (
                      <div key={index}>
                        <li>{data}</li>
                      </div>
                    ))}
                  </ul>
                  <ul className="live-view">
                    <a href={items.live} target="_blank" rel="noreferrer">
                      <div className="live">
                        <RiShareBoxLine size={24} />
                        Live
                      </div>
                    </a>
                    <a href={items.code} target="_blank" rel="noreferrer">
                      <div className="github">
                        <RiGithubFill size={24} />
                        Code
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <a href="https://github.com/nehanalinik" target="_blank" rel="noreferrer"><button>View More</button></a>
      <div className='projects-bg-text'>my projects</div>
    </section>
  );
};

export default Projects;
