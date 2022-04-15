import React from 'react'
import Input from "./Input";
import Cart from "./Cart"
export default function Main() {
  return (
    <div className="main">
      <div className="all-input-container">
        <h4>Contact information</h4>
        <Input name="E-mail" placeholder="Enter your email...">
          <i className="fa-solid fa-envelope"></i>
        </Input>
        <Input name="Phone" placeholder="Enter your phone ...">
          <i className="fa-solid fa-phone"></i>
        </Input>

        <h4>Shipping address</h4>
        <Input
          name="Full name"
          placeholder="Enter your name..."
          value="Rodney Cotton"
        >
          <i className="fa-solid fa-user"></i>
        </Input>
        <Input name="Address" placeholder="Enter your address...">
          <i className="fa-solid fa-house"></i>
        </Input>

        <Input name="City" placeholder="Enter your city...">
          <i className="fa-solid fa-city"></i>
        </Input>

        <div className="fifty">
          <div className="select-container">
            <label for="cars">Country</label>
            <select name="cars" id="cars" className=" input fif">
              <option value="volvo" className=" input-container">
                India
              </option>
              <option value="saab" className=" input-container">
                Sri Lanka
              </option>
              <option value="mercedes" className=" input-container">
                China
              </option>
              <option value="audi" className=" input-container">
                Bangladesh
              </option>
            </select>
            <div className="counter-sym select">v</div>
          </div>
          <div className=" w50 input-container">
            <label htmlFor="" className="">
              pincode
            </label>

            <input
              type="text "
              className="bor "
              placeholder="enter pincode..."
            />
          </div>
        </div>

        <a href="" className="button">
          checkout
        </a>
      </div>

      <div className="main-cart">
        <Cart />
      </div>
    </div>
  );
}
