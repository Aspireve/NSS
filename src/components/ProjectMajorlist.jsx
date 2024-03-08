import health from "../assets/projects/online-health.jpg";
import MajorModal from "./ProjectsMajormodal";
import { useState } from "react";

export default function MajorProjectsDisplay({ projects }) {
  const [showMajorModal, setShowMajorModal] = useState({
    display: false,
    data: null,
  });
  if (projects === null)
    return (
      <section className="scale-projects-container">
        <h2>No Major Projects</h2>
      </section>
    );
  return (
    <section className="scale-projects-container">
      <h2>Major Projects</h2>
      <div
        className="scale-projects-card-display"
        style={{ gridTemplateColumns: "repeat(3, minmax(32%, 1fr))" }}
      >
        {projects.map((project, idx) => (
          <div
            key={"major-project-" + idx}
            className="scale-projects-card"
            onClick={() => setShowMajorModal({display: true, data: project})}
          >
            <img
              src={project.images[0]}
              style={{ borderRadius: "20px 20px 0 0" }}
              alt={`${project.project} ${project.domain}`}
              loading="lazy"
            />
            <div className="scale-project-text">
              <h4>{project.domain}</h4>
              <h2>{project.project}</h2>
              <p>{project.summary.substring(0, 80)}.....</p>
            </div>
          </div>
        ))}
      </div>
      {showMajorModal.display && <MajorModal dataModel={showMajorModal} setShowMajorModal={setShowMajorModal} />}
    </section>
  );
}
