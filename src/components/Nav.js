import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    key: "1",
    path: "/",
    name: "Home",
  },
  {
    key: "2",
    path: "/login",
    name: "Login",
  },
  {
    key: "3",
    path: "/register",
    name: "Register",
  },
  {
    key: "4",
    path: "/add",
    name: "Add",
  },
  {
    key: "5",
    path: "/delete",
    name: "Delete",
  },
  
];

const Nav = () => {
  return (
    <nav className="bg-teal-600 text-teal-400 p-5 shadow">
      <ul className="flex space-x-6 justify-center">
        {navs.map((nav) => (
          <li key={nav.key.toString()}>
            <NavLink exact to={nav.path} className="text-teal-100">
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
