import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navigation/Navbar';
import Products from './components/Products';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Pizza from '../src/components/images/pizza.jpg';
import Fruits from '../src/components/images/fruits.jpg';
import Lemon from '../src/components/images/lemon.jpg';
import Salad from '../src/components/images/eggsalad.jpg';
import Fishes from '../src/components/images/fishes.jpg';
import Ice from '../src/components/images/ice.jpg';
import ProductDetails from './components/ProductDetails';

function App() {
      /*Create a food array */
      const foods = [
        {id:1, foodname: 'Pizza' , image: Pizza, price: '$5'},
        {id:2, foodname: 'Fruits' , image: Fruits, price: '$4'},
        {id:3, foodname: 'Lemon' , image:Lemon, price: '$10'},
        {id:4, foodname: 'Salad' , image: Salad, price: '$6'},
        {id:5, foodname: 'Fishes' , image: Fishes, price: '$2'},
        {id:6, foodname: 'Ice Cream' , image: Ice, price: '$22'},
        {id:7, foodname: 'Pizza' , image: Pizza, price: '$5'},
        {id:8, foodname: 'Fruits' , image: Fruits, price: '$4'},
        {id:9, foodname: 'Lemon' , image:Lemon, price: '$10'},
        {id:10, foodname: 'Salad' , image: Salad, price: '$6'},
        {id:11, foodname: 'Fishes' , image: Fishes, price: '$2'},
        {id:12, foodname: 'Ice Cream' , image: Ice, price: '$22'}
    ]

  return (
    <div>
       <BrowserRouter>
          <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/products"element={<Products foods={foods}/>} />
          <Route path="/products/:name/:price" element={<ProductDetails foods={foods}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>   
    
    </div>
  );
}

export default App;
