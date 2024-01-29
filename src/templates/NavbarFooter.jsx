import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoaderStart";

export const NavbarFooter = ({phase, loader, setLoader}) => {
  return (
    <>
      {loader && <LoadingScreen setLoader={setLoader}/>}
      <Navbar phase={phase} />
      <Outlet />
      <Footer />
    </>
  );
};
