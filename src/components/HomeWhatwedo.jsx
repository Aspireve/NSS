import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home/whatwedo.css";

export default function WhatWeDo() {
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const whatwedoTitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (whatwedoTitleRef.current && sliderRef.current) {
        const rect = whatwedoTitleRef.current.getBoundingClientRect();
        setIsVisible(prev => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

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
        <button onClick={() => navigate("../projects")}>Learn More</button>
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
