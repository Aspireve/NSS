import { useRef } from "react";
import education from "../assets/home/education.webp";
import health from "../assets/home/health.webp";
import society from "../assets/home/society.webp";
import "../styles/home/recent-projects.css";
import useScrollVisibility from "../hooks/useScrollAnimation";

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

export default function RecentProjects({nav}) {
  const projectsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(projectsTitleRef, sliderRef);

  return (
    <section className={`recent-projects-container ${isVisible? "appear" : ""}`} ref={projectsTitleRef}>
      <h1 className={isVisible? "home-projects-header" : ""} ref={sliderRef}>Recent Projects</h1>
      <div className="prioject-class-container">
        {projectDescription.map((project, idx) => (
          <div key={project.title + idx} className="recent-project-card" onClick={() => nav(`../projects?id=${project.id}`)}>
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