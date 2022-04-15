import React from 'react'

export default function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="">{props.name}</label>
      <div className="input">
        {props.children}
        <input type="text" placeholder={props.placeholder} value={ props.value}/>
      </div>
    </div>
  );
}
