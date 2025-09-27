import React, { useState } from 'react';
import Header from './component/Header';
import './App.css';
import Main from './component/Main';
import Home from './component/Home';
import Products from './component/products';
import Cart from './component/Cart';
import Signup from './component/register';
import Login from './component/login';
import Productdetails from './component/productdetails';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import About from './component/about';
import Footer from './component/footer';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
const App=()=>{

    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

  setCartItems(prevItems => {
    const isInCart = prevItems.some(item => item.id === product.id);
    if (isInCart) {
      alert("product is found");
      return prevItems;
    }
    return [...prevItems, product];
  });

  
};

  const removecart=(index)=>{
    const newitems=[...cartItems]
    newitems.splice(index,1)
    setCartItems(newitems)
  }
  return(
    <> 
       <BrowserRouter> 
                        <Header count={cartItems.length}/>
                       <Routes>
                              <Route path='/' element={<Home addToCart={addToCart} />}/>
                              <Route path='/main' element={<Main/>} />
                              <Route path='/signup' element={<Signup/>}/>
                              <Route path='/about' element={<About/>}/>
                              <Route path='/login' element={<Login/>}/>
                              <Route path='/products' element={<Products addToCart={addToCart} />} />
                              <Route path='/productdetails/:id' element={<Productdetails addToCart={addToCart} />}/>
                              <Route path='/cart' element={<Cart removecart={removecart}  cartItems={cartItems} />}/>
                             <Route path='/footer' element={<Footer />}/>
                             <Route path='/contact' element={<Contact/>}/>
                             <Route path='/checkout' element={<Checkout/>}/>
                             
                       </Routes>
        </BrowserRouter>     
    </>
  )
}
export default App;
