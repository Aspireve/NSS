import React from "react";
import { useEffect } from "react";
import "../styles/team/modal.css";
import Close from "../assets/static_images/xmark-solid.svg"

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal_Council">
        <button className="btnClose" onClick={onClose}>
          <img src={Close} alt="Close Button" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
