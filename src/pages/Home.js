import React, { useState } from "react";
import "../CSS/Home.css";
import ProductCard from "../components/ProductCard/ProductCard";
import { useNavigate } from "react-router";

function Home({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const Products = [
    {
      id: 5000,
      name: "Redmi Note 12 Pro",
      price: 5000,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYByvy-Wlu2DxToLahxc3Sf13dGeERPvx4Uae7befWA&s",
      contaty: 0,
    },
    {
      id: 6000,
      name: "Redmi Note 11 Pro",
      price: 2000,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyGhbAHyRUoi7xBg0kSXurCu779_IxgrE7RtzuFxjJg&s",
      contaty: 0,
    },
    {
      id: 7000,
      name: "Redmi Note 10 Pro",
      price: 1000,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWi8LXRHbokxJ5hZY5pjVFl2A5R0wLQPozgr0H8h8XA&s",
      contaty: 0,
    },
  ];


  return (
    <div>
      <div className="main-header">
        <h1 className="header">Home</h1>
        <span className="cart-icon" onClick={() => navigate("/cart")}>
          <i class="fa-solid fa-cart-shopping"></i>
          <span className="cart-items">{cartItems.length}</span>
        </span>
      </div>
      <div className="prodducts">
        {Products.map((pro, index) => (
          <ProductCard
            key={pro.id}
            pro={pro}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
