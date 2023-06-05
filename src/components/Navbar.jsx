import React, { useState, useEffect } from "react";

const Navbar = () => {
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
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/circled-g.png"
        alt="circled-g"
      />

      <ul>
        <li>About</li>
        <li>Tech</li>
        <li>Projects</li>
        <li>Contact</li>
        <li className="li-button">
          <button>Resume</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
