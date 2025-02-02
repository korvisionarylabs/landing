import "~/styles/navbar.css";

import { NavLink } from "@remix-run/react";

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
    name: "Post",
    to: "/post",
  },
];

interface ContainerProps {
  children?: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
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
              href="https://www.youtube.com/@VisionaryLabs-dr5ub"
              target="_blank"
              className="item youtube"
              rel="noreferrer"
              aria-label="youtube">
              {/* youtube */}
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
      {children}
    </>
  );
};

export { Container };
