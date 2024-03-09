import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/Common/index";

export const NavbarFooter = ({ phase }) => {
  return (
    <>
      <Navbar phase={phase} />
      <Outlet />
      <Footer />
    </>
  );
};
