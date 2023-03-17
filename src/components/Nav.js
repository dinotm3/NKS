import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    key: "1",
    path: "/",
    name: "Home",
  },
  {
    key: "5",
    path: "/register",
    name: "Register",
  },
  {
    key: "6",
    path: "/add",
    name: "Add",
  },
  {
    key: "7",
    path: "/edit",
    name: "Edit",
  },
  {
    key: "8",
    path: "/delete",
    name: "Delete",
  },
];

const Nav = () => {
  const [isLogged, setIsLogged] = useState();
  function isLoggedIn() {
    if (localStorage.getItem("token") != null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <nav className="bg-teal-600 text-teal-400 p-5 shadow">
      <ul className="flex space-x-6 justify-center">
        {navs.map(({ key, path, name }) => (
          <li key={key.toString()}>
            <NavLink to={path} className="text-teal-100">
              {name}
            </NavLink>
          </li>
        ))}
        {!isLogged ? (
          <li key="2">
            <NavLink to="/login" className="text-teal-100" onClick={isLoggedIn}>
              Login
            </NavLink>
          </li>
        ) : (
          <li key="3">
            <NavLink to="/logout" className="text-teal-100" onClick={isLoggedIn}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
