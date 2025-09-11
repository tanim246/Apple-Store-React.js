import React from "react";
import { Outlet } from "react-router";
import MainNavber from "../Shared/MainNavber";

const MainLayout = () => {
  return (
    <div className="">
      <MainNavber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
