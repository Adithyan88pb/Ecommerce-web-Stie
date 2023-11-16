import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    // <header classNameName="header">
    //   <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
    //     <h1>VG Shop</h1>
    //   </Link>

    //   <Link to="/logout">
    //     <button classNameName="logout-button">Log Out</button>
    //   </Link>
    // </header>
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <a href="">
              <img
                src="https://i.ibb.co/kDVwgwp/logo.png"
                alt="RedStore"
                width="125px"
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
          </ul>
        </nav>
        <a href="">
          <img
            src="https://i.ibb.co/PNjjx3y/cart.png"
            alt=""
            width="30px"
            height="30px"
          />
        </a>
        <img
          src="https://i.ibb.co/6XbqwjD/menu.png"
          alt=""
          class="menu-icon"
          onclick="menutoggle()"
        />
      </div>
    </div>
  );
}

export default Header;
