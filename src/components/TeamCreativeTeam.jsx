import Image from "../containers/Image";
import "../styles/team/creativesteam.css";

const TeamCreativeTeam = ({simple_image, hd_image, name}) => {
  return (
    <section className="team-creatives">
      <div className="team-creatives-image-container">
        <Image simple_image={simple_image} HD_image={hd_image} alt={name}/>
        <div className="team-creatives-text-container">
          <h2>{name}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis veritatis, aperiam quos recusandae possimus officia
            sunt! Accusantium illo molestias repudiandae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCreativeTeam;
