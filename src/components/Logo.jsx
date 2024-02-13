import nss_logo from "../assets/static_images/nss_logo.svg"
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink style={{textDecoration:"none", color:"inherit", display: "flex", alignItems: "center"}} to={"../"}>
      <img src={nss_logo} alt="NSS Logo" className="logo-image" />
      <div className="logo-title">
        <h2>TCET</h2>
        <h3>NSS UNIT</h3>
      </div>
    </NavLink>
  );
}
