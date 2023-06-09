import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";

const DesktopNavbar = (props) => {
  const menu = props.menu;
  const button = props.button;

  const [activeClass, setActiveClass] = useState("navbar-on");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        setActiveClass("navbar-off");
      } else if (currentScrollPos < prevScrollPos) {
        setActiveClass("navbar-on");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div id="navbar" className={activeClass}>
      <a href="#hero">
        <img width="50" height="50" src={logo} alt="homepage logo" />
      </a>

      <ul>
        {menu.map((item) => (
          <li>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}

        <button onClick={() => window.open(button.link, "_blank")}>
          {button.name}
        </button>
      </ul>
    </div>
  );
};

export default DesktopNavbar;
