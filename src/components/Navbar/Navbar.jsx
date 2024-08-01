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
      <div className={`dropdowns ${menuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button>
            Sites
            <img src={chevron} alt="chevron" />
          </button>
          <div className="dropdown-menu">
            <button>Best Buy</button>
            <button>Apple</button>
            <button>Walmart</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Components
            <img src={chevron} alt="chevron" />
          </button>
          <div className="dropdown-menu">
            <button>Login / Sign Up</button>
            <button>Security Course</button>
            <button>Credit Card</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Misc.
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
