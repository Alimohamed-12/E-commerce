import React from "react";
import { useNavigate } from "react-router-dom";


const Product=({data,addToCart})=>{
const navigate=useNavigate()



  const handleClick=()=>{
        navigate(`/productdetails/${data.id}`)

  }

    return(
        <> 
          <div  className="card "> 

           <div className="p-3">
               
                 <img style={{height:'180px'}} src={data.image} className="card-img-top " alt="no-photo" />
           </div>
           

            <div className="card-body p-0">
                <h5 className="card-title ">{data.category}</h5>
                <p  className="card-text px-2"> {data.title.substring(0, 22)}...</p>
                <hr className="w-100 bg-danger" />
                <h4 className="my-0" style={{fontSize:'17px'}}> $ {data.price}</h4>
                <hr />
                    <div className="my-3 ">
                         <button onClick={handleClick} className="btn btn-dark text-light mx-2 "> Buy Now</button> 
                         <button onClick={addToCart} className="btn btn-dark text-light">add to card</button>
                    </div>
            </div>
          </div>
        </>
    )
}
export default Product;

