import React, { useState } from "react";
import "./Navbar.css";
import chevron from "./chevron.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // tesdt

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("open");
  };

  return (
    <nav className="navbar">
      <button onClick={toggleMenu} className="burger"></button>
      <h1>J</h1>
      <div className={`dropdowns ${menuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button>
            Services
            <img src={chevron} alt="chevron" />
          </button>
          <div className="dropdown-menu">
            <button>UX/UI Design</button>
            <button>Web Applications</button>
            <button>SEO Advice</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Products
            <img src={chevron} alt="chevron" />
          </button>
          <div className="dropdown-menu">
            <button>Learn CSS Ebook</button>
            <button>Security Course</button>
            <button>Masterclass Bundle</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Support
            <img src={chevron} alt="chevron" />
          </button>
          <div className="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
