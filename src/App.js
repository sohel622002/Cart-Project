import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([
    {
      id: 5000,
      name: "Redmi Note 12 Pro",
      price: 5000,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYByvy-Wlu2DxToLahxc3Sf13dGeERPvx4Uae7befWA&s",
      contaty: 0,
    },
  ]);
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
