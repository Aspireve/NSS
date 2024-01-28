import React from "react";
import "../styles/about/values.css";
import Descipline from "../assets/about/Descipline.png"
import Respect from "../assets/about/Respect.png"
import Punctuality from "../assets/about/Punctuality.png"

const values = [
  {
    title: "Punctuality",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    icon: Punctuality,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
  {
    title: "Discipline",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    icon: Descipline,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
  {
    title: "Respect",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    icon: Respect,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
];

export default function Values() {
  return (
    <div className="values-container">
      <h1>Core Values</h1>
      <div className="values-animated-container">
        {values.map((value, idx) => (
          <div className="value-card">
            <p className="value-quote">{value.quote}</p>
            <div className="value-title">{value.title}</div>
            <div className="value-separator">
              <hr />
              <img src={value.icon} className="see-more-domains" alt={value.title} />
              {/* <FontAwesomeIcon icon={value.icon} className="see-more-domains" /> */}
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
