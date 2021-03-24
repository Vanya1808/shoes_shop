import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the shop newsletter to receive our new shoes .
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time you want.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button buttonStyle="btn--outline">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Contact us</h2>
            <Link to="">Destinations</Link>
            <Link to="/">Sponsorships</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Videos</h2>
            <Link to="">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Social Media</h2>
            <Link to="">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Tellegram</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Nike <i className="fa fa-typo3" />
            </Link>
            <small class="website-rights">Vanya Goudz © 2021</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube"></i>
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
               
              >
                <i class="fab fa-twitter"></i>
              </Link>
              <Link
                class="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </Link>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
