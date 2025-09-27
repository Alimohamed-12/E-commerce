import react from "react";
import { useState , useEffect   } from "react";
import axios from "axios";
import Product from "./product";
import Footer from "./footer";
const Products=({addToCart})=>{
    const [products , setproducts]=useState([])
    const [filter , setfilter]= useState([])

useEffect(()=>{
     axios.get('https://fakestoreapi.com/products/')
    .then((res)=> {
        setproducts(res.data)
        setfilter(res.data)
    } )
 .catch((error) => console.error("Error fetching products:", error));

},[])


const handlefilter=(category)=>{
   const updatefilter= products.filter((product)=> product.category === category)
   setfilter(updatefilter)


}




    return(
        <>
            <div className="container mt-5 ">
                <div className="px-5 cat">
                      <ul className="categories d-flex justify-content-between ">
                                        <li><button onClick={()=>setfilter(products)} className="btn border border-1 me-3">All</button></li>
                                        <li><button onClick={()=> handlefilter("men's clothing")} className="btn border border-1 me-3">man</button></li>
                                        <li><button onClick={()=> handlefilter("women's clothing")} className="btn border border-1 me-3">woman</button></li>
                                        <li><button onClick={()=> handlefilter("electronics")} className="btn border border-1 me-3">Electronics</button></li>
                                        <li><button onClick={()=> handlefilter("jewelery")} className="btn border border-1 me-3">Jewelery</button></li>
                                      </ul>


                </div>
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 justify-content-center text-center ">
             

                    {
                        filter.map((product)=> 
                           <div key={product.id} className=" g-4">
                                   
                                       <Product data={product} addToCart={()=> addToCart(product)}  />
                             </div>
                    )
                    }

                </div>
            </div>
           <Footer/>
        </>
    )
}
export default Products;




                 