
import React from "react";
import "./OverlayMenu.css"; // Import external CSS
import { Link, useNavigate } from "react-router-dom";

const OverlayMenu = ({ reference, setMenuOpen, menuOpen }) => {
  const navigate = useNavigate();
  const handleLinkClick = (link) => {
    setMenuOpen(false);
  };


  const handleChange = e => {
    const value = e.target.value

    if (value === 'about')
      navigate('/about')
    else
      navigate('/')
  }
  return (
    <div className="overlay-container">
      <div className="overlay-sub-container" ref={reference}>
        <div className="overlay">
          <ul className="menu">
            <select className="dropdown" onChange={handleChange} style={{fontSize:"16px"}}>
              <option value="">Company</option>
              <option value="about">About</option>
            </select>
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
