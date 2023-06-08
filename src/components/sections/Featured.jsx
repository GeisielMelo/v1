import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Featured = (props) => {
  const data = props.data;
  const firstFeaturedItem = data.find((item) => item.featured === true);

  const [preview, setPreview] = useState({
    imageLink: firstFeaturedItem.imageLink,
    description: firstFeaturedItem.description,
    technologies: firstFeaturedItem.technologies,
    gitLink: firstFeaturedItem.gitLink,
    liveLink: firstFeaturedItem.liveLink,
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
      
      <div className="horizontal-line-title">
        <h1>{props.title}</h1>
        <div></div>
      </div>

      <div className="featured-container">
        <div className="featured-menu">
          {data.map((item) =>
            item.featured === true ? (
              <button
                key={item.title}
                onClick={() => handleFeaturedItemClick(item)}
              >
                {item.title}
              </button>
            ) : null
          )}
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
