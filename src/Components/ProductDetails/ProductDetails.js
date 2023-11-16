import React, { useEffect, useState } from "react";
import { getProductId } from "../../ApiService/API";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
function ProductDetails() {
  const [productdetails, setProductDetails] = useState({});
  const { id } = useParams();

  // ProductDetails Id function----------
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);

  const handleBuyNow=()=>{
    window.confirm("The Product is out of stock!")
  }
  return (
    <div className="product-details-container">
      <img src={productdetails.image} alt="image" className="products-image" />
      <div className="product-info">
        <h2 className="product-title">{productdetails.title}</h2>
        <p className="product-descripiton">{productdetails.description}</p>
        <p className="product-pirce">${productdetails.price}</p>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/">
          <button className="go-back-home">Go back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
