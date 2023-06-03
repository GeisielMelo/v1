import React from "react";
import Button from "./Button.jsx";
import List from "./List.jsx";
import Logo from "./Logo.jsx";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <Logo />
        <List />
        <Button />
      </nav>
    </div>
  );
};

export default Nav;
