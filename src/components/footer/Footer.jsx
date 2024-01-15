import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container grid grid-two-cols">
          <div class="footer-1--div">
            <h1>Get in Touch</h1>
            <div className="foot-email">
            <i class="fa-solid fa-envelope"></i>-
            <h3>musthashaik@gmail.com</h3>
        
            </div>
            <div className="foot-email">
            <i class="fa-solid fa-phone"></i>-
            <h3>+91-7799819037</h3>
            </div>
            
            
          </div>

          <div class="footer-2--div">
            <p class="footer-subheading">Social Media</p>
            <div class="social-footer--icons">
              <Link to="/" target="_blank" class="common-text--highlight">
              <i class="fa-brands fa-youtube"></i>
              </Link>
              <Link to="/" target="_blank" class="common-text--highlight">
              <i class="fa-brands fa-instagram"></i>
              </Link>

              <Link to="https://github.com/Shaik1339?tab=repositories" target="_blank" class="common-text--highlight">
              <i class="fa-brands fa-github fa"></i>
              </Link>

              <Link to="/" target="_blank" class="common-text--highlight">
              <i class="fa-brands fa-facebook"></i>
              </Link>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
