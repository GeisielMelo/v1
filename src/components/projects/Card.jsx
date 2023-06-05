import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <FolderIcon />
          <button>
            <OpenInNewIcon />
          </button>
        </div>
        <h2>This is a title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>

      <div className="card-tools">
        <ul>
          <li>Node</li>
          <li>TypeScript</li>
          <li>Express</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
