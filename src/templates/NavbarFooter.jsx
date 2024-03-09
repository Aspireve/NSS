import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import { LoaderStart } from "../components/Loaders/index";

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
