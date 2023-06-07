import React from "react";

const Contact = (props) => {
  const handleContactClick = () => {
    window.location.href = `mailto:${props.email}`;
  };

  return (
    <section id="contact">
      <div>
        <p className="subTitle">{props.subTitle}</p>
        <h1>{props.title}</h1>
        <p>
          {props.message}
        </p>
        <button onClick={handleContactClick}>{props.button}</button>
      </div>
    </section>
  );
};

export default Contact;
