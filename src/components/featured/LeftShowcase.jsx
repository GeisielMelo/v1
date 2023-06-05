import React from "react";

const LeftShowcase = () => {
  return (
    <div class="left-content">
      <div class="left-description">
        <h1>Featured Project</h1>
        <h2>Lorem, ipsum dolor sit amet !</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          exercitationem ex ea perspiciatis, odio suscipit aliquam nihil non
          nostrum, odit nisi dolorem iusto eum consectetur sequi inventore,
          expedita rem magni!
        </p>
        <div>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Node</li>
            <li>Rust</li>
          </ul>
        </div>
      </div>
      <div class="left-image">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftShowcase;
