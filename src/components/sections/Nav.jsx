import React, { useEffect, useState } from "react";
import Button from "../nav/Button.jsx";
import List from "../nav/List.jsx";
import Logo from "../nav/Logo.jsx";

const Nav = () => {
  const [activeClass, setActiveClass] = useState("navbar");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        setActiveClass("navbar navbar-off");
      } else if (currentScrollPos < prevScrollPos) {
        setActiveClass("navbar navbar-on");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={activeClass}>
      <nav>
        <Logo />
        <List />
        <Button />
      </nav>
    </div>
  );
};

export default Nav;
