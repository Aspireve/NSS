import "../styles/about/values.css";
import Descipline from "../assets/about/Descipline.png"
import Respect from "../assets/about/Respect.png"
import Punctuality from "../assets/about/Punctuality.png"
import { useRef } from "react";
import useScrollVisibility from "../hooks/useScrollAnimation";

const values = [
  {
    title: "Punctuality",
    quote: "Punctuality speaks volumes in the language of reliability.",
    icon: Punctuality,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
  {
    title: "Discipline",
    quote: "Discipline is the bridge between goals and accomplishment.",
    icon: Descipline,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
  {
    title: "Respect",
    quote: "Respect is a two-way street, earn by giving it.",
    icon: Respect,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum repellat vitae ea similique, explicabo provident cum error laboriosam consequatur!",
  },
];

export default function Values() {
  const valueRef = useRef()
  const sliderRef = useRef()
  const { isVisible } = useScrollVisibility(valueRef, sliderRef);
  return (
    <div className={`values-container ${isVisible ? "appear" : ""}`} ref={valueRef}>
      <h1 className={isVisible ? "about-values-title" : ""} ref={sliderRef}>Core Values</h1>
      <div className="values-animated-container">
        {values.map((value, idx) => (
          <div className="value-card">
            <p className="value-quote">{value.quote}</p>
            <div className="value-title">{value.title}</div>
            <div className="value-separator">
              <hr />
              <img src={value.icon} className="see-more-domains" alt={value.title} />
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
