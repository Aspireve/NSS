import { useState, useEffect, useRef } from "react";

import "../styles/team/blogslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Images from "../assets";

const sliderData = [
  {
    image: `${Images.Technical}`,
    heading: "Technical Team",
    desc: "Fueling the impactful online presence of our TCET NSS UNIT, a dedicated team of technical wizards, including Aditi Yadav, Aniket Gupta, Jitesh Dubey, Steve Fernandes, Sumit Tiwari works tirelessly behind the scenes. These skilled individuals, with their diverse expertise, bring innovation and technical mastery to the forefront, enhancing the functionality, design, and appeal of our UNIT's website. Together, they are the backbone of our digital space, adding that special touch that makes our UNIT shine online.",
  },
  {
    image: `${Images.Create}`,
    heading: "Creative Team",
    desc: "At the core of our TCET NSS UNIT's dynamic social media presence is a formidable creative team, spearheaded by Aaliya Bhola, Aaryan Raina, Aishwarya Jagdale, Madhura Varerkar, Manisha Digra. Consisting of exceptionally talented, dedicated, and hardworking individuals, they collectively infuse every post with creativity, illuminating our UNIT's online presence. Their steadfast commitment to excellence and creativity has played a pivotal role in shaping and enhancing our UNIT's online presence.",
  },
  {
    image: `${Images.Team}`,
    heading: "Pos Council and JC",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  const auto = useRef(() => {
    slideInterval.current = setInterval(nextSlide, 10000);
  });

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto.current();
    }
    return () => clearInterval(slideInterval.current);
  }, [autoScroll]);

  return (
    <div className="slider">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="arrow prev"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="arrow next"
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <div>
              <img src={slide.image} alt="slide" className="image" />
              <div className="content">
                <div className="team-content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
