import React from "react";
import Item from "./Item";
import Number from "./Number"

const List = () => {
  return (
    <ul>
      <Number number="01."/><Item name="About"/>
      <Number number="02."/><Item name="Tech"/>
      <Number number="03."/><Item name="Projects"/>
      <Number number="04."/><Item name="Contact"/>
    </ul>
  );
};

export default List