import React from "react";
import Title from "../contact/Title";
import Content from "../contact/Content";
import Button from "../contact/Button";

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <Title/>
        <Content />
        <Button />
      </div>
    </section>
  );
};

export default Contact;
