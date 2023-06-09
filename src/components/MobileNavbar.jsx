import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import logo from "../images/logo.png";

const MobileNavbar = (props) => {
  const menu = props.menu;

  const [activeClass, setActiveClass] = useState("navbar-on");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
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

  const handleShowMenu = () => {
    return (
      <div className="mobile-nav-menu">
        <a href="#hero">
          <img width="50" height="50" src={logo} alt="homepage logo" />
        </a>

        <ul className="mobile-nav-menu-list">
          {menu.map((item) => (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={handleHamburgerClick}>
          <MenuOpenIcon />
        </button>
      </div>
    );
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar" className={activeClass}>
      <a href="#hero">
        <img width="50" height="50" src={logo} alt="homepage logo" />
      </a>
      <button onClick={handleHamburgerClick}>
        <MenuIcon />
      </button>

      {isMenuOpen && <div className="overlay">{handleShowMenu()}</div>}
    </div>
  );
};

export default MobileNavbar;
