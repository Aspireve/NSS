import React from "react";
import "../styles/about/outcomes.css";
import Trophy from "../assets/static_images/trophy-solid.svg"

const outcomes = [
  "This is my Outcome",
  "This is my Outcome",
  "This is my Outcome",
  "This is my Outcome",
];

export default function Outcomes() {
  return (
    <div className="outcomes-container">
      <h2>Our Outcomes</h2>
      <div className="outcome-drop-container">
        {outcomes.map((outcome, idx) => (
          <div className="outcome">
            <div className="trophy-container">
              <img src={Trophy} alt="trophy" />
            </div>
            <div className="outcome-text">
              <h3>{outcome}</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                deserunt, eaque facere officia ipsam magni fuga laborum ipsa
                eveniet laboriosam nobis vel. Iure, obcaecati excepturi.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
