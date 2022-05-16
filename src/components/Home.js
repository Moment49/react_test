import React from 'react'
import './style.css';


function Home() {
/*Write any function here*/
let component = 'Homepage'
const handleClick = ()=>{
  
}
  return (
    <div className='homepage'>
      <div className='hero-container'>
          <div className='hero'>
          <h1>PLAN THE PERFECT WINTER TRIP</h1>
          <p>Easliy plan the ideal skip trip from home with the help of professionals</p>
          <a className='btn'>Get in Touch with {component}</a>
          <button onClick={handleClick}>Go to About</button>
          </div>
      </div>
      <div className='aboutme'>
        <div>
          <h3>Hello Elvis</h3>
        </div>
      </div> 


   
     
    </div>
  )
}

export default Home;
