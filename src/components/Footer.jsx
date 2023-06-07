import React from "react";
import Button from "../components/Button";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="left-contact-box">
        <Button type="github" />
        <Button type="linkedIn" />
        <Button type="email" />
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

export default Footer;
