import React from 'react'

export default function Img({props}) {
  return (
      <div className="img-container">
          <img src={require('../photo1.png')} alt="" />
    </div>
  )
}
