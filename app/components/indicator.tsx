import { useEffect, useState } from "react";
import "~/styles/indicator.css";

interface IndicatorProps {
  items: string[];
}
const Indicator = ({ items }: IndicatorProps) => {
  const [activeId, setActiveId] = useState("1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop;
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

    document.body.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="indicator">
      {items.map((item, index) => (
        <a key={index} href={`#${index + 1}`} className={`item ${activeId === `${index + 1}` ? "active" : ""}`}>
          <p className="body-s">{item}</p>
          <div className="icon" />
        </a>
      ))}
    </div>
  );
};

export { Indicator };
