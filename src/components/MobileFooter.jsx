import React from "react";
import Button from "../components/Button";

const MobileFooter = (props) => {
  const buttons = props.buttons;

  return (
    <div>
      <footer>
        <div className="mobile-footer-buttons">
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
        <p>&copy; Geisiel Melo</p>
      </footer>
    </div>
  );
};

export default MobileFooter;
