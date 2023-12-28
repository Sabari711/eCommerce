// import required Style
import "../assets/css/Footer.css";

// import required Modules
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import configData from "../config/config";

function Footer() {
  return (
    <>
      {/* <!-- Site footer --> */}
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                <i>Centaur Digital</i> stands at the forefront as a premier
                content development company committed to enhancing the
                entertainment landscape within the vibrant realms of video
                games, Augmented Reality (AR), and 3D technology. Our unyielding
                dedication to innovation drives us to offer outstanding services
                designed to enthrall and captivate audiences.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Address</h6>
              <ul class="footer-links">
                <li>
                    INDIA
                </li>
                <li>
                  Pace Aagam Kaleesuwari Towers No 10-98A, 7th Floor,
                  Ranganathapuram Medavakkam Main Road, Chennai, Tamil Nadu,
                  600100
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href={"/about-us"}>About Us</a>
                </li>
                <li>
                  <a href={"/contact-us"}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr> */}
        </div>
        <div class="container">
          <ul class="social-icons text-center my-3">
            <li>
              <a class="facebook" target="_blank" href="https://www.facebook.com/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a class="twitter" target="_blank" href="https://www.twitter.com/">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a class="youtube" target="_blank" href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a class="linkedin" target="_blank" href="https://in.linkedin.com/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div class="copy-right-section">
          <p class="copyright-text text-center">
            Copyright &copy; 2023 All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
