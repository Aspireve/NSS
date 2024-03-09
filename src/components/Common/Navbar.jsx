import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import "../../styles/navbar.css";
import NavMenu from "../Navmenu";
import { QuickMenu } from "../QuickMenu";

export default function Navbar({ phase }) {
  const [sidebar, setSidebar] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    const changeNavbarStyles = () => {
      let className = "";
      if (phase === 1 || window.scrollY > 530) {
        className = "solid-color-navbar";
      } else if (window.scrollY > 0 && window.scrollY < 530) {
        className = "gradient-navbar";
      }
      setNavbarClass(className);
    };
    changeNavbarStyles();

    window.addEventListener("scroll", changeNavbarStyles);
    return () => window.removeEventListener("scroll", changeNavbarStyles);
  }, [phase]); 

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Logo />
        <QuickMenu isOpen={sidebar} setSidebar={setSidebar} />
        <NavMenu isOpen={sidebar} />
      </div>
    </nav>
  );
}
