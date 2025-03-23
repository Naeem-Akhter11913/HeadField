import React from "react";
import "./BrandingWorks.css";

const BrandingWorks = () => {
  return (
    <div className="container">
      <section className="process">
        <h2>Process</h2>
        <p>
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at.
          Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
          blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit
          a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, 
          tellus blandit.
        </p>
      </section>

      <section className="branding-works">
        <h2>Branding Works</h2>
        <div className="card-container">
          {[1, 2, 3].map((item, index) => (
            <div className="card" key={index}>
              <div className="image-placeholder"></div>
              <h3>Creative landing page</h3>
              <a href="#" style={{textAlign:'start'}} >Read more <span style={{
                border:"1px solid white",
                height:"30px",
                borderRadius:'50%',
                padding:'1px'
              }}>→</span></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandingWorks;
