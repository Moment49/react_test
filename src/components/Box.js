import React from 'react'
import './style.css'

const Box = ({foods}) => {
  return (
    <div className='box'>
      <h1>Elvis {foods[4].foodname}</h1>
    </div>
  )
}

export default Box
