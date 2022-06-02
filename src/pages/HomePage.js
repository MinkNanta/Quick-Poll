import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import Trending from "../components/home/Trending";
import Explore from "../components/home/Explore";
import { useLocation } from "react-router-dom";

function HomePage() {
  const search = useLocation().search;
  const firstTime = new URLSearchParams(search).get("firstTime");
  console.log(firstTime);

  return (
    <div className="mainContainer box">
      {firstTime && <b>Hello</b>}
      <HeroBanner />
      <Trending />
      <Explore />
    </div>
  );
}

export default HomePage;

// sm:max-w-xs lg:max-w-4xl xl:max-w-7xl
