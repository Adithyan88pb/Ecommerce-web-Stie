import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Logout from "../Components/LogOut/Logout";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ecommerce-web-Stie" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
