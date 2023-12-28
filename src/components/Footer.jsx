import React from "react";

function Footer() {
  return (
    <footer id="contact">
      <div>
        <img src="Logo.svg" alt="GE Logo" width="54px" />
        <span>
          <p>
            GE
            <br />
            All rights are reserved &copy;.
          </p>
        </span>
      </div>
      <div>
        <p>
          Visit
          <br /> Our Github Repo.
        </p>
        <a href="https://www.github.com/gems2004" target="_blank">
          <img
            src="github_logo.svg"
            alt="Github Logo"
            width="54px"
            height="54px"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
