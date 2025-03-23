import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    company: "manam",
    image: "/assets/Frame (7).png",
    feedback:
      "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
  },
  {
    name: "Esther Howard",
    company: "Offmax",
    image: "/assets/Frame (8).png",
    feedback:
      "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
  },
  {
    name: "Arlene McCoy",
    company: "blooppixel",
    image: "/assets/Frame (9).png",
    feedback:
      "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor.",
  },
  {
    name: "Jane Cooper",
    company: "unpexel",
    image: "/assets/Frame (10).png",
    feedback:
      "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-sub-container" >
        <h2>Hear what our customers say :)</h2>
        <div className="tesomonial-button-container">
          <p className="tesomonial-button">{'<'}</p>
          <p className="tesomonial-button">{'>'}</p>
        </div>

      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
            <p className="feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
