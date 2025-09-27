import React from "react";
import Main from "./Main";
import Products from "./products";
import Footer from "./footer";
const Home=({addToCart})=>{
    return(
        <>
          <Main/>
          <Products addToCart={addToCart} />
        
          
        </>
    )
}
export default Home