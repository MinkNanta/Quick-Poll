import React from "react";
import logo from "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/assets/Quick -Poll-footer.png";

export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="grid grid-cols-5 mainContainer pt-16">
        <img src={logo} alt="" className="block" />
        <ul className="space-y-4">
          <p className="text-bg_main">Quick-poll</p>
          <p className="text-bg_sup opacity-60">Pricing</p>
          <p className="text-bg_sup opacity-60">The Polls</p>
          <p className="text-bg_sup opacity-60">Sign up</p>
        </ul>
        <ul className="space-y-4">
          <p className="text-bg_main ">Company</p>
          <p className="text-bg_sup opacity-60">About us</p>
          <p className="text-bg_sup opacity-60">Careers</p>
        </ul>
        <ul className="space-y-4">
          <p className="text-bg_main">Support me</p>
          <p className="text-bg_sup opacity-60">Contact us</p>
          <p className="text-bg_sup opacity-60">License</p>
          <p className="text-bg_sup opacity-60">Privacy</p>
        </ul>
        <ul className="space-y-4">
          <p className="text-bg_main">Quick on going</p>
          <p className="text-bg_sup">Buy me a coffee</p>
          <p className="text-bg_sup">View on Github</p>
        </ul>
      </div>
      <p className="text-main text-center py-8 opacity-60">
        © 2022 Quick-Poll.me
      </p>
    </div>
  );
}
