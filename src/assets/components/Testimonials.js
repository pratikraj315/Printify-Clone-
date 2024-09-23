import React from 'react';
import Slider from 'react-slick'; // Import the slider component
import './Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert A. Voltaire",
      role: "Store link",
      image: "path-to-robert-image.jpg",
      rating: 5,
      review: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!"
    },
    {
      name: "Quinten Barney",
      role: "Etsy Merchant",
      image: "path-to-quinten-image.jpg",
      rating: 5,
      review: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better."
    },
    {
      name: "Nikki",
      role: "Store link",
      image: "path-to-nikki-image.jpg",
      rating: 5,
      review: "Printify has been a amazing service! As we grow our business, finding solutions we can make for our customers. Customer Service team makes the whole process a breeze."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Shows one testimonial at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Adjust for smaller screens
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>Trusted by over 8M sellers around the world</h2>
        <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
