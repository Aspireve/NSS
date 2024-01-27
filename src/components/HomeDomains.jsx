import React, {useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import eduaction from "../assets/home/education.png";
import health from "../assets/home/domain-health.png";
import society from "../assets/home/society.png";
import environment from "../assets/home/community_engagement.png";
import Plus from "../assets/static_images/plus-solid.svg"
import "../styles/home/domains.css";

const domaintext = [
  {
    title: "EDUCATION",
    image: eduaction,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "ENVIRONMENT",
    image: environment,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "SOCIETY",
    image: society,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "HEALTH",
    image: health,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
];

export default function Domains() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const domainsTitleRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (domainsTitleRef.current && sliderRef.current) {
        const rect = domainsTitleRef.current.getBoundingClientRect();
        setIsVisible(prev => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`home-domains-container ${isVisible? "appear" : ""}`} ref={domainsTitleRef}>
      <div className={isVisible? "home-domains-header" : ""} ref={sliderRef}>Our Domains</div>
      <div className="domains-chart-container">
        {domaintext.map((domain) => (
          <div key={domain.title} className="home-domains-chart">
            <div className="home-domains-chart-image-container" onClick={() => navigate(`../projects?domain=${domain.title}`)}>
              <img src={domain.image} alt={domain.title}/>
              <div className="see-more-domains-container">
                <img src={Plus} alt="More Info" />
              </div>
            </div>
            <div className="domains-chart-text">
              <h2 className="domains-chart-header">{domain.title}</h2>
              <hr />
              <p className="domains-chart-passage">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
