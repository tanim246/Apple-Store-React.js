import React from "react";
import { Outlet } from "react-router";
import MainNavber from "../Shared/MainNavber";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <MainNavber />
      <Outlet className="shadow" />
      <Footer />
    </div>
  );
};

export default MainLayout;
