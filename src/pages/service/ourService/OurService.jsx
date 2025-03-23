import React from "react";
import './OurService.css';


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
    }
];

const OurService = () => {
    return (
        <section className="our-service">
            <h2 className="our-service-title">Other services</h2>

            <div className="services-flex">
                {services.map((service, index) => (
                    <div className="service-cart" key={index}>
                        <img src={service.icon} alt={service.title} className="service-cart-icon" />
                        <h3 className="service-cart-title">{service.title}</h3>
                        <p className="service-cart-description">{service.description}</p>
                    </div>
                ))}
            </div>
            <button type="button" className="our-service-btn">go to home</button>
        </section>
    );
};

export default OurService;
