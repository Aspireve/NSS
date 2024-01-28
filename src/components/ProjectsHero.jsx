import React, { useEffect, useState } from "react";
import "../styles/projects/hero.css";
import beach from "../assets/projects/beach-cleaning.jpg";
import ganesh from "../assets/projects/ganesh.jpg";
import newspaper from "../assets/projects/mewspaper-distri.jpg";
import nasha_mukti from "../assets/projects/nasha-mukti.jpg";
import online_health from "../assets/projects/online-health.jpg";
import blood from "../assets/projects/blood-dono.jpg";
import beach_reduced from "../assets/projects_reduced/beach-cleaning.jpg";
import ganesh_reduced from "../assets/projects_reduced/ganesh.jpg";
import newspaper_reduced from "../assets/projects_reduced/mewspaper-distri.jpg";
import nasha_mukti_reduced from "../assets/projects_reduced/nasha-mukti.jpg";
import online_health_reduced from "../assets/projects_reduced/online-health.jpg";
import blood_reduced from "../assets/projects_reduced/blood-dono.jpg";
import { useCarousel } from "../hooks/useCarousel";
import Image from "../containers/Image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export default function ProjectHero() {
  const { page, next, currentStepIndex } = useCarousel([
    <Image simple_image={beach_reduced} HD_image={beach} alt={"beach"} />,
    <Image simple_image={newspaper_reduced} HD_image={newspaper} alt={"newspaper"} />,
    <Image simple_image={ganesh_reduced} HD_image={ganesh} alt={"ganesh"} />,
    <Image simple_image={nasha_mukti_reduced} HD_image={nasha_mukti} alt={"nasha_mukti"} />,
    <Image simple_image={online_health_reduced} HD_image={online_health} alt={"online_health"} />,
    <Image simple_image={blood_reduced} HD_image={blood} alt={"blood"} />,
  ]);
  useEffect(() => {
    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseenter", function () {
        document.getElementById("cursor-following-div").style.display = "block";
        document.addEventListener("mousemove", followMouse);
      });

    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseleave", function () {
        document.getElementById("cursor-following-div").style.display = "none";
        document.removeEventListener("mousemove", followMouse);
      });
  }, []);

  function followMouse(e) {
    var childDiv = document.getElementById("cursor-following-div");
    var parentDiv = document.getElementById("parent-magestic-carousel");

    var parentRect = parentDiv.getBoundingClientRect();

    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;

    const maxX = parentRect.width - childDiv.clientWidth;
    const maxY = parentRect.height - childDiv.clientHeight;

    const clampedX = Math.min(maxX, Math.max(0, x));
    const clampedY = Math.min(maxY, Math.max(0, y));

    // Set the position of the absolute element
    childDiv.style.left = `${clampedX}px`;
    childDiv.style.top = `${clampedY}px`;
  }
  return (
    <>
      <div
        className="parent-magestic-carousel"
        id="parent-magestic-carousel"
        onClick={next}
      >
        <TransitionGroup>
          <CSSTransition key={currentStepIndex}
            timeout={1000}
            classNames="animated-carousel">{page}</CSSTransition>
        </TransitionGroup>
        <div className="cursor-following-div" id="cursor-following-div">
          <div>
            <h3>click to</h3>
            <h2>CHANGE</h2>
          </div>
        </div>
      </div>
      <div className="project-header-text">
        <h3>TCET-NSS UNIT</h3>
        <h4>helping the world, one step at a time</h4>
      </div>
    </>
  );
}
