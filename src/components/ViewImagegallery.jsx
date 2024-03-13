import { Link } from "react-router-dom";
import NSSLogo from "../assets/static_images/nss_logo.webp";

export const ViewImagegallery = () => {
  return (
    <Link style={{textDecoration: "none", color: "inherit"}} to={"../imagegallery"}>
      <div className="view-image-gallery-container">
        <img src={NSSLogo} alt="NSS Logo" />
        <p>View Image gallery</p>
      </div>
    </Link>
  );
};
