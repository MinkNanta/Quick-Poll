import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import Trending from "../components/home/Trending";
import Explore from "../components/home/Explore";
import { useLocation } from "react-router-dom";
import Thankyou from "./feedback/Thankyou";

function HomePage() {
  const search = useLocation().search;
  const firstTime = new URLSearchParams(search).get("firstTime");

  // const firstTime = true;

  return (
    <div className="mainContainer box">
      {firstTime && <Thankyou />}
      <HeroBanner />
      <Trending />
      <Explore />
    </div>
  );
}

export default HomePage;
