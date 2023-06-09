import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Button = (props) => {
  let icon;

  switch (props.name) {
    case "GitHub":
      icon = <GitHubIcon />;
      break;
    case "LinkedIn":
      icon = <LinkedInIcon />;
      break;
    case "Email":
      icon = <EmailIcon />;
      break;
    default:
      icon = <AddCircleOutlineIcon />;
      break;
  }

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <button title={props.name} onClick={() => handleButtonClick(props.link)}>
      {icon}
    </button>
  );
};

export default Button;
