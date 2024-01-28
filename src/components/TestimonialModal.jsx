import "../styles/testimonial/modal.css";
import Close from "../assets/static_images/xmark-solid.svg"

export default function Modal({ onClose, testimony, image, name, year, post }) {
  return (
    <div className={`modal-overlay ${testimony ? "active" : ""}`}>
      <div className="modal">
        <span className="modal-close-button" onClick={onClose}>
          <img src={Close} alt="Close Button"/>
        </span>
        <div className="modal-content">
          <div className="every-details">
            <div className="image">
              <img
                src={image}
                alt="Testimony"
                className="modal-image"
                loading="lazy"
              />
            </div>

            <div className="details">
              <h1 className="name">{name}</h1>
              <p>{post}</p>
              <p>{year}</p>
            </div>
          </div>
          <p>{testimony}</p>
        </div>
      </div>
    </div>
  );
}
