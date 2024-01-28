import React from "react";
import "../styles/developers/developers.css";
import { Link } from "react-router-dom";
import GitHub from "../assets/static_images/github.svg"
import Instagram from "../assets/static_images/instagram.svg"
import LinkedIn from "../assets/static_images/linkedin.svg"
import Steve from "../assets/developers/Steve Fernandes.png"
import Tanay from "../assets/developers/Tanay.jpg"
import Jitesh from "../assets/developers/Jitesh Dubey.jpg"
import Aditi from "../assets/developers/Aditi Yadav.jpg"
import Aniket from "../assets/developers/Aniket Gupta.jpg"
import Sumit from "../assets/developers/Sumit Tiwari.jpg"


const developersData = [
  {
    name: "Steve Fernandes",
    role: "UI/UX Designer, Frontend Developer",
    image: Steve,
    social: {
      instagram: "https://www.instagram.com/steve_______9856",
      linkedin: "https://www.linkedin.com/in/aspireve",
      github: "https://github.com/aspireve",
    },
  },
  {
    name: "Jitesh Dubey",
    role: "UI/UX Designer, Frontend Developer",
    image: Jitesh,
    social: {
      instagram: "https://instagram.com/jitesh_dubey_jd/",
      linkedin: "https://www.linkedin.com/in/jiteshdubey/",
      github: "https://github.com/jiteshdubey-jd",
    },
  },
  {
    name: "Tanay Agrawal",
    role: "Developer and Coordinator",
    image: Tanay,
    social: {
      instagram: "https://www.instagram.com/_tanay_agarwal",
      linkedin: "https://www.linkedin.com/in/tanay-agarval",
      github: "https://github.com/itsTanay",
    },
  },
  {
    name: "Aditi Yadav",
    role: "Frontend Developer",
    image: Aditi,
    social: {
      instagram: "https://www.instagram.com/adiiti._?igsh=MWxwM2g0eWJuYTc5eA==",
      linkedin: "",
      github: "https://github.com/aditiyadav2004",
    },
  },
  {
    name: "Aniket Gupta",
    role: "Frontend Developer",
    image: Aniket,
    social: {
      instagram: "https://www.instagram.com/the_aniketgupta0408",
      linkedin: "https://www.linkedin.com/in/aniket-gupta-94952425",
      github: "https://github.com/Aniket04087021",
    },
  },
  {
    name: "Sumit Tiwari",
    role: "Frontend Developer",
    image: Sumit,
    social: {
      instagram: "https://www.instagram.com/sumitevolv",
      linkedin: "https://www.linkedin.com/in/sumit-tiwari-623b04257/",
      github: "https://github.com/Sumitevolv",
    },
  },
];

const Developers = () => {
  return (
    <div>
      <div className="developer-info">
        <div className="colors">
          <div className="circle"></div>
          <div className="random"></div>
        </div>
        <h1>Meet The Developers</h1>
        <div className="developer-detail-cards">
          {developersData.map((developer, index) => (
            <div className="developer-card" key={index}>
              <div className="img-container">
                <div className="skewed">
                  <div id="img-div">
                    <img src={developer.image} alt={developer.name} />
                  </div>
                </div>
              </div>
              <div className="developers_content">
                <h2>{developer.name}</h2>
                <p>{developer.role}</p>
                <div className="links">
                  <Link
                    className="icon_link"
                    to={developer.social.instagram}
                    target="_blank"
                  >
                    <img src={Instagram} className="icons insta" alt="Instagram logo" />
                  </Link>
                  <Link
                    className="icon_link"
                    to={developer.social.linkedin}
                    target="_blank"
                  >
                    <img src={LinkedIn} className="icons linked" alt="LinkedIn logo" />
                  </Link>
                  <Link
                    className="icon_link"
                    to={developer.social.github}
                    target="_blank"
                  >
                    <img src={GitHub} className="icons github" alt="GitHub logo" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
