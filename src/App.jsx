// src/App.js
import React, { useState } from "react";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import PaymentPage from "./components/PaymentPage";

function App() {
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  const goToPaymentPage = () => setIsPaymentPage(true);
  const returnToShopping = () => setIsPaymentPage(false);

  return (
    <div className="App p-8 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Online Shoe Store</h1>
  {isPaymentPage ? (
    <PaymentPage returnToShopping={returnToShopping} />
  ) : (
    <div className="flex justify-between gap-8">
      <ShoeList />
      <Cart goToPaymentPage={goToPaymentPage} />
    </div>
  )}
</div>

  );
}

export default App;
