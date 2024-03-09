import React from "react";
import Navbar from "../components/Navbar";
// import LoadingScreen from "../components/LoaderStart";
import { LoaderStart } from "../components/Loaders/index";
import { Outlet } from "react-router-dom";

export const NavbarOnly = ({ phase }) => {
  return (
    <>
      <LoaderStart  />
      <Navbar phase={phase} />
      <Outlet />
    </>
  );
};
