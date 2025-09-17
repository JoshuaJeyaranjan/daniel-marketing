import React from "react";
import "./app.scss";
function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img className="headshot" src="/public/headshot.avif" alt="Profile" />
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
            I’m an ambitious marketing student with a passion for turning ideas
            into results. I thrive on learning, experimenting, and bringing
            creative strategies to life. Hardworking and curious, I’m always
            seeking ways to grow and make an impact. My goal? Combine creativity
            and strategy to deliver campaigns that truly connect.
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
                  src="/public/email.svg"
                  alt="Email"
                />
              </a>
            </li>
            <li>
              <a className="contact-link" href="tel:+16479015561">
                <p className="contact-text">Phone</p>
                <img
                  className="social-logo"
                  src="/public/phone.svg"
                  alt="Phone"
                />
              </a>
            </li>
            <li>
              <a className="contact-link" href="sms:+16479015561">
                <p className="contact-text">Text</p>
                <img
                  className="social-logo"
                  src="/public/speech-bubble.svg"
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
                src="/public/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://x.com/DanielJeyaran"
              target="_blank"
              rel="noreferrer"
              className="social-icon twitter"
            >
              <img className="social-logo" src="/public/x.svg" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/danieljeyaranjan/"
              target="_blank"
              rel="noreferrer"
              className="social-icon linkedin"
            >
              <img
                className="social-logo"
                src="/public/linkedin.svg"
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
