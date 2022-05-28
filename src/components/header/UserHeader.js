import logo200Image from "../../assets/img/logo_200.png";
import React from "react";

const navContain = "hidden md:block md:ml-10 md:pr-4 md:space-x-8";
const navElement = "font-medium text-t_main hover:text-t_support";

const navItems = [
  { to: "/", name: "Home" },
  { to: "/explore", name: "Export" },
  { to: "/", name: "logout" },
];

function UserHeader() {
  return (
    <div className="max-w-7xl flex justify-between items-center mx-auto py-6">
      <a href="/" className={navElement}>
        <img src={logo200Image} alt="" />
      </a>

      <div className={navContain}>
        {navItems.map(({ to, name }) => (
          <a href={to} className={navElement}>
            {name}
          </a>
        ))}
        {/* <button className={PrimarySmall}>Make A Quick Vote</button> */}
      </div>
    </div>
  );
}

export default UserHeader;
