import react from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
const Productdetails = ({ addToCart }) => {
    const parms = useParams()
    const parmsid = parms.id
    const [product, setproduct] = useState({})
    const usenavgate=useNavigate()

     const handleClick=()=>{
          usenavgate('/cart')
     }
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${parmsid}`)
            .then((res) => setproduct(res.data))
            .catch((error) => console.log('error in product details'))

    }, [parmsid])


    return (
        <>

            <div className="container-fluid h-100 ">
                <div className="row p-5">
                    <div className="card border-0 "  >
                        <div className="row ">

                            <img
                                style={{ height: '450px' }}
                                src={product.image}
                                alt={product.id}
                                className="col-md-6 img-fluid rounded-5"
                            />

                            <div className="card-body col-md-6 ">

                                <h3 className="card-title fw-bold">{product.category}</h3>
                                <p className="card-title my-4">{product.title}</p>
                                <p> <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"> </i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <span className="ms-2">{product.rating?.rate}</span>
                                </p>
                                <p className="fs-2">${product.price}</p>
                                <p className="card-text">{product.description}</p>

                                <div>

                                    <button onClick={()=>addToCart(product)} className="btn border border-1 border-dark  text-dark">Add to card</button>
                                    <button onClick={handleClick} className="btn btn-dark text-light mx-2 "> Go to card</button>
                                </div>



                            </div>

                        </div>
                    </div>




                </div>

            </div>
            <Footer/>
        </>
    )
}
export default Productdetails;
