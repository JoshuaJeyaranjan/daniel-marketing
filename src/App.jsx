import React from "react";
import "./App.scss";
function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
             <a
              href="https://www.linkedin.com/in/danieljeyaranjan/"
              target="_blank"
              rel="noreferrer"
              
            >
        <img className="headshot" src="/headshot.avif" alt="Profile" />
            </a>
          
        </div>
        <div className="hero-right">
          <h1 className="hero__title">Daniel Jeyaranjan</h1>
          <p>
            “Marketing student with strong expertise in strategic marketing
            principles."
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bottom-section">
        {/* About Section */}
        <div className="about">
          <h2 className="about__title">About</h2>
          <p className="about__text">
I’m a Bachelor of Commerce student majoring in Marketing at Humber College with four years of experience as a Brand Ambassador and Representative. I’ve worked with leading companies like Nespresso, Sonos, Allstate, and the YMCA at events, expos, and pop-up activations. My expertise lies in customer engagement, relationship building, and translating product knowledge into memorable brand experiences. With a strong academic foundation and hands-on industry exposure, I’m eager to grow into a marketing career focused on strategy and brand development.

          </p>
        </div>

        {/* Get in Touch Section */}
        <div className="get-in-touch">
          <h2 className="contact-title">Get in Touch</h2>
          <ul className="contact-links">
            <li>
              <a className="contact-link" href="mailto:danieljeyaranjan01@gmail.com">
                <p className="contact-text">Email</p>
                <img
                  className="social-logo"
                  src="/email.svg"
                  alt="Email"
                />
              </a>
            </li>
            <li>
              <a className="contact-link" href="tel:+16479015561">
                <p className="contact-text">Phone</p>
                <img
                  className="social-logo"
                  src="/phone.svg"
                  alt="Phone"
                />
              </a>
            </li>
            <li>
              <a className="contact-link" href="sms:+16479015561">
                <p className="contact-text">Text</p>
                <img
                  className="social-logo"
                  src="/speech-bubble.svg"
                  alt="Text"
                />
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="socials">
   
            <a
              href="https://www.facebook.com/profile.php?id=100069948514362"
              target="_blank"
              rel="noreferrer"
              className="social-icon facebook"
            >
              <img
                className="social-logo"
                src="/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://x.com/DanielJeyaran"
              target="_blank"
              rel="noreferrer"
              className="social-icon twitter"
            >
              <img className="social-logo" src="/x.svg" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/danieljeyaranjan/"
              target="_blank"
              rel="noreferrer"
              className="social-icon linkedin"
            >
              <img
                className="social-logo"
                src="/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
