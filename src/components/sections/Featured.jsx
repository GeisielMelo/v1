import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Featured = (props) => {
  const data = props.data;
  const firstFeaturedItem = data.find((item) => item.featured === true);
  const initialImage = firstFeaturedItem.imageLink;

  const [preview, setPreview] = useState({
    imageLink: initialImage,
    description: "",
    technologies: [],
    gitLink: "",
    liveLink: "",
  });

  const handleFeaturedItemClick = (item) => {
    setPreview({
      imageLink: item.imageLink,
      description: item.description,
      technologies: item.technologies,
      gitLink: item.gitLink,
      liveLink: item.liveLink,
    });
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="featured">
      <div className="featured-container">
        <div className="featured-menu">
          <ul>
            {data.map((item) =>
              item.featured === true ? (
                <li
                  key={item.title}
                  onClick={() => handleFeaturedItemClick(item)}
                >
                  {item.title}
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="featured-preview">
          <img src={preview.imageLink} alt="" />
          <div className="featured-preview-description">
            <p>{preview.description}</p>
            <ul>
              {preview.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="featured-preview-buttons">
              {preview.gitLink !== null && (
                <button onClick={() => handleButtonClick(preview.gitLink)}>
                  <GitHubIcon />
                </button>
              )}
              {preview.liveLink !== null && (
                <button onClick={() => handleButtonClick(preview.liveLink)}>
                  <OpenInNewIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
