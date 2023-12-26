// Import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "../assets/css/swiper.css";

// import required modules
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";

// import required File
import productArray from "../assets/products/products";
import configData from "../config/config";

// import required Images
import bannerImgWeb from "../assets/images/call-of-duty-ghost-team-banner.jpg";
import bannerImgService from "../assets/images/god-of-war-ragnarok-hero-banner.jpg";
import baneerImgCreativity from "../assets/images/red-dead-redemption-2-banner.jpg";

const App = () => {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });
  console.log("productArray=====", productArray);

  return (
    <section>
      <HelmetProvider>
        <Helmet>
            <title>CD Store - PlayStation, XBox, Games and More | Free Shipping</title>
            <meta name="description" content="Shop the best deals on PlayStation, XBox, Games and More at CD Store. Free shipping on orders over $50. Explore our wide selection of products!" />
            <meta name="keywords" content="computers, gadgets, CD Store" />
            <meta name="author" content="CD Store Inc." />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="CD Store - PlayStation, XBox, Games and More | Free Shipping" />
            <meta property="og:description" content="Shop the best deals on PlayStation, XBox, Games and More at CD Store. Free shipping on orders over $50. Explore our wide selection of products!" />
            <meta property="og:image" content="https://example.com/images/CDStore-logo.png" />
            <meta property="og:url" content="https://www.CDStore.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="CD Store - PlayStation, XBox, Games and More | Free Shipping" />
            <meta name="twitter:description" content="Shop the best deals on PlayStation, XBox, Games and More at CD Store. Free shipping on orders over $50. Explore our wide selection of products!" />
            <meta name="twitter:image" content="https://example.com/images/CDStore-logo.png" />
            <link rel="canonical" href="https://www.CDStore.com" />
          </Helmet>
      </HelmetProvider>
      <div className="swiper-section banner-section mb-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={bannerImgWeb} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImgService} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={baneerImgCreativity} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home-content-section cm-section">
        <div className="container">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h1>Top 6 Games</h1>
          </div>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {productArray.map((data) => {
              return (
                <div data-aos="zoom-in">
                  <div className="col pb-4 h-100">
                    <div class="card h-100 ">
                      <img
                        class="card-img-top product-img"
                        src={data.proImg}
                        title={data.productName}
                        alt={data.productSeoUrl}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{data.productName}</h5>
                        <p class="card-text">{data.desc}</p>
                        {/* <a href={data.productSeoUrl} class="btn btn-primary">
                          Go somewhere
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="product-section cm-section">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <h1>Top Selling Games</h1>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {productArray.map((data) => {
              return (
                <div className="col mb-4">
                  <div class="card h-100">
                    <img
                      class="card-img-top product-img"
                      src={data.proImg}
                      title={data.productName}
                      alt={data.productSeoUrl}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{data.productName}</h5>
                      <p class="card-text">{data.desc}</p>
                      <div className="d-flex align-items-center justify-content-center my-2">
                        <div className="pro-price">{"$" + data.offPrice.toFixed(2)}</div>
                        <div className="pro-org-price">{"$" + data.proPrice.toFixed(2)}</div>
                        <div className="pro-off">{data.offPercentage + "off"}</div>
                      </div>
                      <div class="card-ft">
                        <a href={"/product/" + data.productSeoUrl} class="prm-btn">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
