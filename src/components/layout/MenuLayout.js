import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/components/layout/Footer.js";
function MenuLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { MenuLayout };
