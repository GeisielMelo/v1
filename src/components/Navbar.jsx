import React, { useState, useEffect } from "react";

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
      <img width="50" height="50" src={props.logo} alt="circled-g" />

      <ul>
        {props.menu.map((item) => (
          <li>{item}</li>
        ))}
        <li className="li-button">
          <button>{props.button}</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
