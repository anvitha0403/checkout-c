import React from 'react'
import CartItem from './CartItem'
export default function Cart() {
  return (
    <div className="cart">
      <CartItem />
      <CartItem />
   
      {/* <CartItem/> */}
      {/* <CartItem/> */}
      <div className="cart-summary-container">
        <div className="cart-summary">
          <span className="cart-sum-title">Shipping</span>
          <span className="cart-sum-amount">$19</span>
        </div>
        <div className="cart-summary">
          <span className="cart-sum-title">total</span>
          <span className="cart-sum-amount">$419</span>
        </div>
      </div>
    </div>
  );
}
