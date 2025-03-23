
import React from "react";
import "./OverlayMenu.css"; // Import external CSS
import { Link } from "react-router-dom";

const OverlayMenu = ({ reference, setMenuOpen, menuOpen }) => {
  const handleLinkClick = (link) => {
    console.log(`User clicked on: ${link}`);
    setMenuOpen(false); // Optional: Close the menu when a link is clicked
  };
  return (
    <div className="overlay-container">
      <div className="overlay-sub-container" ref={reference}>
        <div className="overlay">
          <ul className="menu">
            {/* <li><Link to="/company">Company</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">Resources</Link></li> */}
             <li><Link to="/company" onClick={() => handleLinkClick("Company")}>Company</Link></li>
            <li><Link to="/services" onClick={() => handleLinkClick("Services")}>Services</Link></li>
            <li><Link to="/about" onClick={() => handleLinkClick("Resources")}>Resources</Link></li>
          </ul>
        </div>
        <button
          className="close-btn menu-toggle"
          style={{ background: `${!menuOpen ? 'transparent' : 'linear-gradient(to right, black, #44236e)'}` }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default OverlayMenu;
