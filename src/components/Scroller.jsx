import { motion, useTransform, useScroll, easeInOut } from "framer-motion";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "../styles/scroller.css";
import Modal from "../components/Modal";
import Images from "../assets/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const cards = [
  {
    url: `${Images.Atharva}`,
    quote: "Listen with curiosity. Speak with honesty. Act with integrity",
    details: {
      name: "Atharva Pardeshi",
      desi: "Student Leader",
      linkedin: "",
      about:
        "Atharva showcases an exceptional ability to inspire and guide his peers toward shared goals. Through effective communication skills he fosters a culture of responsibility and accountability among students, building positive connections within the community. He cares about and values what others think, always listening to their ideas and concerns. His commitment to excellence significantly contributes to a work environment marked by harmony, consistently lifting the spirits of those under his leadership.",
    },
    id: 1,
  },
  {
    url: `${Images.Satyam}`,
    quote:
      "A great person attracts great people and knows how to hold them together",

    details: {
      name: "Satyam Rudrakanthwar",
      desi: "Student Leader",
      linkedin: "",
      about:
        "Satyam is a dedicated individual recognized for his inclusive and responsible nature. His remarkable ability to inspire peers has cultivated a robust culture of social responsibility within the team. As a creative wizard, he introduces innovation to his leadership, making a lasting impact beyond the immediate group. His commitment to excellence and creative problem-solving positions him as a valuable asset.",
    },
    id: 2,
  },
  {
    url: `${Images.Ruchika}`,
    quote:
      "Leadership is not about being in charge. It's about taking care of those in your charge.",

    details: {
      name: "Ruchika singh",
      desi: "Student Leader",
      linkedin: "",
      about:
        "Ruchika demonstrates empathy, resilience, and approachability and can take everyone around uphill; one who can amplify our effect and create a positive change to contribute to the betterment of our community. She exhibits effective communication with her associates, subordinates and seniors. She has consistently shown an unwavering commitment to fostering positive change, inclusivity, and collaboration. She strives to and has effectively created an environment where every volunteer feels supported and heard.",
    },
    id: 3,
  },
  {
    url: `${Images.Harsh}`,
    quote:
      "If your actions inspire others to dream more, learn more, do more and becomemore, you are a leader",

    details: {
      name: "Harsh mishra",
      desi: "admin Head",
      linkedin: "",
      about:
        "Harsh embodies a unique mix of creativity, leadership, and resilience, tackling every challenge withunwavering commitment. He enjoys exploring new opportunities and achieves results with unmatched passion, thanks to his keen attention to detail and ability to navigate complexities effortlessly. Hisapproach to problem-solving showcases patience, determination, and hard work, creating a winning formula for success. As a natural leader and enthusiastic explorer, he moves forward, ensuring not only completion but mastery of every task within the specified time, showing incredible dedication.",
    },
    id: 4,
  },
  {
    url: `${Images.Ruchi}`,
    quote: "We come nearest to the great when we are great in humility.",

    details: {
      name: "Ruchi Yadav",
      desi: "admin Head",
      linkedin: "",
      about:
        "Ruchi is a confident, fierce, and headstrong individual wrapped in contagious optimism. Her clear and effective communication sets the foundation for firm decisions, emphasizing actions over mere words. A keen observer and inquisitive soul, she skillfully manages her time to produce outcomes with a lasting influence. As a patient and persuasive team player, she cultivates a positive and collaborative atmosphere, bringing out the best in others through effective communication and understanding. Her optimism acts as the driving force to confront challenges with an unwavering can-do attitude, facing adversities head-on with resilience and determination",
    },
    id: 5,
  },
  {
    url: `${Images.Gourav}`,
    quote:
      "Leadership is not just about making decisions; it's about making the right decisions strategically",

    details: {
      name: "Gourav singh",
      desi: "Project Head",
      linkedin: "",
      about:
        "Transforming our initial concerns into strategic foresight and smart planning, Gourav skillfully organizes all parts of the current mission. With proactive and effective leadership, he turns challenges into chances for the team's growth, showing not only persistence but also a strategic mindset that goes beyond current issues. His careful attention to detail and advanced understanding of the project set the stage for success. Instead of just overseeing projects, he makes successful plans by foreseeing issues and paving the way for clever solutions. His strategy aims to go beyond expectations, making sure every project he leads is not only finished but also a symbol of smart thinking and skill. He is committed to achieving the best results.",
    },
    id: 6,
  },
  {
    url: `${Images.Tanay}`,
    quote:
      "Life is a collection of moments; don't just count them, make them count",

    details: {
      name: "Tanay Agrawal",
      desi: "Project Head",
      linkedin: "",
      about:
        "Tanay is our go-to multitasking maestro, who seamlessly weaves through responsibilities, transforming daily tasks into a captivating symphony. His approach to challenges isn't just problem-solving; it's an opportunity to showcase his unparalleled teamwork spirit, turning every collaboration into a masterpiece. He is a conductor of success, directing a well-coordinated dance of roles and responsibilities with effortless mastery. In the face of challenges, he doesn't see roadblocks but pathways to new possibilities, infusing every project with a burst of creative energy. As a compass for team, Tanay guides us with direction, purpose, and a touch of adventure. His leadership isn't just about navigating; it's about charting a course that elevates to new heights.",
    },
    id: 7,
  },
  {
    url: `${Images.Nandu}`,
    quote:
      "It's not about the resources you have available. It's about the resourcefulness you have within you.",

    details: {
      name: "NandKumar Pandey",
      desi: "Finance Head",
      linkedin: "",
      about:
        "In the mix of finance and strategy, Nandkumar stands out as a strong, resourceful leader essential for our team's success. His intelligence, know-how, and ability to work well with others encourage teamwork. He is skilled at managing things, ensuring we use our resources wisely for our plans. His careful analysis of problems, combined with his resourcefulness, allows him to swiftly del well-though solutions, making him a key player in our ongoing success in the changing world.",
    },
    id: 8,
  },
];

