import React from "react";
import "./WhyChooseUs.css"; // Import external CSS

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="image-container">
        <img src="/assets/searching-2194247-0.png" alt="Why Choose Us" className="choose-us-image" />
      </div>
      <div className="content">
        <h2 className="title">Why choose us</h2>
        <p className="description">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. 
          Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
        <button className="connect-button">LET’S CONNECT</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;