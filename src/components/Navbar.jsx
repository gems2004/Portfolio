import React, { useState } from "react";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="navbar">
        <img
          src="../public/Logo.svg"
          width={64}
          alt="GE Logo"
          draggable="false"
        />
        <ul className="nav-list">
          <li>
            <a href="#aboutUs">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        {menuIsOpen ? (
          <img
            src="/public/mobile/x-symbol.svg"
            className="nav-close nav-item"
            alt="Close Menu"
            onClick={() => setMenuIsOpen(false)}
            draggable="false"
          />
        ) : (
          <img
            src="../public/mobile/Hamburger.svg"
            className="nav-burger nav-item"
            alt="Hamburger Menu"
            onClick={() => setMenuIsOpen(true)}
            draggable="false"
          />
        )}
        <ul className={`nav-list-mobile ${menuIsOpen ? "open" : ""}`}>
          <li>
            <a href="#aboutUs" onClick={() => setMenuIsOpen(false)}>
              About us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="mailto:gems.co.2004@gmail.com"
              onClick={() => setMenuIsOpen(false)}
            >
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
