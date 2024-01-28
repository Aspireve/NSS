import health from "../assets/projects/online-health.jpg";
export default function MajorModal({ setShowMajorModal }) {
  return (
    <div className="minor-modal-container">
      <div className="major-modal">
        <div className="major-image-and-summary">
          <div className="major-image-conatiner">
            <img src={health} />
          </div>
          <div className="major-modal-summary">
            <strong style={{color: "white", fontSize: "1.3rem"}}>SUMMARY:</strong> TCET NSS Unit initiated the "Talk with the City" project, focusing
            on understanding the challenges faced by people. Volunteers visited
            Singh Estate, Thakur Village kandivali(East) which is adopted by
            TCET NSS UNIT, dividing into groups to gather insights through a
            prepared questionnaire. Engaging in discussions, they not only
            identified problems but also offered solutions and the struggles
            faced by the common people. The project emphasized community
            interaction and problem-solving. A key learning was the importance
            of direct communication in comprehending and addressing local issues
            effectively.
          </div>
        </div>
        <div className="major-quote-and-text">
          <p className="minor-modal-quote">
            “When the voices connect, the problems dissect.
          </p>
          <h2 className="minor-project-name">Talk with the City</h2>
          <p className="major-project-domain-name">Domain: SOCIETY</p>
          <div className="major-project-full">
           The TCET NSS conducted the "Talk with the City" project, a proactive
            effort to connect with the community and comprehend their
            challenges. Venturing into Singh Estate, Thakur Village
            kandivali(East) which is adopted by TCET NSS UNIT, volunteers formed
            groups to engage residents with a thoughtful questionnaire. This
            direct interaction aimed to uncover the daily struggles faced by the
            community. Discussions extended beyond identifying problems as TCET
            NSS volunteers actively delved into dialogues to explore potential
            solutions. The motive behind the project was rooted in fostering a
            deeper understanding of the issues prevalent in the adopted village.
            By approaching residents with a structured questionnaire, the
            volunteers aimed to give voice to their concerns and create a
            platform for open dialogue. The goal was not only to identify
            problems but also to establish a collaborative effort where
            solutions could be discussed and implemented. One of the significant
            learnings from the "Talk with the City" project was the power of
            direct engagement in community service.Through these interactions,
            volunteers learned firsthand about the daily struggles and
            challenges faced by ordinary people, gaining valuable insights into
            their lives and experiences. Volunteers gained valuable insights
            into the nuanced challenges faced by the residents, allowing for
            more targeted and effective problem-solving. The project highlighted
            the importance of empathy, communication, and community involvement
            in creating positive change. Ultimately, it reinforced the NSS
            commitment to serving society and addressing local issues through
            direct, hands-on initiatives
          </div>
        <button onClick={() => setShowMajorModal(false)} className="minor-modal-close">Go Back</button> 
        </div>
        {/* <img src={health} />
        <div className="minor-modal-text">
          <p className="minor-modal-quote">
            Switch off, power up. Conserve electricity for a brighter,
            sustainable future.
          </p>
          <h2 className="minor-project-name">Electricity conservation</h2>
          <p className="minor-domain-name">Environment</p>
          <h3 className="minor-project-summary">
            The TCET NSS Unit hosts a webinar focused on raising awareness about
            Electricity Conservation, featuring breakout rooms for group
            discussions. This project yields over 25+ posters and presentations
            showcasing innovative ideas. Volunteers collaboratively design a
            questionnaire to enhance future surveys in the adopted villages,
            providing deeper insights into electricity conservation issues. The
            initiative cultivates critical thinking, teamwork, and communication
            skills, fostering a heightened appreciation for the significance of
            saving electricity. Anticipated to have a positive impact,
            volunteers aim to share gained knowledge and insights.
          </h3>
        </div>
        <button onClick={() => setShowMinorModal(false)} className="minor-modal-close">Go Back</button> */}
      </div>
    </div>
  );
}
