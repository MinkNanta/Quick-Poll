import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import Trending from "../components/home/Trending";
import Explore from "../components/home/Explore";

function HomePage() {
  return (
    <div className="mainContainer box">
      <HeroBanner />
      <Trending />
      <Explore />
    </div>
  );
}

export default HomePage;

// sm:max-w-xs lg:max-w-4xl xl:max-w-7xl
