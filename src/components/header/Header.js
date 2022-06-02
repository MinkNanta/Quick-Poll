import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../contexts/SignUpContext";

export default function Header() {
  const { user, setUser } = useAuth();

  const navItemsLeft = [
    { id: 1, to: "/", name: "Poll" },
    { id: 2, to: "/pricing", name: "Pricing" },
    { id: 3, to: "/outside", name: "Buy me a coffee" },
  ];
  const ItemsGust = [
    { id: 4, to: "/about", name: "About us" },
    { id: 5, to: "/signin", name: "Sign in" },
  ];

  const ItemsAuth = [
    { id: 4, to: "/about", name: "About us" },
    { id: 5, to: "/profile", name: "Profile" },
  ];

  const navItemsRight = user ? ItemsAuth : ItemsGust;

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
        {navItemsRight.map(({ id, to, name }) => (
          <Link key={id} className="menuItem" to={to}>
            {name}
          </Link>
        ))}

        <div className="menuList">
          {!user && (
            <Link type="button" className="primarySmall" to="/signup">
              sign up
            </Link>
          )}

          {user && (
            <button onClick={() => setUser(false)}>
              <p>sign out</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
