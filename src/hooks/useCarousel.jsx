import { useState } from "react";

export const useCarousel = (pages) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); 
  function next() {
    console.log(currentStepIndex);
    setCurrentStepIndex((i) => {
      if (i >= pages.length - 1) return 0;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return pages.length -1 ;
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
