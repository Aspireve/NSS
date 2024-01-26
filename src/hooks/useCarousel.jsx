import { useState } from "react";
import hero from "../assets/home/hero-section.jpg";

import hero_reduced from "../assets/home_reduced/hero-section.jpg";

export const useCarousel = (pages) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); 
  function next() {
    console.log(currentStepIndex);
    setCurrentStepIndex((i) => {
      if (i >= pages.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }
  return {
    page: pages[currentStepIndex],
    next,
    back,
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === pages.length - 1,
    currentStepIndex,
  };
};
