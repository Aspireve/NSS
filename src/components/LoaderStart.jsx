import React, { useEffect, useState } from "react";
import static_image from "../assets/static_images/index";
import "../styles/loading/startscreen.css";

export default function LoadingScreen({ setLoader }) {
  const [loading_styles, set_loading_styles] = useState({
    show_image: false,
    show_title: false,
    show_subtitle: false,
    show_page: false,
  });
  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    delay(900)
      .then(() => {
        set_loading_styles((prev) => ({ ...prev, show_image: true }));
        return delay(800);
      })
      .then(() => {
        set_loading_styles((prev) => ({ ...prev, show_title: true }));
        return delay(300);
      })
      .then(() => {
        set_loading_styles((prev) => ({ ...prev, show_subtitle: true }));
        return delay(500);
      })
      .then(() => {
        set_loading_styles((prev) => ({ ...prev, show_page: true }));
        return delay(1000);
      })
      .then(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div
      className={`loading-screen-container ${
        loading_styles.show_page ? "translate-y-loading" : ""
      }`}
      id="loading-screen-container"
    >
      <div className="loading-element-container">
        <img
          src={static_image.nss_logo_img}
          className={`nss-loader-image ${
            loading_styles.show_image ? "rotate-to-zero" : ""
          }`}
          alt="NSS Logo"
        />
        <h2
          id="nss_landing_title"
          className={loading_styles.show_title ? "show-text-loader" : ""}
        >
          TCET-NSS UNIT
        </h2>
        <h3
          id="nss_landing_subtitle"
          className={loading_styles.show_title ? "show-text-loader" : ""}
        >
          B-34 Mumbai University
        </h3>
      </div>
    </div>
  );
}
