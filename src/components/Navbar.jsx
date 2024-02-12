import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import "../styles/navbar.css";
import NavMenu from "./Navmenu";
import { QuickMenu } from "./QuickMenu";

export default function Navbar({ phase }) {
  const [sidebar, setSidebar] = useState(false);
  const [navabarClass, setnavbarClass] = useState(
    phase === 1 ? "solid-color-navbar" : ""
  );

  useEffect(() => {
    const changeNavbarStyles = () => {
      if (phase === 1) {
        setnavbarClass(() => "solid-color-navbar");
      } else if (window.scrollY > 0 && window.scrollY < 530) {
        setnavbarClass(() => "gradient-navbar");
      } else if (window.scrollY > 530) {
        setnavbarClass(() => "solid-color-navbar");
      } else {
        setnavbarClass(() => "");
      }
    };
    if(phase === 1 ) setnavbarClass(() => "solid-color-navbar");
    window.addEventListener("scroll", changeNavbarStyles);
  }, [phase]);

  return (
    <nav className={navabarClass}>
      <div className="navbar-container">
        <Logo />
        <QuickMenu isOpen={sidebar} setSidebar={setSidebar} />
        <NavMenu isOpen={sidebar} />
      </div>
    </nav>
  );
}
