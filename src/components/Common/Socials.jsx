import Instagram from "../../assets/static_images/instagram.svg";
import LinkedIn from "../../assets/static_images/linkedin.svg";
import Twitter from "../../assets/static_images/square-x-twitter.svg";
import Youtube from "../../assets/static_images/youtube.svg";
import "../../styles/home/socials.css";

export default function Socials() {
  return (
    <div className="home-socials-container">
      <h3 className="home-socials-header">Socials</h3>
      <p className="home-socials-quote">
        Follow our socials to get the most recent updates about all our projects
      </p>
      <div className="socials-icon-links">
      <div className="social-icon" onClick={() => window.open("https://www.youtube.com/@TCETNSSUNITB-34", '_blank')}>
          <img src={Youtube} className="instagram" alt="instagram logo" />
          <p>@TCETNSSUNITB-34</p>
        </div>
        <div className="social-icon" onClick={() => window.open("https://www.instagram.com/tcetnssunit", '_blank')}>
          <img src={Instagram} className="instagram" alt="instagram logo" />
          <p>@tcetnssunit</p>
        </div>
        <div className="social-icon" onClick={() => window.open("https://x.com/nss_tcet", '_blank')}>
          <img src={Twitter} className="twitter" alt="twitter logo" />
          <p>@nss_unit</p>
        </div>
        <div className="social-icon">
          <img src={LinkedIn} className="linkedin" alt="linkedin logo" />
          <p>@tcetnss</p>
        </div>
      </div>
    </div>
  );
}
