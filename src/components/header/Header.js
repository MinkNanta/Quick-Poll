import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  const navItemsLeft = [
    { id: 1, to: "/", name: "Poll" },
    { id: 2, to: "/pricing", name: "Pricing" },
    { id: 3, to: "/outside", name: "Buy me a coffee" },
  ];
  const navItemsRight = [
    { id: 4, to: "/about", name: "About us" },
    { id: 5, to: "/signin", name: "Sign in" },
  ];

  return (
    <div className="boxShadow">
      <div className="headerContainer">
        <div className="menuList flex-wrap">
          {navItemsLeft.map(({ id, to, name }) => (
            <Link key={id} className="menuItem" to={to}>
              {name}
            </Link>
          ))}
        </div>
        <div className="m-auto">
          <img src={logo} alt="logo" />
        </div>
        <div className="menuList">
          {navItemsRight.map(({ id, to, name }) => (
            <Link key={id} className="menuItem" to={to}>
              {name}
            </Link>
          ))}
          <Link type="button" className="primarySmall" to="/signup">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
