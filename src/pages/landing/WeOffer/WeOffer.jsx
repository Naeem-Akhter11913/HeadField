import React from "react";
import "./WeOffer.css"; // Import external CSS

// Service data array
const services = [
  {
    title: "Branding",
    description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    icon: "/assets/Frame.png", // Replace with actual icon paths
  },
  {
    title: "Web development",
    description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    icon: "/assets/Frame (1).png",
  },
  {
    title: "Digital marketing",
    description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    icon: "/assets/Frame (2).png",
  },
  {
    title: "Mobile App",
    description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    icon: "/assets/Frame (3).png",
  },
  {
    title: "SEO",
    description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    icon: "/assets/Frame (4).png",
  },
  {
    title: "User testing",
    description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    icon: "/assets/Frame (5).png",
  },
];

const WeOffer = () => {
  return (
    <section className="we-offer">
      <h2 className="title">We Offer</h2>
      <p className="description">
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. 
        Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeOffer;
