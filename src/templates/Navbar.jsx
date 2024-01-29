import React from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoaderStart";
import { Outlet } from "react-router-dom";

export const NavbarOnly = ({ phase, loader, setLoader }) => {
  return (
    <>
      {loader && <LoadingScreen setLoader={setLoader} />}
      <Navbar phase={phase} />
      <Outlet />
    </>
  );
};
