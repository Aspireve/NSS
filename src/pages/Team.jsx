import React from "react";
import "../styles/team/teams.css";
import { useState, useEffect } from "react";
import Scroller from "../components/Scroller";
import ReactCardFlip from "react-card-flip";
import JcContainer from "../components/TeamCardcontainer";
import NSS_chairperson from "../assets/home/nss_chairperson.png"
import Map from "../components/HomeMap"
import Socials from "../components/HomeSocials"
import SatishSingh from "../assets/team/Dr. Satish Singh.png"
import VinitaAgarwal from "../assets/team/Dr. Vinita Agarwal.png"
import SajjanKumar from "../assets/team/Mr. Sajjankumar Lal.png"
import JyotiVanave from "../assets/team/Ms. Jyoti Vanawe.png"
import TeamCreativeTeam from "../components/TeamCreativeTeam";
import Images from "../assets/team/index";

const Team = () => {
  const [isFlipped, setIsFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  const handleClick = (e, newVersion) => {
    setIsFlipped((prev) => {
      console.log(e, prev[e]);
      return {
        ...prev,
        [e]: !prev[e],
      };
    });
  };
  return (
    <div>
      <div id="chairperson-container">
        <div className="colors">
          <div className="circle1"></div>
          {/* <div className="circle2"></div> */}
        </div>
        <div className="chairperson-content" id="chairperson">
          <div className="table">
            <div id="chairperson">
              <img src={NSS_chairperson} alt="Principal B.K. Mishra" />
            </div>
            <div className="detail_chairperson">
              <h1>Dr. B.K. Mishra</h1>
              <h3>-Chairperson TCET NSS UNIT</h3>
              <div className="principals_desk">
                TCET prioritizes holistic student development, notably through
                the NSS unit established in 2005. The unit engages undergraduate
                students voluntarily in diverse social service activities,
                contributing to socio-economic progress. Students gain social
                awareness, respecting community challenges and cultivating a
                sense of dignity in labor. The NSS unit, known for its proactive
                planning, conducts weekly projects showcasing commendable
                punctuality and discipline. The magazine initiative empowers
                volunteers to voice social issues, fostering a sense of
                responsibility. Kudos to TCET NSS UNIT and POs for their
                efforts. Congratulations to the dedicated volunteers!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page1">
        <div className="colors">
          <div className="blob1"></div>
          <div className="blob2"></div>
        </div>
        <h1 className="po_head" id="programme-officer">Programme officers</h1>
        <p className="po_about">
          Dedicated Program Officers lead the TCET NSS Unit with passion and
          commitment, charting a course of service and impact. Their guidance
          shapes a meaningful path, motivating volunteers to actively contribute
          to the community.
        </p>
        <div className="prog">
          <div id="prog_box">
            <div className="card" onClick={() => handleClick("card1")}>
              <ReactCardFlip
                isFlipped={isFlipped.card1}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={SatishSingh}
                      alt="Programme Officer-Satish Sir"
                    />
                    <div className="prog-detail">
                      <h1>Dr. Satish Singh</h1>
                      <h3>-Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                  <p>
                    Having led the unit for years, I've gained valuable
                    experiences and witnessed students' growth project by
                    project. When thinking of NSS, core values like discipline,
                    punctuality, and respect resonate. Discipline is crucial for
                    societal uplift, punctuality defines NSS volunteers, and
                    compassion towards society and nature is imperative.
                    Congratulations to every TCET NSS UNIT volunteer for their
                    selfless dedication, contributing to society's betterment
                    and fostering continuous learning and growth.
                  </p>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div id="prog_box">
            <div className="card" onClick={() => handleClick("card2")}>
              <ReactCardFlip
                isFlipped={isFlipped.card2}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={VinitaAgarwal}
                      alt="Programme Officer Vinita maam"
                    />
                    <div className="prog-detail">
                      <h1>Dr. Vinita Agrawal</h1>
                      <h3>-Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="back_content">
                    <h3>FROM THE PROGRAMME OFFICER'S DESK</h3>
                    <p>
                      This resilient unit never loses hope, imparting a lesson
                      of unity to the entire college. Community upliftment is
                      the priority for each dedicated volunteer, well-acquainted
                      with local issues and always ready to seek and implement
                      solutions. Despite lockdown challenges, they engaged in
                      creative projects like webinars and mask-making. Now, with
                      improved conditions, offline projects bring hope,
                      exposure, and excitement, fostering the continuous growth
                      and development of our trusted volunteers. We're forever
                      proud of them.
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
      <div id="page2">
        <h1 className="dp_head" id="deputy-programme-officer">deputy-Programme officers</h1>
        <p className="dp_about">
          At the core of implementation, our Deputy Program Officers play a
          crucial role, transforming vision into tangible reality and ensuring
          that each project mirrors the essence of TCET NSS.
        </p>
        <div className="dep-prog">
          <div id="dep_box">
            <div className="card" onClick={() => handleClick("card3")}>
              <ReactCardFlip
                isFlipped={isFlipped.card3}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={SajjanKumar}
                      alt="Deputy Programme Officer SajjanKumar Lal"
                    />
                    <div className="depu_po_details">
                      <h1>SajjanKumar Lal</h1>
                      <h3>-Deputy Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                  <p>
                    The TCET NSS UNIT centers on Education, Health, Societal
                    Welfare, and Environment. Fueled by unity and enthusiasm,
                    volunteers from all branches form a cohesive NSS family.
                    Their strong bond transcends challenges, making them an
                    inspirational force of hope and unity in the college.
                    Prioritizing societal upliftment, these volunteers are an
                    integral part of the community they serve, actively
                    addressing issues and finding solutions. Despite global
                    difficulties, the volunteers approach community service with
                    renewed vigor and determination, earning our complete trust
                    and everlasting pride.
                  </p>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div id="dep_box">
            <div className="card" onClick={() => handleClick("card4")}>
              <ReactCardFlip
                isFlipped={isFlipped.card4}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img src={JyotiVanave} alt="Deputy Programme Officer Jyoti Vanave" />
                    <div className="depu_po_details">
                      <h1>Jyoti Vanawe</h1>
                      <h3>-Deputy Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                  <p>
                    The TCET NSS UNIT upholds core values of Respect,
                    Discipline, and Punctuality, guided by the motto "NOT ME BUT
                    YOU." Comprising 200 dedicated volunteers from various
                    branches, they unite to serve the community with unwavering
                    dedication and responsibility. Persistent and committed, the
                    unit prioritizes community upliftment, addressing local
                    issues with solutions. Even during lockdown, volunteers
                    brought joy, and now, with offline activities, their
                    enthusiasm for community service has heightened.
                    Post-tenure, volunteers evolve into adept multitaskers,
                    earning our complete trust and everlasting pride.
                  </p>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
      <Scroller />
      <JcContainer />
      <TeamCreativeTeam simple_image={Images.Tech_reduced} hd_image={Images.Tech} name={"Technical Team"}/>
      <TeamCreativeTeam simple_image={Images.Creative_reduced} hd_image={Images.Creative} name={"Creatives Team"}/>
      <Socials />
      <Map />
      {/* <ImageGallery /> */}
    </div>
  );
};

export default Team;
