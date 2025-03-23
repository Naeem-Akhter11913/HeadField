import React from "react";
import "./WorkShowcase.css";

const WorkShowcase = () => {
  const works = [
    {
      category: "Website",
      title: "Creative landing page",
      image: "/assets/Frame (6).png",
    },
    {
      category: "Branding",
      title: "Creative Branding",
    },
    {
      category: "Development",
      title: "Automation, Advanced Level",
    },
    {
      category: "User Testing",
      title: "Creative landing page",
      image: "/assets/Frame (6).png",
      css: 'mt-188'
    },
    {
      category: "Digital Marketing",
      title: "Why We Collect User’s Data",
    },
    {
      category: "SEO",
      title: "How We Optimized Our SEO",
    },
  ];

  return (
    <section className="work-showcase">
      <div className="work-text">
        <h2 className="work-title">Some pieces of our work</h2>
        <p className="work-description">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
        </p>
        <button type="button" className="connect-button">SHOW MORE</button>
      </div>

      <div className="work-container">
        {works.map((work, index) => (
          <div key={index} className={`work-card  ${work.css && work.css}`} style={{height: work.category === 'Branding' && '134px'}}>
            {work.image && <img src={work.image} alt={work.title} className="work-image" />}
            <span className="work-category">{work.category}</span>
            <h3 className="work-heading">{work.title}</h3>
            <a href="#" className="read-more">Read more →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
