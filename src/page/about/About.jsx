import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom';

const About = (item) => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Megahed Online Store</h1>
        
     
        <section className="about-section story-section">
          <h2>Our Story</h2>
          <p>
            Reda Online Store was founded in 2020 with a simple vision: to provide high-quality products and an exceptional shopping experience to customers everywhere. What started as a small local initiative quickly grew into a trusted national brand thanks to our dedication to quality and customer satisfaction.
          </p>
          <p>
            We believe that online shopping should be easy, secure, and enjoyable. Every step we take, from selecting our inventory to providing after-sales support, is guided by this core philosophy.
          </p>
        </section>


        <section className="about-section mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to be the leading online destination for modern products, offering a curated selection of accessories and goods that meet the needs of today’s fast-paced lifestyle. We strive to maintain competitive pricing without compromising on product excellence.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            To expand our reach globally and become synonymous with reliability, innovation, and trust in the e-commerce sector. We are committed to constantly evolving our offerings to stay ahead of market trends.
          </p>
        </section>

       
        <section className="about-section values-section">
          <h2>Our Core Values</h2>
          <ul className="values-list">
            <li><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
            <li><strong>Quality Assurance:</strong> We guarantee the durability and authenticity of all our products.</li>
            <li><strong>Innovation:</strong> Constantly seeking new and exciting items for our catalog.</li>
            <li><strong>Integrity:</strong> Conducting business with transparency and honesty.</li>
          </ul>
        </section>
        
      
        <div className="cta-section">
     
              <p>Ready to explore our collection?</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
