import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import "~/styles/indicator.css";

interface IndicatorProps {
  items: string[];
}
const Indicator = ({ items }: IndicatorProps) => {
  const [activeId, setActiveId] = useState("1");

  useEffect(() => {
    const handleScroll = () => {
      // const scrollPosition = window.scrollY;
      // console.log("test", scrollPosition);

      const elements = document.querySelectorAll(".page-container");

      for (const element of elements) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          if (element.id) {
            setActiveId(element.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="indicator">
      {items.map((item, index) => (
        <Link key={index} to={`#${index + 1}`} className={`item ${activeId === `${index + 1}` ? "active" : ""}`}>
          <p className="body-s">{item}</p>
          <div className="icon" />
        </Link>
      ))}
    </div>
  );
};

export { Indicator };
