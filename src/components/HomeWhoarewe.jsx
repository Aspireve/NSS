import React, { useRef } from "react";
import nss_logo from "../assets/static_images/nss_logo.svg"
import "../styles/home/whoarewe.css";
import useScrollVisibility from "../hooks/useScrollAnimation";

export default function WhoAreWe({nav}) {
  const aboutUsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const {isVisible} = useScrollVisibility(aboutUsTitleRef, sliderRef)
  return (
    <section id="about" className={`about-us ${isVisible? "appear" : ""}`} ref={aboutUsTitleRef}>
      <div className="nss-logo-container image-wrapper">
        <img src={nss_logo} alt="NSS LOGO" loading="lazy"/>
      </div>
      <div className="about-us-text">
        <h2 className={isVisible? "about-us-text-header" : ""} ref={sliderRef}>Who Are We</h2>
        <p>The TCET NSS UNIT, is recognized as an extracurricular activity aided  by the University of Mumbai and supported by the Department of Youth Affairs and Sports, Government of India, operates under the inspiring motto "NOT ME BUT YOU" .The unit is dedicated to fostering the personality and overall development of its volunteers, emphasising the value of selfless service for the greater well-being of society. With 42 members in 2005, the TCET NSS UNIT has grown to 200 volunteers, with more than 1450 active volunteers.This expansion underscores the unit's enduring commitment to engaging more students in meaningful community service and instilling a spirit for a brighter future.</p>
        <button onClick={() => nav("../about")}>Learn More</button>
      </div>
    </section>
  );
}