// Import styles
import '../assets/css/ContactUs.css';

// import required modules
import React, { useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import required Images
import contact_us_img from '../assets/images/contact-us-banner.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '', // Clear the error for the current input field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { fullname: '', email: '', message: '' };

    // Validate fullname
    if (!formData.fullname.trim()) {
      formIsValid = false;
      newErrors.fullname = 'Please enter your full name';
    }

    // Validate email
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      formIsValid = false;
      newErrors.message = 'Please enter your message';
    }

    if (formIsValid) {
      setShowPopup(true);
      setFormData({ fullname: '', email: '', message: '' });
      setErrors({ fullname: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
            <title>CD Store - Contact Us</title>
            <meta name="description" content="We'd love to hear from you. Get in touch using the form below or via the contact information provided." />
            <meta name="keywords" content="Contact Us CD Store" />
            <meta name="author" content="CD Store Inc." />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="CD Store - Contact Us" />
            <meta property="og:description" content="We'd love to hear from you. Get in touch using the form below or via the contact information provided." />
            <meta property="og:image" content="https://example.com/images/CDStore-logo.png" />
            <meta property="og:url" content="https://www.CDStore.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="CD Store - Contact Us" />
            <meta name="twitter:description" content="We'd love to hear from you. Get in touch using the form below or via the contact information provided." />
            <meta name="twitter:image" content="https://example.com/images/CDStore-logo.png" />
            <link rel="canonical" href="https://www.CDStore.com" />
          </Helmet>
      </HelmetProvider>
      <section className='banner-section'>
        <div className='col-lg-12 col-sm-12 col-12'>
          <div className='banner-img'>
            <img src={contact_us_img} title='Contact us banner' alt='banner-image' />
          </div>
        </div>
      </section>

      <section className='contact-us-form-section cm-section'>

        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Get in touch using the form below or via the contact information provided.</p>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12 col-12 contact-info">

              <div class="row align-items-center ">
                <div class="col-1">
                  <div class="contact-info-icon ">
                    <FaMapLocationDot className='contact-ic' />
                  </div>
                </div>
                <div class="col-10">
                  <div class="contact-info-content address text-start ">
                    <h4>Address</h4>
                    <p>Pace Aagam Kaleesuwari Towers No 10-98A, 7th Floor,
                      Ranganathapuram Medavakkam Main Road, Chennai, Tamil Nadu,
                      600100</p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center ">
                <div class="col-1">
                  <div class="contact-info-icon ">
                    <IoCall className='contact-ic' />
                  </div>
                </div>
                <div class="col-10">
                  <div class="contact-info-content text-start ">
                    <h4>Phone</h4>
                    <p>571-457-2321</p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center ">
                <div class="col-1">
                  <div class="contact-info-icon ">
                    <MdOutlineMail className='contact-ic' />
                  </div>
                </div>
                <div class="col-10">
                  <div class="contact-info-content text-start ">
                    <h4>Email</h4>
                    <p>ntamerrwael@mfano.ga</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-sm-12 col-12 contact-form">
              <h2 class="mb-4">Send Message</h2>
              <form onSubmit={handleSubmit} >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    placeholder="Joe"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  <label htmlFor="fullname">Full Name</label>
                  <div className="error-msg">{errors.fullname}</div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="error-msg">{errors.email}</div>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control h-80"
                    placeholder="Leave a comment here"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}

                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="error-msg">{errors.message}</div>
                </div>

                <div className="input-box mt-3">
                  <button type="submit" className="prm-btn">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <section class="pop-us-section">
        {
          showPopup == true ? (
            <div className="modal " tabIndex="-1" style={{ display: showPopup ? 'block' : 'none' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div class="content">
                    <div class="wrapper-1">
                      <div class="wrapper-2">
                        <h1 class="mb-3">Thank you !</h1>
                        <p>Thanks for subscribing to our news letter. you should receive a confirmation email soon...  </p>
                        <br></br>
                        <div>
                        <a href='/' class="prm-btn">
                          go home
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : ("")
        }
      </section>
    </section>
  );
};

export default ContactForm;
