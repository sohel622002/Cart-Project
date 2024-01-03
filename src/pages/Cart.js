import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import '../CSS/Cart.css'

function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-body">
        {cartItems.map((pro) => (
          <ProductCard pro={pro} cartItem={true} key={pro.id} contaty={pro.contaty}/>
        ))}
      </div>
    </div>
  );
}

export default Cart;
