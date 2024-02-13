// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { Navbar, Footer, LoaderStart } from "../components/index";

export const NavbarFooter = ({ phase }) => {
  return (
    <>
      <LoaderStart />
      <Navbar phase={phase} />
      <Outlet />
      <Footer />
    </>
  );
};
