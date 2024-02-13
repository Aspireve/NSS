import { useEffect, useRef } from "react";
import static_image from "../assets/static_images/index";
import "../styles/loading/startscreen.css";

export default function LoadingScreen() {
  const displayLoader = useRef(
    JSON.parse(sessionStorage.getItem("loaderDisplayed"))
  );
  useEffect(() => {
    document.title = "TCET NSS"
    sessionStorage.setItem("loaderDisplayed", false);
  }, []);
  if (displayLoader.current === null || displayLoader.current === true) {
    return (
      <div className="loading-screen-container">
        <div className="loading-element-container">
          <img
            src={static_image.nss_logo_img}
            className="nss-loader-image"
            alt="NSS Logo"
          />
          <h2>TCET-NSS UNIT</h2>
          <h3>B-34 Mumbai University</h3>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
