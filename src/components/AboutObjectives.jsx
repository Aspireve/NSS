import React from "react";
import "../styles/about/objectives.css";
import nss_logo from "../assets/static_images/nss_logo.svg"

const objectives = [
  {
    objective: "This is Objective 1",
    support:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, doloremque!",
  },
  {
    objective: "This is Objective 2",
    support:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, doloremque!",
  },
  {
    objective: "This is Objective 3",
    support:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, doloremque!",
  },
  {
    objective: "This is Objective 4",
    support:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, doloremque!",
  },
];

export default function AboutObjectives() {
  return (
    <div className="objective-container">
      <h2>Our Objectives</h2>
      <div className="objective-card-container">
        {objectives.map((obj, idx) => (
          <div className="objective-card">
            {/* <h1>{idx + 1}</h1> */}
            <h2>{obj.objective}</h2>
            <p>{obj.support}</p>
          </div>
        ))}
        <img src={nss_logo} alt="NSS Logo"/>
      </div>
    </div>
  );
}
