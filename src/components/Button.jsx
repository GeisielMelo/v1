import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Button = (props) => {
  let buttonType;
  let title;

  switch (props.type) {
    case "github":
      buttonType = <GitHubIcon />;
      title = "Github";
      break;
    case "linkedIn":
      buttonType = <LinkedInIcon />;
      title = "LinkedIn";
      break;
    case "email":
      buttonType = <EmailIcon />;
      title = "Email";
      break;
    default:
      buttonType = null;
  }

  return <button title={title}>{buttonType}</button>;
};

export default Button;
