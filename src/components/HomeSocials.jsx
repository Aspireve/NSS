import Facebook from "../assets/static_images/facebook.svg";
import Instagram from "../assets/static_images/instagram.svg";
import LinkedIn from "../assets/static_images/linkedin.svg";
import Twitter from "../assets/static_images/square-x-twitter.svg";
import "../styles/home/socials.css";

export default function Socials() {
  return (
    <div className="home-socials-container">
      <h3 className="home-socials-header">Socials</h3>
      <p className="home-socials-quote">
        Follow our socials to get the most recent updates about all our projects
      </p>
      <div className="socials-icon-links">
        <div className="social-icon">
          <img src={Facebook} className="facebook" alt="facebook logo" />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <img src={Instagram} className="instagram" alt="instagram logo" />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <img src={LinkedIn} className="linkedin" alt="linkedin logo" />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <img src={Twitter} className="twitter" alt="twitter logo" />
          <p>@tcetnss</p>
        </div>
      </div>
    </div>
  );
}
