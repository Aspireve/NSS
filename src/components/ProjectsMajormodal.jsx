import arrow_left from "../assets/static_images/arrow-left-solid.svg";
import arrow_right from "../assets/static_images/arrow-right-solid.svg";
import { useCarousel } from "../hooks/useCarousel";
import Image from "../containers/Image"



export default function MajorModal({ dataModel, setShowMajorModal }) {
  console.log(dataModel)
  const { page, next, back } = useCarousel([...dataModel.data.images]);
  return (
    <div className="minor-modal-container">
      <div className="major-modal">
        <div className="major-image-and-summary">
          <div className="major-image-conatiner">
            <img
              src={arrow_left}
              onClick={() => back()}
              className="image-arrowe left"
              alt="left arrow"
            />
            <img src={page}  alt="project carousel"/>
            <img
              src={arrow_right}
              onClick={() => next()}
              className="image-arrowe right"
              alt="right arrow"
            />
          </div>
          <div className="major-modal-summary">
            <strong style={{ color: "white", fontSize: "1.3rem" }}>
              SUMMARY:
            </strong>{" "}
            {dataModel.data.summary}
          </div>
        </div>
        <div className="major-quote-and-text">
          <p className="minor-modal-quote">
            “{dataModel.data.quote}“
          </p>
          <h2 className="minor-project-name">{dataModel.data.project}</h2>
          <p className="major-project-domain-name">Domain: {dataModel.data.domain}</p>
          <div className="major-project-full">
          {dataModel.data.main}
          </div>
          <button
            onClick={() => setShowMajorModal(false)}
            className="minor-modal-close"
          >
            Go Back
          </button>
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
