import React, { useRef } from "react";
import "../../styles/home/whatwedo.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";

export default function WhatWeDo({nav}) {
  const sliderRef = useRef(null);
  const whatwedoTitleRef = useRef(null);
  const {isVisible} = useScrollVisibility(whatwedoTitleRef, sliderRef)
  return (
    <div className={`what-we-do ${isVisible? "appear" : ""}`} ref={whatwedoTitleRef}>
      <div className="what-we-do-text">
        <h2
          className={isVisible ? "what-we-do-text-header" : ""}
          ref={sliderRef}
        >
          What We Do
        </h2>
        <p>
        The TCET NSS Unit is a catalyst for positive change and joy through community service. Focused on education, conservation of environment, health, sustainability and society needs. Our impactful initiatives resonate within our campus and extend beyond fostering a sense of togetherness within the entire community. With the collective efforts of 200 volunteers, we collaborate with NGOs and governmental bodies to reach a growing number of beneficiaries. In essence, the TCET NSS Unit stands as a beacon of compassionate action, driven by the belief that through service, we can sow the seeds of joy and progress for a brighter tomorrow.
        </p>
        <button onClick={() => nav("../projects")}>Learn More</button>
      </div>
      <div className="image-carousel-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
