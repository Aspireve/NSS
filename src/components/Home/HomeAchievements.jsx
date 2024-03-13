import { useEffect, useRef, useState } from "react";
import nss_logo from "../../assets/static_images/nss_logo.svg";
import lives_affected from "../../assets/home/lives-affected.webp";
import leadership from "../../assets/home/leadership_and_democracy.webp";
import trees_planted from "../../assets/home/tree-plantation.webp";
import "../../styles/home/achievements.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";

export default function Achievements() {
  const achievementsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(achievementsTitleRef, sliderRef);

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const finalValues = [18, 196000, 1450, 108000];
  const increments = [1, 6000, 600, 3000]; // Adjusted for demonstration

  useEffect(() => {
    if (!isVisible) return;

    const timers = finalValues.map((_, index) => {
      const incrementCounter = () => {
        setCounters((prevCounters) => {
          if (prevCounters[index] < finalValues[index]) {
            const newCounters = [...prevCounters];
            newCounters[index] = Math.min(prevCounters[index] + increments[index], finalValues[index]);
            return newCounters;
          }
          return prevCounters;
        });
      };

      return setInterval(incrementCounter, 160);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <div className={`home-achievements ${isVisible ? "appear" : ""}`} ref={achievementsTitleRef}>
      <h2 id="home-achievements-header" className={isVisible ? "home-domains-header" : ""} ref={sliderRef}>Achievements</h2>
      <p>
Achievements are not endpoints but rather signposts illuminating the standards we aim to uphold, reminding us of the ongoing journey toward our fullest potential. They inspire continual growth and the pursuit of excellence, guiding us forward on our path of self-discovery and fulfillment.
      </p>
      <div className="home-achievements-incrementer">
        {[
          { title: "Established Since", image: nss_logo, count: counters[0], unit: "Years" },
          { title: "People Affected", image: lives_affected, count: counters[1], unit: "Lives" },
          { title: "Total Volunteers", image: leadership, count: counters[2], unit: "Volunteers" },
          { title: "Volunteer Hours", image: trees_planted, count: counters[3], unit: "Hours" },
        ].map(({ title, image, count, unit }, index) => (
          <div key={index} className="achievement">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div className="incrementer make-flex">
              <div className="incrementer">
                <p className="counter-incrementer">{count.toLocaleString()}</p>
              </div>
              <p>{unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}