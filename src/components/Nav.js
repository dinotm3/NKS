import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = () => {
  <nav className="bg-purple-600 text-purple-400 p5 shadow">
    <ul className="flex space-x-6 justify-end">
      {navs.map((nav) => (
        <li>
          <NavLink exact to={nav.pat} activeClasName="text-purple-100">
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>;
};

export default Nav;
