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
        <div className="welcome-logo">
          <img src="/shape.svg" width={324} alt="" id="shape" />
          <img
            src={scrolled ? "/Code_Img.svg" : `/Logo.svg`}
            width={285}
            id="ge-logo"
            alt=""
            className={scrolled ? "code_logo" : "main_logo"}
          />
        </div>

        <div className={`welcome-text ${scrolled ? "p-left" : ""}`}>
          <div className="intro-text">
            <span className="html-tags top-tag">{`<h1>`}</span>
            <h1 className={`${scrolled ? "info" : "greet"}`}>
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
                : `Welcome to our Portfolio.`}
            </h1>
            <span className="html-tags bottom-tag">{`</h1>`}</span>
            <hr
              className={`vertical ${
                scrolled ? "vertical-tall" : "vertical-short"
              }`}
            />
          </div>
          <hr className={`horizontal ${scrolled ? "toTop" : "toBottom"}`} />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
