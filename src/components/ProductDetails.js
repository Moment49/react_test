import React from 'react'
import  './style.css';
import lemon from '../components/images/lemon.jpg'
import { useParams } from 'react-router-dom';

const ProductDetails = ({foods}) => {
    const {name, price} = useParams()
  return (
    <div className='card-detail'>
      Product Details
        <div className='card-detail-image'>
            <img src={lemon} alt='image' />
           
        </div>

        <div className='card-detail-content'>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ProductDetails
