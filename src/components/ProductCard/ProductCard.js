import React from "react";
import "./ProductCard.css";

function ProductCard({ pro, cartItem, cartItems, setCartItems, contaty }) {

  function updateCartProducts() {
    const dupProducts = [...cartItems];

    const products = dupProducts.filter((product) => product.id === pro.id);

    if (products.length > 0) {
      dupProducts.map((p) => {
        if (p.id === pro.id) {
          p.contaty += 1;
        }
      });
      setCartItems(dupProducts);
    } else {
      dupProducts.push(pro);
      setCartItems(dupProducts);
    }
  }

  function removeItemFromCart() {
    const dupProducts = [...cartItems];

    const products = dupProducts.filter((product) => product.id === pro.id);

    if (products.length == 0) return;

    let newProducts

    dupProducts.map((product) => {
      if (product.id === pro.id) {
        if (product.contaty == 0) {
          newProducts = dupProducts.filter((product) => product.id !== pro.id);
        } else {
          product.contaty -= 1;
        }
      }
      setCartItems(newProducts);
    });

    console.log(cartItems)
  }

  return (
    <div className="product-card">
      <img src={pro.imageSrc} />
      <div className="product-detail-container">
        <div className="product-details">
          <p className="product-name">{pro.name}</p>
          <p className="price">{pro.price}</p>
        </div>
        <div className="product-btns">
          {!cartItem ? (
            <button onClick={updateCartProducts}>Add To Cart</button>
          ) : null}
          {contaty ? <span>{contaty}</span> : null}
          <button onClick={removeItemFromCart}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
