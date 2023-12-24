// Import Statement
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productList from '../assets/products/products';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../assets/css/ProductDetails.css'



const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({})
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  let currentPath = location.pathname.split('/')
  useEffect(() => {
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
      if (currentPath[2] === element.productSeoUrl) {
        console.log("element", element);
        setProductDetail(element);
      }
    }
  }, [])

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };



  return (
    <section className='cm-section'>
      <HelmetProvider>
        <Helmet>
          <title>{`${productDetail.productName} - CD Store`}</title>
          <meta name="description" content={`Shop ${productDetail.productName} - ${productDetail.desc}`} />
          <meta property="og:title" content={productDetail.productName} />
          <link rel="canonical" href={productDetail.proImg} />
        </Helmet>
      </HelmetProvider>
      <div className="container mt-3">
        <div className="card product-card">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={productDetail.proImg}
                alt="Product"
                className="img-fluid rounded-start"
              />
              <div className="product-images">
                {productDetail.images && productDetail.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${productDetail.id} Image ${index + 1}`}
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
              {lightboxOpen && productDetail.images && (
            <Lightbox
              mainSrc={productDetail.images[photoIndex]}
              nextSrc={productDetail.images[(photoIndex + 1) % productDetail.images.length]}
              prevSrc={productDetail.images[(photoIndex + productDetail.images.length - 1) % productDetail.images.length]}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + productDetail.images.length - 1) % productDetail.images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % productDetail.images.length)}
              imageLoadErrorMessage="Unable to load the image"
              toolbarButtons={[
                <button key="closeButton" type="button" className="btn btn-light" onClick={closeLightbox}>
                  Close
                </button>
              ]}
            />
          )}
          </div>

          <div className="col-md-4 m-auto">
            <div className="card-body">
              <h2 className="card-title">{productDetail.productName}</h2>
              <p className="card-text">
                {productDetail.desc}
              </p>
              <div className="d-flex align-items-center justify-content-center my-3">
                <div className="pro-price">{"Price $" + productDetail.offPrice}</div>
                <div className="pro-org-price">{"$" + productDetail.proPrice}</div>
                <div className="pro-off">{productDetail.offPercentage + "off"}</div>
              </div>
              <button className="prm-btn">Click To Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
};

export default ProductDetails;
