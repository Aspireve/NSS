import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import education from "../assets/home/education.png";
import health from "../assets/home/health.png";
import society from "../assets/home/society.png";
import "../styles/home/recent-projects.css";

const projectDescription = [
  {
    image: education,
    id: 1,
    domain: "EDUCATION",
    title: "Poster Making ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: health,
    domain: "HEALTH",
    id:2,
    title: "Organ Donation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: society,
    domain: "SOCIETY",
    id: 3,
    title: "Clean India, Green India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: health,
    domain: "HEALTH",
    title: "Organ Donation",
    id: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: society,
    domain: "SOCIETY",
    id: 5,
    title: "Clean India, Green India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
];

export default function RecentProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const projectsTitleRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsTitleRef.current && sliderRef.current) {
        const rect = projectsTitleRef.current.getBoundingClientRect();
        setIsVisible((prev) => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className={`recent-projects-container ${isVisible? "appear" : ""}`} ref={projectsTitleRef}>
      <h2 className={isVisible? "home-projects-header" : ""} ref={sliderRef}>Recent Projects</h2>
      <div className="prioject-class-container">
        {projectDescription.map((project) => (
          <div key={project.title} className="recent-project-card" onClick={() => navigate(`../projects?id=${project.id}`)}>
            <img src={project.image} alt="project" />
            <h4 className="recent-project-domain">{project.domain}</h4>
            <h3 className="recent-project-title">{project.title}</h3>
            <p className="recent-project-short-description">
              {project.description}
            </p>
            <div className="responsive-project-text">
              <h4 className="recent-project-domain">{project.domain}</h4>
              <h3 className="recent-project-title">{project.title}</h3>
              <p className="recent-project-short-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}