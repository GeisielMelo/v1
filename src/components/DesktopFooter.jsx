import React from "react";
import Button from "../components/Button";

const DesktopFooter = (props) => {
  const buttons = props.buttons;

  return (
    <div>
      <div className="left-contact-box desktop-footer-buttons">
        {buttons.map((button, index) => {
          return (
            <Button
              key={index}
              name={button.name}
              link={button.link}
              icon={button.icon}
            />
          );
        })}
      </div>

      <div className="right-contact-box">
        <div className="email-box">
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </div>
      </div>

      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>

      <footer>
        <p>&copy; Geisiel Melo</p>
      </footer>
    </div>
  );
};

export default DesktopFooter;
