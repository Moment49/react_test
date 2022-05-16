import React from 'react'
import { Link } from 'react-router-dom';
import About from './About';
import Box from './Box';
import './style.css';



const Products = ({foods}) => {
  
  return (
    <div className='product-container'>
        <h1>Products Page</h1>
        <p>These are the list of available food</p>
     
     <div className='cards'>
        {
          foods && foods.map((food) => 
            <div className='card-box'>
              <Link to={`${food.foodname}/${food.price}`}>
                <div className='card-image'>
                  <img src={food.image} alt='image' />
                </div>
                <div className='card-content'>
                  <p>{food.foodname}</p>
                  <p className='pricecolor'>{food.price}</p>
                </div>
              </Link>
            </div>
          )   
        }
          
     </div>
     <Box foods = {foods}/>
   
    </div>
  )
}

export default Products

