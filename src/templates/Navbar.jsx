import React from "react";
import { Navbar } from "../components/Common/index";
import { Outlet } from "react-router-dom";

export const NavbarOnly = ({ phase }) => {
  return (
    <>
      <Navbar phase={phase} />
      <Outlet />
    </>
  );
};
