import health from "../assets/projects/online-health.jpg";
export default function MinorModal({setShowMinorModal}) {
  return (
    <div className="minor-modal-container">
      <div className="minor-modal">
        <img src={health} />
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
        <button onClick={() => setShowMinorModal(false)} className="minor-modal-close">Go Back</button>
      </div>
    </div>
  );
}
