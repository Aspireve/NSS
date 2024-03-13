import Image from "../containers/Image";
import "../styles/team/creativesteam.css";

const TeamCreativeTeam = ({simple_image, hd_image, name, text}) => {
  return (
    <section className="team-creatives">
      <div className="team-creatives-image-container">
        <Image simple_image={simple_image} HD_image={hd_image} alt={name}/>
        <div className="team-creatives-text-container">
          <h2>{name}</h2>
          <p>
          {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCreativeTeam;
