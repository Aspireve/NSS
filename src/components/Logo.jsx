import static_image from "../assets/static_images/index";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink style={{textDecoration:"none", color:"inherit", display: "flex", alignItems: "center"}} to={"../"}>
      <img src={static_image.nss_logo_img} alt="NSS Logo" className="logo-image" />
      <div className="logo-title">
        <h2>TCET</h2>
        <h3>NSS UNIT</h3>
      </div>
    </NavLink>
  );
}
