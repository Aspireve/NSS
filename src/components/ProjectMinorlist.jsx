import { useState } from "react";
import health from "../assets/projects/online-health.jpg";
import MinorModal from "./ProjectMinormodal";

export default function MinorProjectsDisplay({ projects }) {
  const [showMinorModal, setShowMinorModal] = useState(false)
  if (projects === null)
    return (
      <section className="scale-projects-container">
        <h2>No Minor Projects</h2>
      </section>
    );
  return (
    <section className="scale-projects-container">
      <h2>Minor Projects</h2>
      <div
        className="scale-projects-card-display minor"
        style={{ gridTemplateColumns: "repeat(2, minmax(50%, 1fr))" }}
      >
        {projects.map((project, idx) => (
          <div
            key={"minor-project-" + idx}
            className="scale-projects-card"
            style={{ display: "flex" }}
            onClick={() => setShowMinorModal(true)}
          >
            <img
              src={health}
              style={{ borderRadius: "20px 0 0 20px", width: "30%" }}
              alt={`${project.project} ${project.domain}`}
              loading="lazy"
            />
            <div className="scale-project-text">
              <h4>{project.domain}</h4>
              <h2>{project.project.length < 20 ? project.project : project.project.substring(0, 20) + "..."}</h2>
              <p>{project.summary.substring(0,60)}.....</p>
            </div>
          </div>
        ))}
      </div>
      {showMinorModal && <MinorModal setShowMinorModal={setShowMinorModal}/>}
    </section>
  );
}
