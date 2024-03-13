import React from "react";
import NSS_chairperson from "../../assets/home/nss_chairperson.png";
import "../../styles/team/chairperson.css";

export const Chairperson = () => {
  return (
    <div className="chairperson-container">
      <div className="chairperson-content">
        <img src={NSS_chairperson} alt="Principal B.K. Mishra" />
        <div className="chair-info">
          <h1>Dr. B.K. Mishra</h1>
          <h3>-Chairperson TCET NSS UNIT</h3>
          <p>
            TCET prioritizes holistic student development, notably through the
            NSS unit established in 2005. The unit engages undergraduate
            students voluntarily in diverse social service activities,
            contributing to socio-economic progress. Students gain social
            awareness, respecting community challenges and cultivating a sense
            of dignity in labor. The NSS unit, known for its proactive planning,
            conducts weekly projects showcasing commendable punctuality and
            discipline. The magazine initiative empowers volunteers to voice
            social issues, fostering a sense of responsibility. Kudos to TCET
            NSS UNIT and POs for their efforts. Congratulations to the dedicated
            volunteers!
          </p>
        </div>
      </div>
    </div>
  );
};
