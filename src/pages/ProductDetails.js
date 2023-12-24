// Import Statement
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productList from '../assets/products/products';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({})
  const location = useLocation();
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
    </section>
  );
};

export default ProductDetails;
