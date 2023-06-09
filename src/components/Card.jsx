import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = (props) => {
  const gitLink = props.github;
  const liveLink = props.live;

  return (
    <div className="card">
      <div className="card-buttons">
        <div>
          <FolderIcon />
        </div>
        <div>
          {gitLink !== null && (
            <button onClick={() => window.open(gitLink, "_blank")}>
              <GitHubIcon />
            </button>
          )}
          {liveLink !== null && (
            <button onClick={() => window.open(liveLink, "_blank")}>
              <OpenInNewIcon />
            </button>
          )}
        </div>
      </div>

      <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="card-tools">
        <ul>
          {props.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
