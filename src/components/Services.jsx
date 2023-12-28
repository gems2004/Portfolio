import React from "react";
import HtmlLogo from "../../public/HTML_logo.svg";
import CssLogo from "../../public/Css_logo.svg";
import JsLogo from "../../public/JavaScript.svg";
import ReactLogo from "../../public/React.svg";
import ExpressLogo from "../../public/express.js.svg";
import MongoLogo from "../../public/MongoDB.svg";
import NodeLogo from "../../public/Node.js.svg";
import ReduxLogo from "../../public/Redux.svg";
import TailwindLogo from "../../public/Tailwind.svg";
import BootstrapLogo from "../../public/Bootstrap.svg";
import SassLogo from "../../public/Sass logo.svg";

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
              src={HtmlLogo}
              className="brand-logo"
              alt="Html"
              title="Html"
            />
          </a>
          <a href="https://www.w3schools.com/css" target="_blank">
            <img src={CssLogo} className="brand-logo" alt="Css" title="Css" />
          </a>
          <a href="https://www.w3schools.com/js" target="_blank">
            <img
              src={JsLogo}
              className="brand-logo"
              alt="JavaScript"
              title="JavaScript"
            />
          </a>
        </div>
        <div>
          <a href="https://react.dev" target="_blank">
            <img
              src={ReactLogo}
              className="brand-logo"
              alt="ReactJs"
              title="ReactJs"
            />
          </a>
          <a href="https://redux-toolkit.js.org" target="_blank">
            <img
              src={ReduxLogo}
              className="brand-logo"
              alt="ReduxJs/Toolkit"
              title="ReduxJs/Toolkit"
            />
          </a>
        </div>
        <div>
          <a href="https://getbootstrap.com" target="_blank">
            <img
              src={BootstrapLogo}
              className="brand-logo"
              alt="Bootstrap"
              title="Bootstrap"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img
              src={TailwindLogo}
              className="brand-logo"
              alt="TailwindCss"
              title="TailwindCss"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank">
            <img
              src={SassLogo}
              className="brand-logo"
              alt="Sass"
              title="Sass"
            />
          </a>
        </div>
        <div>
          <a href="https://nodejs.org" target="_blank">
            <img
              src={NodeLogo}
              className="brand-logo"
              alt="NodeJs"
              title="NodeJs"
            />
          </a>
          <a href="https://www.mongodb.com" target="_blank">
            <img
              src={MongoLogo}
              className="brand-logo"
              alt="MongoDB"
              title="MongoDB"
            />
          </a>
          <a href="https://expressjs.com" target="_blank">
            <img
              src={ExpressLogo}
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
