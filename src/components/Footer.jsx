import React, { useState, useEffect } from "react";

import Button from "../components/Button";

const Footer = (props) => {
  const buttons = props.buttons;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer-container">
      {isMobile ? (
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
      ) : (
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
      )}
    </div>
  );
};

export default Footer;
