import { NavLink, Outlet } from "@remix-run/react";

import "~/styles/navbar.css";

const pages = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about-us",
  },
  {
    name: "Service",
    to: "/service",
  },
  {
    name: "News",
    to: "/news",
  },
];

export default function Navbar() {
  return (
    <div>
      <div id="navbar">
        <p className="header-logo">VisionaryLabs</p>
        <div id="menus">
          {pages.map((page) => (
            <NavLink
              key={page.to}
              to={page.to}
              className={({ isActive }) => ["menu", isActive ? "selected" : ""].join(" ")}>
              <p className="selected">{page.name}</p>
              <p className="unselected">{page.name}</p>
              <div className="indicator" />
            </NavLink>
          ))}
        </div>
        <div id="links">
          <div className="item" />
          <div className="item" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
