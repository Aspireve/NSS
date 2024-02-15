import React, { useEffect, useRef } from "react";
import Images from "../assets/about/index"
import "../styles/about/hero.css";

export default function AboutHero() {
  const councilCarousel = useRef(null);
  useEffect(() => {
    var slide = 1;
    setInterval(() => {
      if(councilCarousel.current !== null) councilCarousel.current.style.transform = `translateX(${slide * -100}%)`;
      if (slide === 3) return (slide = 0);
      return (slide += 1);
    }, 5000);
  }, []);
  return (
    <div className="council-carousel">
      <div className="counc-carousel" ref={councilCarousel}>
        <div className="council" style={{backgroundImage: "green"}}>
          <div className="council-text">
            <h2>COUNCIL 2020-21</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              architecto!
            </p>
          </div>
        </div>
        <div className="council" style={{backgroundImage: Images.council2024}}>
          <div className="council-text">
            <h2>COUNCIL 2021-22</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              architecto!
            </p>
          </div>
        </div>
        <div className="council" style={{backgroundImage: Images.council2024}}>
          <div className="council-text">
            <h2>COUNCIL 2022-23</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              architecto!
            </p>
          </div>{" "}
        </div>
        <div className="council" style={{backgroundImage: Images.council2024}}>
          <div className="council-text">
            <h2>COUNCIL 2023-24</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              architecto!
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
