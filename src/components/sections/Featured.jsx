import React from "react";

const Featured = () => {
  return (
    <section id="featured">
      <div className="featured-container">
        <div className="featured-menu">
          <ul>
            <li>Project</li>
            <li>Project</li>
            <li>Project</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="featured-preview">
          {" "}
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
