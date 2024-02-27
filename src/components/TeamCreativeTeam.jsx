import Images from "../assets/about/index";
import "../styles/team/creativesteam.css";

const TeamCreativeTeam = () => {
  return (
    <div className="team-creatives">
      <div className="team-creatives-image-container">
        <img src={Images.council2024} alt="Creative Team"/>
        <div className="team-creatives-text-container">
          <h2>Creative Team</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis veritatis, aperiam quos recusandae possimus officia
            sunt! Accusantium illo molestias repudiandae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCreativeTeam;
