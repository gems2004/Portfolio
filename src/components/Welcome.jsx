import React, { useEffect, useState } from "react";

function Welcome() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container welcome-container">
      <div className="welcome">
        <div className={`welcome-logo ${scrolled ? "welcomeScrolled" : ""}`}>
          <img
            src="/shape.svg"
            width="579px"
            alt=""
            id={scrolled ? "rotated-blob" : "blob"}
            className="blob-shape"
          />
          <img
            src={scrolled ? "/Code_Img.svg" : `/Logo.svg`}
            width="510px"
            id="ge-logo"
            alt=""
            className={scrolled ? "code_logo" : "main_logo"}
          />
        </div>

        <div className={`welcome-text ${scrolled ? "p-left" : ""}`}>
          <div className="intro-text">
            <span
              className={`html-tags ${
                scrolled ? "top-tag-secondary" : "top-tag-intro"
              } `}
            >{`<h1>`}</span>
            <h1 id="aboutUs" className={`${scrolled ? "info" : "greet"}`}>
              {scrolled
                ? `A Dedicated Full-Stack Developers Specializing In MERN (MongoDB,
                Express, React, Node. Js) Technologies. Within This Portfolio,
                You'll Discover A Compilation Of Our Projects That Exemplify Our
                Proficiency In Building Robust, Scalable, And Dynamic Web
                Applications. From Crafting RESTful APIs With Node. Js And
                Express To Creating Interactive User Interfaces With React And
                Managing Data With MongoDB, Each Project Reflects Our Commitment
                To Delivering High-Quality, End-To-End Solutions. We' re
                Thrilled To Present Our MERN Stack Portfolio And We' re Eager To
                Explore New Opportunities To Leverage These Technologies In
                Innovative Ways .`
                : `Welcome To Our Frontend Portfolio.`}
            </h1>
            <span
              className={`html-tags ${
                scrolled ? "bottom-tag-secondary" : "bottom-tag-intro"
              } `}
            >{`</h1>`}</span>
            <hr
              className={`vertical ${
                scrolled ? "vertical-tall" : "vertical-short"
              }`}
            />
            <hr className={`horizontal ${scrolled ? "toTop" : "toBottom"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
