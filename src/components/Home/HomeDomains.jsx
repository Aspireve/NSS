import { useRef } from "react";
import eduaction from "../../assets/home/education domain.webp";
import health from "../../assets/home/health Domain.webp";
import society from "../../assets/home/Society Domain.webp";
import environment from "../../assets/home/environment domain.webp";
import Plus from "../../assets/static_images/plus-solid.svg";
import "../../styles/home/domains.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";

const domaintext = [
  {
    title: "EDUCATION",
    search: "Education",
    image: eduaction,
    description: `TCET NSS UNIT promotes accessible education by distributing materials and offering tutoring support. It advocates for inclusive education and equal opportunities, empowering individuals with skills for a more educated society.`,
  },
  {
    title: "ENVIRONMENT",
    search: "Environment",
    image: environment,
    description: `TCET NSS UNIT fosters ecological sustainability through afforestation, waste management, and clean-up drives. It aims to create a greener environment for present and future generations.`,
  },
  {
    title: "SOCIETY",
    search: "Society",
    image: society,
    description: `TCET NSS UNIT focuses on holistic community development, leading social awareness campaigns and addressing societal issues. It aims for collective progress, fostering equity and harmony within communities.`,
  },
  {
    title: "HEALTH",
    search: "Health",
    image: health,
    description: `TCET NSS UNIT improves healthcare accessibility by organizing medical camps and awareness campaigns. It encourages voluntary blood donation and promotes preventive measures for better well-being.`,
  },
];

export default function Domains({ nav }) {
  const domainsTitleRef = useRef(null);
  const sliderRef = useRef(null);

  const { isVisible } = useScrollVisibility(domainsTitleRef, sliderRef);
  return (
    <div
      className={`home-domains-container ${isVisible ? "appear" : ""}`}
      ref={domainsTitleRef}
    >
      <div className={isVisible ? "home-domains-header" : ""} ref={sliderRef}>
        Our Domains
      </div>
      <div className="domains-chart-container">
        {domaintext.map((domain) => (
          <div key={domain.title} className="home-domains-chart">
            <div
              className="home-domains-chart-image-container"
              onClick={() => nav(`../projects?domain=${domain.search}`)}
            >
              <img src={domain.image} alt={domain.title} />
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
