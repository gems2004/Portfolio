import React, { useState } from "react";

function Project({ name, description, image, link }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="project" onClick={() => setIsClicked(!isClicked)}>
      <div className="project__text">
        <div>
          <h3>{name}</h3>
          <img
            src="/Chevron_Down.svg"
            className={`project__chevron ${isClicked ? "rotate" : ""}`}
            loading="lazy"
          />
        </div>
        <p className={`project_hidden ${isClicked ? "project_shown" : ""}`}>
          {description}
          <br />
          <a className="link" href={link} target="_blank">
            Visit This Page
          </a>
        </p>
      </div>
      <div>
        <img src={image} alt="Project Logo" className="project__img" />
      </div>
    </div>
  );
}

export default Project;