const Scroller = () => {
  const [show, setShow] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  const handleCardClick = (card) => {
    setShow(true);
    setSelectedCardDetails(card);
  };

  return (
    <div>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          setSelectedCardDetails(null);
        }}
      >
        {selectedCardDetails && (
          <div className="modal_div">
            <h1>About</h1>
            <p className="council_about">{selectedCardDetails.details.about}</p>
            <h4>Contact</h4>
            <div className="contact">
              <Link to={selectedCardDetails.details.linkedin} className="link">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link className="link">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link className="link">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
          </div>
        )}
      </Modal>
      <HorizontalScrollCarousel handleCardClick={handleCardClick} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ handleCardClick }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xValue, setXValue] = useState(["40%", "-84%"]);

  useEffect(() => {
    const updateXValue = () => {
      if (window.innerWidth < 300) {
        setXValue(["45%", "-134.5%"]);
      } else if (window.innerWidth <= 425) {
        setXValue(["46%", "-136%"]);
      } else if (window.innerWidth > 425 && window.innerWidth < 768) {
        setXValue(["44%", "-132%"]);
      } else if (window.innerWidth <= 768 && window.innerHeight > 1024) {
        setXValue(["45%", "-132%"]);
      } else if (window.innerWidth <= 768 && window.innerHeight < 400) {
        setXValue(["25%", "-75%"]);
      } else if (window.innerWidth <= 768) {
        setXValue(["38%", "-114%"]);
      } else if (window.innerWidth <= 1024) {
        setXValue(["38%", "-114%"]);
      } else {
        setXValue(["32%", "-96%"]);
      }
    };

    updateXValue();
    window.addEventListener("resize", updateXValue);

    return () => {
      window.removeEventListener("resize", updateXValue);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 2], xValue);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="sticky-container">
        <div className="colors">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
        </div>
        <h1 className="heading">Councils</h1>
        <p className="council_head">
          Our committed Councils, like steadfast pillars, ensure the seamless
          execution of every TCET NSS project. Their dedication transforms each
          initiative into a testament of collective commitment, highlighting the
          unit's cohesive and impactful approach to community service.
        </p>
        <motion.div
          style={{ x }}
          transition={{ stagger: 5, scrub: 1, ease: easeInOut }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="card-container"
        >
          {cards.map((card, index) => (
            <Card
              card={card}
              key={card.id}
              index={index}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, onClick, index }) => {
  const backgroundColors = index % 2 === 0 ? "#D0BFFF" : "#ffe4e1";

  return (
    <div
      className="card"
      key={card.id}
      onClick={onClick}
      style={{ backgroundColor: backgroundColors }}
    >
      <div className="card-image">
        <img src={card.url} alt="hello" />
      </div>
      <p className="council_quote">{card.quote}</p>
      <div className="card-overlay">
        <p className="council_name">{card.details.name}</p>
        <p className="council_post">{card.details.desi}</p>
      </div>
    </div>
  );
};

export default Scroller;
