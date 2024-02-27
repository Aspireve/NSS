import "../styles/about/moto.css";
import useScrollVisibility from "../hooks/useScrollAnimation";
import { useRef } from "react";

export default function Moto() {
  const motoRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(motoRef, sliderRef);
  return (
    <div
      className={`moto-container ${isVisible ? "appear" : ""}`}
      ref={motoRef}
      id="what-is-nss"
    >
      <div className="moto-separator">
        <hr />
        <p>OUR MOTO</p>
        <hr />
      </div>
      <h1 ref={sliderRef}>NOT ME BUT YOU</h1>
      <p>
        The National Service Scheme operates with the motto "NOT ME BUT YOU,"
        aiming to inspire youth to serve the people and emphasises the
        importance of selflessness and putting the needs of others before one’s
        own.It constantly reminder that our actions are driven by the needs of
        others, that our service is not for personal gain but for the greater
        good. Embracing this motto, we humbly dedicate ourselves to the service
        of humanity
      </p>
    </div>
  );
}
