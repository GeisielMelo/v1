import React from "react";
import Tech from "../Tech"

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aspernatur laborum fugit cupiditate debitis, quas corporis iure
            numquam ad iusto ipsa quam labore dicta placeat laboriosam odio rem
            beatae distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            tempora officiis? Ad consectetur iste perspiciatis veritatis a esse.
            Temporibus obcaecati distinctio dignissimos earum enim voluptatem ab
            alias velit, accusamus error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam
            perspiciatis laudantium quod minus, quasi, similique rem neque
            provident omnis qui tempora? Consequuntur sapiente repudiandae ea,
            dicta dolores facilis earum.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <Tech />
        </div>
        <div className="grid-photo">
          <img
            width="300"
            height="300"
            src="https://img.icons8.com/3d-fluency/94/person-male--v5.png"
            alt="person-male--v5"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
