import { useEffect, useState } from "react";

function useScrollVisibility(TitleRef, SliderRef) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (TitleRef.current && SliderRef.current) {
        const rect = TitleRef.current.getBoundingClientRect();
        setIsVisible((prev) => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible };
}

export default useScrollVisibility;
