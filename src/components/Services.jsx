import React from "react";

function Services() {
  return (
    <section id="services" className="container services-section">
      <div className="heading">
        <span className="html-tags top-tag">{`<h2>`}</span>
        <h2>We Will Code Your Project Using:</h2>
        <span className="html-tags bottom-tag">{`</h2>`}</span>
      </div>
      <section className="languages">
        <div>
          <a href="https://www.w3schools.com/html" target="_blank">
            <img
              src="HTML_logo.svg"
              className="brand-logo"
              alt="Html"
              title="Html"
            />
          </a>
          <a href="https://www.w3schools.com/css" target="_blank">
            <img
              src="CSS_logo.svg"
              className="brand-logo"
              alt="Css"
              title="Css"
            />
          </a>
          <a href="https://www.w3schools.com/js" target="_blank">
            <img
              src="JavaScript.svg"
              className="brand-logo"
              alt="JavaScript"
              title="JavaScript"
            />
          </a>
        </div>
        <div>
          <a href="https://react.dev" target="_blank">
            <img
              src="React.svg"
              className="brand-logo"
              alt="ReactJs"
              title="ReactJs"
            />
          </a>
          <a href="https://redux-toolkit.js.org" target="_blank">
            <img
              src="Redux.svg"
              className="brand-logo"
              alt="ReduxJs/Toolkit"
              title="ReduxJs/Toolkit"
            />
          </a>
        </div>
        <div>
          <a href="https://getbootstrap.com" target="_blank">
            <img
              src="Bootstrap.svg"
              className="brand-logo"
              alt="Bootstrap"
              title="Bootstrap"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img
              src="Tailwind.svg"
              className="brand-logo"
              alt="TailwindCss"
              title="TailwindCss"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank">
            <img
              src="Sass logo.svg"
              className="brand-logo"
              alt="Sass"
              title="Sass"
            />
          </a>
        </div>
        <div>
          <a href="https://nodejs.org" target="_blank">
            <img
              src="Node.js.svg"
              className="brand-logo"
              alt="NodeJs"
              title="NodeJs"
            />
          </a>
          <a href="https://www.mongodb.com" target="_blank">
            <img
              src="MongoDB.svg"
              className="brand-logo"
              alt="MongoDB"
              title="MongoDB"
            />
          </a>
          <a href="https://expressjs.com" target="_blank">
            <img
              src="express.js.svg"
              className="brand-logo"
              alt="ExpressJs"
              title="ExpressJs"
            />
          </a>
        </div>
      </section>
      <div className="heading">
        <span className="html-tags top-tag">{`<h3>`}</span>
        <h3>With More Than One Year Of Experience.</h3>
        <span className="html-tags bottom-tag">{`</h3>`}</span>
      </div>
    </section>
  );
}

export default Services;
