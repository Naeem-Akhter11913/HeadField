import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Web development</a></li>
            <li><a href="#">Digital marketing</a></li>
            <li><a href="#">Mobile app</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">User testing</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case study</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section lasfooter" >
          <h3>Follow us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Figma</a></li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <div>
            <div className="logo">
              <img src="/assets/logo.png" alt="Shadient.co" />
              <span>Shadient.co</span>
            </div>
          </div>
          <p>Get latest updates</p>
          <div className="email-input">
            <input type="email" placeholder="Your email" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer