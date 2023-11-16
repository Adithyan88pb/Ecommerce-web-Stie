import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../ApiService/API";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  // useState Function1------------
  const [products, setProducts] = useState([]);

  // useEffect function1-------
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="image" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>
            <button>Prouduct Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
