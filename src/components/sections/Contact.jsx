import React from "react";

const Contact = (props) => {
  const handleContactClick = () => {
    window.location.href = `mailto:${props.email}`;
  };

  return (
    <section id="contact">
      <div>
        <h1>{props.subtitle}</h1>
        <h2>{props.title}</h2>
        <p>
          {props.message}
        </p>
        <button onClick={handleContactClick}>{props.button}</button>
      </div>
    </section>
  );
};

export default Contact;
