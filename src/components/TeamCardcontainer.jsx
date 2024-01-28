import React from "react";
import "../styles/team/cardcontainer.css";
import Aashi from "../assets/team/Aashi Kulkarni.png"
import Ved from "../assets/team/Ved Vora.png"
import Uday from "../assets/team/Udhay Singh.png"
import Saachi from "../assets/team/Saachi Desai.png"

const CardContainer = () => {
  const cardContents = [
    {
      name: "Aashi Kulkarni",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: Aashi,
      position: "Deputy Programme Officer",
      quote: "Collective Efforts Yield Triumph.",
    },
    {
      name: "Udhay Singh",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: Uday,
      position: "Chairperson",
      quote:
        "Guided by a spirit of enthusiasm, navigating challenges with a helpful touch.",
    },
    {
      name: "Saachi Desai",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: Saachi,
      position: "Council",
      quote: "Approaching changes with Eagerness.",
    },
    {
      name: "Ved Vora",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: Ved,
      position: "Junior Council",
      quote:
        "In collective journeys, a helpful mindset and enthusiasm pave the way",
    },
  ];

  return (
    <div className="jc-card-container">
      <h2 id="jc-container-header">Junior Councils</h2>
      <p id="jc-container-info">
        At the forefront of assistance, our Junior Councils stand out as
        essential contributors, supporting and enhancing the endeavors of our
        broader councils, epitomizing the values of unity and collaboration.
      </p>
      <div className="jc-card-wrappers">
        {cardContents.map((jc_card_container, index) => (
          <Card
            key={index}
            name={jc_card_container.name}
            quote={jc_card_container.quote}
            image={jc_card_container.image}
            position={jc_card_container.position}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, quote, image, position }) => {
  return (
    <div className="jc-card-wrapper">
      <div className="jc-card">
        <img src={image} alt={name} className="jc-image" />
        <div className="jc-detail">
          <h2 className="jc-name">{name}</h2>
          <p className="jc-position">{position}</p>
        </div>
        <p className="jc-quote">{quote}</p>
      </div>
    </div>
  );
};

export default CardContainer;
