import Img from "./Img"
import Counter from "./counter"
import React from 'react'

export default function CartItem() {
  return (
    <div className="cart-item-container">
      <Img></Img>
      <div className="cart-item-content">
        <div className="cart-item-content-inside">
          <h4>Vintage Backbag</h4>
                  <span className="orange-price">$54.99</span>
                  <span className="normal-price">$94.99</span>
                  
        </div>
        <Counter></Counter>
      </div>
    </div>
  );
}
