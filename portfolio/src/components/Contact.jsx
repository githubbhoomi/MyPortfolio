import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <section className="contact-section">

      {/* Floating Social Bar */}
      <div className="floating-social">

        <a href="https://github.com/githubbhoomi" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:bhoomikabhoomi9645@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/917795228752"
          target="_blank"
        >
          <FaWhatsapp />
        </a>

      </div>

      <div className="contact-container">

        <h4>Contact Me</h4>

        <h1>Let's <span>Connect</span></h1>

        <p>
          Feel free to reach out for internships, collaborations or projects.
        </p>

        {/* Contact Cards */}
        <div className="contact-cards">

          {/* Email */}
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p onClick={() => copyToClipboard("bhoomikabhoomi9645@gmail.com")}>
              bhoomikabhoomi9645@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <p onClick={() => copyToClipboard("7795228752")}>
              7795228752
            </p>
          </div>

          {/* GitHub */}
          <div className="contact-card">
            <FaGithub className="icon" />
            <h3>GitHub</h3>
            <a href="https://github.com/githubbhoomi" target="_blank">
              github.com/githubbhoomi
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-card">
            <FaLinkedin className="icon" />
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com" target="_blank">
              linkedin.com/in/profile
            </a>
          </div>

        </div>

        {/* WhatsApp Button */}
        <div className="whatsapp-btn">
          <a
            href="https://wa.me/917795228752"
            target="_blank"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
};

export default Contact;