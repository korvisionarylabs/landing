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
    <>
      <div id="navbar-container">
        <div id="navbar">
          <p id="header-logo" className="header-logo">
            VisionaryLabs
          </p>
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
            <a
              href="https://facebook.com"
              target="_blank"
              className="item facebook"
              rel="noreferrer"
              aria-label="Facebook">
              {/* Facebook */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="item instagram"
              rel="noreferrer"
              aria-label="Instagram">
              {/* Instagram */}
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
