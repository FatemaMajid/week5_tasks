import React, { useState } from 'react';
import './right.css';

const Right = () => {
  const [projects, setProjects] = useState([
    {
      title: "Web Design Project",
      rate: "10$/Hour",
      projectImage: "./project.png",
      upBtn: "./up.png",
      downBtn: "./down.png",
      description: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      isVisible: true,
    },
    {
      title: "Web Design Project",
      rate: "10$/Hour",
      projectImage: "./project.png",
      upBtn: "./up.png",
      downBtn: "./down.png",
      description: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      isVisible: false,
    },
    {
      title: "Web Design Project",
      rate: "10$/Hour",
      projectImage: "./project.png",
      upBtn: "./up.png",
      downBtn: "./down.png",
      description: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      isVisible: false,
    },
    {
      title: "Web Design Project",
      rate: "10$/Hour",
      projectImage: "./project.png",
      upBtn: "./up.png",
      downBtn: "./down.png",
      description: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      isVisible: false,
    },
  ]);

  const toggleVisibility = (index) => {
    const updatedProjects = projects.map((project, idx) => {
      if (idx === index) {
        return { ...project, isVisible: !project.isVisible };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const freelancers = [
    { name: "Zena Saad", time: "2 months ago", rating: 8.0 },
    { name: "Ghoufran Saad", time: "3 months ago", rating: 7.0 },
    { name: "Huda Salih", time: "7 months ago", rating: 6.0 },
    { name: "Ali Saad", time: "1 year ago", rating: 7.0 },
    { name: "Ahmed Khaled", time: "2 years ago", rating: 8.0 },
  ];

  return (
    <div className="right">
      <div className="projectsSection">
        <div className="header">
          <h1>Your Recent Project</h1>
          <a href="#">See all projects</a>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="projectItem">
            <div className="projectDetails">
              <div className="projectInfo">
                <img src={project.projectImage} alt="Project" />
                <div className="text">
                  <h1>{project.title}</h1>
                  <p>{project.rate}</p>
                </div>
              </div>
              <button onClick={() => toggleVisibility(index)}>
                <img src={project.isVisible ? project.upBtn : project.downBtn} alt="Toggle visibility" />
              </button>
            </div>
            <div className={`description ${project.isVisible ? 'visible' : ''}`}>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="freelancersSection">
        <div className="header">
          <h1>Freelancers You Worked With</h1>
          <a href="#">See All</a>
        </div>

        {freelancers.map((freelancer, idx) => (
          <div key={idx} className="freelancerItem">
            <div className="freelancerInfo">
              <div className="freelancerDetails">
                <img src={`./pr${idx + 1}.png`} alt={freelancer.name} />
                <div className="text">
                  <h1>{freelancer.name}</h1>
                  <p>{freelancer.time}</p>
                </div>
              </div>
              <div className="rating">
                <img src="./Star 1.png" alt="Star" />
                <span>{freelancer.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
