import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import assesment from "../assets/home/assesment_and_engagement.png";
import community from "../assets/home/community_engagement.png";
import competance from "../assets/home/competence_development.png";
import leadership from "../assets/home/no-of-volunteers.png";
import assesment_simple from "../assets/home_reduced/assesment_and_engagement.jpg";
import community_simple from "../assets/home_reduced/community_engagement.jpg";
import competance_simple from "../assets/home_reduced/competence_development.jpg";
import leadership_simple from "../assets/home_reduced/no-of-volunteers.jpg";
import "../styles/home/objectives.css";
import Image from "../containers/Image";

const objectiveText = [
  {
    image: community,
    simple_image: community_simple,
    title: "Community Understanding",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: assesment,
    simple_image: assesment_simple,
    title: "Assesment & Engagement",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: competance,
    simple_image: competance_simple,
    title: "Competence Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: leadership,
    simple_image: leadership_simple,
    title: "Leadership & Democracy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
];

export default function Objectives() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const objectivesTitleRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          if (objectivesTitleRef.current && sliderRef.current) {
            const rect = objectivesTitleRef.current.getBoundingClientRect();
            setIsVisible(prev => rect.top <= window.innerHeight - 200 || prev);
          }
        };
        window.addEventListener("scroll", handleScroll);
      }, []);
  
    return (
      <section className={`home-objective-container ${isVisible ? "appear" : ""}`} ref={objectivesTitleRef}>
        <h2 className={isVisible ? "home-objective-header": ""} ref={sliderRef}>Our Objectives</h2>
        <p className="home-objective-quote">
        The focus is on enhancing the quality of educated manpower through the cultivation of social responsibility. This entails elevating both material and moral aspects of society by preparing students for dedicated service to the nation. By immersing urban students in rural life, they gain first hand exposure to the community around their institution. The objective is to make the campus responsive to community needs, establishing a constructive link between technical education and the social and economic reconstruction of the country. This involvement contributes to national development and fosters a deeper understanding and appreciation of societal issues, encouraging active community participation.
        </p>
        <div className="home-objective-cards-container">
          {objectiveText.map((text) => (
            <div key={text.title} className="home-objective-card">
              <div className="home-objective-card-image">
                <Image simple_image={text.simple_image} HD_image={text.image} alt={text.title}/>
              </div>
              {/* <img
                src={text.image}
                className="home-objective-card-image"
                alt="objective card"
              /> */}
              <div className="home-objective-card-text ">
                <h2>{text.title}</h2>
                <p >{text.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

// export default function Objectives() {
//   var i = 0;
//   var txt = "Our Objectives";
//   var speed = 150;
//   function typeWriter() {
//     if (i < txt.length) {
//       document.getElementById("home-objective-header").innerHTML +=
//         txt.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }

//   useEffect(() => {
//     const ourObjectives = document.querySelectorAll(".home-objective-container");

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         ourObjectives[0].classList.add("appear")
//         typeWriter();
//       }
//     }, {
//       rootMargin: "-100px"
//     });

//     window.addEventListener("scroll", () => observer.observe(ourObjectives[0]));
//   });

//   return (
//     <section className="home-objective-container">
//       <h2 className="home-objective-header" id="home-objective-header"></h2>
//       <p className="home-objective-quote">
//       The focus is on enhancing the quality of educated manpower through the cultivation of social responsibility. This entails elevating both material and moral aspects of society by preparing students for dedicated service to the nation. By immersing urban students in rural life, they gain first hand exposure to the community around their institution. The objective is to make the campus responsive to community needs, establishing a constructive link between technical education and the social and economic reconstruction of the country. This involvement contributes to national development and fosters a deeper understanding and appreciation of societal issues, encouraging active community participation.
//       </p>
//       <div className="home-objective-cards-container">
//         {objectiveText.map((text) => (
//           <div key={text.title} className="home-objective-card">
//             <img
//               src={text.image}
//               className="home-objective-card-image"
//               alt="objective card"
//             />
//             <div className="home-objective-card-text ">
//               <h2>{text.title}</h2>
//               <p >{text.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
