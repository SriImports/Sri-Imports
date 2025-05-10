import React from 'react';
import './AboutContactSection.css';
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const AboutUsSection = () => {
  return (
    <section className="aboutus-section">
      <div className="aboutus-content">
        <h2>About Us</h2>
        <p>
          We are passionate about delivering the finest flooring solutions to transform your space into a statement of style and comfort. With years of expertise and a commitment to quality, we help bring your vision to life.
        </p>

        <div className="aboutus-contact-info">
          <h3>Contact Information</h3>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaPhone /> +61 405 555 358</p>
          <p><FaPhone /> (03) 9799 44 66</p>
        </div>

        <div className="aboutus-location-details">
  <h4>SHOWROOM</h4>
  <p>
    <a
      href="https://www.google.com/maps/place/6%2F260-276+Abbotts+Rd,+Dandenong+South+VIC+3175,+Australia"
      target="_blank"
      rel="noopener noreferrer"
    >
      6/260–276, Abbotts Road, Dandenong South, VIC – 3175
    </a>
  </p>

  <h4>WAREHOUSE</h4>
  <p>
    <a
      href="https://www.google.com/maps/place/12%2F410-418+Princes+Hwy,+Noble+Park+North+VIC+3174,+Australia"
      target="_blank"
      rel="noopener noreferrer"
    >
      12/410–418, Princess Highway, Noble Park North, VIC – 3174
    </a>
  </p>
</div>


        <div className="aboutus-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="tel:+1234567890"><FaPhoneAlt /></a>
        </div>
      </div>

      <div className="aboutus-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12589.297778790963!2d145.2075395!3d-38.0159185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63b6310e13c07%3A0xf17c5c2d3ae92897!2s6%2F260-276%20Abbotts%20Rd%2C%20Dandenong%20South%20VIC%203175%2C%20Australia!5e0!3m2!1sen!2sin!4v1715378796557!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default AboutUsSection;
