import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
function MenuLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { MenuLayout };
