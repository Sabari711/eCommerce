// Import styles
import "../assets/css/AboutUs.css";
import "../App.css";

// import required modules
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// import required Images
import about_us_img from "../assets/images/about-us-banner.png";
import history from "../assets/images/history.png";
import teamMem1 from "../assets/images/team-member-1.png";
import teamMem2 from "../assets/images/team-member-2.png";
import configData from "../config/config";
import logo from "../assets/images/brand-logo.png";

const AboutUs = () => {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>CD Store - About Us</title>
          <meta
            name="description"
            content="We offer game art outsourcing, VFX outsourcing, interactive media, and 3D product design for ecommerce. Our passion for innovation drives us to deliver exceptional experiences."
          />
          <meta name="keywords" content="About Us CD Store" />
          <meta name="author" content="CD Store Inc." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="CD Store - About Us" />
          <meta
            property="og:description"
            content="We offer game art outsourcing, VFX outsourcing, interactive media, and 3D product design for ecommerce. Our passion for innovation drives us to deliver exceptional experiences."
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" href={configData.frontEndUrl + "about-us"} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CD Store - About Us" />
          <meta
            name="twitter:description"
            content="We offer game art outsourcing, VFX outsourcing, interactive media, and 3D product design for ecommerce. Our passion for innovation drives us to deliver exceptional experiences."
          />
          <meta name="twitter:image" content={logo} />
          <link rel="canonical" href={configData.frontEndUrl + "about-us"} />
        </Helmet>
      </HelmetProvider>

      <section className="banner-section">
        <div className="col-lg-12 col-sm-12 col-12">
          <div className="banner-img">
            <img
              src={about_us_img}
              title="About us banner"
              alt="banner-image"
            />
          </div>
        </div>
      </section>
      <section></section>
      <section className="about-us-content  bg-img">
        <section class="cm-section">
          <div className="container">
            <h1>About Us</h1>
            <div className="col-lg-12 col-sm-12 row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12">
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <img src={history} title="History" alt="history" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                <h3 className="text-center mb-2">History</h3>
                <p className="mb-2">
                  Centaur Digital stands at the forefront as a premier content
                  development company committed to enhancing the entertainment
                  landscape within the vibrant realms of video games, Augmented
                  Reality (AR), and 3D technology. Our unyielding dedication to
                  innovation drives us to offer outstanding services designed to
                  enthrall and captivate audiences.
                </p>
                <p className="mb-3">
                  We offer game art outsourcing, VFX outsourcing, interactive
                  media, and 3D product design for ecommerce. Our passion for
                  innovation drives us to deliver exceptional experiences.
                </p>

                <h3 className="text-center mb-2">Our Value</h3>
                <p className="mb-2">
                  We believe that our values and ethics are the core to all our
                  services which is why we can provide high-quality services to
                  all our clients.
                </p>
                <p className="mb-3">
                  Our 5 values define our company and we want you to know what
                  we stand for, what we understand about your business and how
                  we believe that this process works best for you. We pride
                  ourselves in offering our clients the quality and results
                  their game needs. These core values are actively present in
                  our team members and our services at Centaur Digital. These
                  values determine who we are and how we measure success.
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="cm-section">
          <div className="container">
          <div data-aos="zoom-out-up">
            <h2>About Us</h2>
            <p class="container-text">
              Welcome to OurCompany, your go-to destination for high-quality
              products. Established in 2023, we pride ourselves on delivering
              top-notch customer service and a wide range of products to meet
              your needs.
            </p>
          </div>
          
          <div data-aos="zoom-out-up">
            <div className="team-section">
              <h3>Our Team</h3>
              <div className="team-member">
                <img src={teamMem1} alt="Team Member 1" />
                <p>John Doe - CEO</p>
              </div>
              <div className="team-member">
                <img src={teamMem2} alt="Team Member 2" />
                <p>Jane Smith - CTO</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="vision-mission">
              <h3>Vision & Mission</h3>
              <p class="container-text">
                Our vision is to provide exceptional products that enhance the
                lives of our customers. We are on a mission to continually
                innovate and exceed expectations, ensuring customer satisfaction
                and loyalty.
              </p>
            </div>
          </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
