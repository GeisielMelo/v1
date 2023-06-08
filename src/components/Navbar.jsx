import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";

const Navbar = (props) => {
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
        <img width="50" height="50" src={logo} alt="letter g" />
      </a>

      <ul>
        {props.menu.map((item) => (
          <li>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}

        <button>{props.button}</button>
      </ul>
    </div>
  );
};

export default Navbar;
