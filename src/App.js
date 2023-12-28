// import required Modules
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
// import required Files
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Footer from './pages/Footer';
import PageNotFound from "./pages/404Page";
// import img_3 from './assets/images/image-3.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HashRouter basename='/'> */}
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:seoUrl" element={<ProductDetails />} />
          {/* Add routes for other pages as needed */}
          <Route path="notfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
        <Footer />
        {/* </HashRouter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
