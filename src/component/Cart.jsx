// import React, { useState } from 'react';

// const Cart = ({ cartItems }) => {
//   const [plus , setplus]=useState(0)

//   const handleplus=()=>{
//     setplus(plus+1)
//   }


//   if (cartItems.length === 0) {
//     return <h2 className="text-center mt-5">Your cart is empty</h2>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>
//       <div className="row ">


//        <div className='row col-md-8 col-lg-10 '>
//                        {cartItems.map((item, index) => (
//           <div key={index} >
//             <div className="d-flex justify-content-between align-items-center border border-1 rounded  p-3">
//               <img src={item.image} alt={item.title} style={{ height: '150px', objectFit: 'contain' }} />
//               <h5>{item.title}</h5>

//             <div>
//                  {/* <h6>Price: ${item.price}</h6> */}
//                  <div><span><i class="fa-solid fa-minus"></i></span> <span>{plus}</span> <span onClick={handleplus}><i class="fa-solid fa-plus"></i></span></div>
//             </div>
//             </div>
//           </div>


//         ))} 
//        </div>

//        {/* <div className='col-md-2 col-lg-2'>
//             am
//        </div> */}



//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from 'react';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
const Cart = ({ cartItems ,removecart}) => {
const usenavgate=useNavigate()

  const [quantities, setQuantities] = useState([]);

  useEffect(()=>{
    setQuantities(cartItems.map(()=> 1))
  },[cartItems])


const handleclick=()=>{
     usenavgate('/products')
}

  const handlePlus =(index)=>{
    const newquintes =[...quantities]
    newquintes[index] +=1
    setQuantities(newquintes)
  }


  const handleMinus = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
    else{
      removecart(index)
    }
  };

  if (cartItems.length === 0) {
    return ( <>
                 <div className="container text-center ">
                  <p className='fs-1 mt-5'>Cart</p>
                    <hr />
                     <h2 className="text-center mt-5">Your cart is empty</h2>
                      <button className='btn btn-danger text-white mt-5' onClick={handleclick}><i class="fa-solid fa-arrow-left"></i> Go shopping</button>
                      
             
                 </div>
                   <Footer/>
     </> 
       
    )
   
  }


 const totalquinty=quantities.reduce((acumulator,curentvalue)=> acumulator+curentvalue ,0)
  const totalPrice = Math.floor(cartItems.reduce((acc, item, index) => acc + (item.price * quantities[index]),0))
 const totalamount=totalPrice + 30
  
  return (
  <>

           <div className="container mt-5">
      <h2>Your Cart</h2>
      <div className="row">
        <div className='row col-md-8 col-lg-8'>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between align-items-center border border-1 rounded p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <h5 className='fonttile'>{item.title}</h5>
                <div className=' p-2'>
                  <div className='d-flex justify-center'>
                    <span onClick={() => handleMinus(index)} style={{ cursor: 'pointer' }}>
                      <i className="fa-solid fa-minus"></i>
                    </span>
                    <span className="mx-2">{quantities[index]}</span>
                    <span onClick={() => handlePlus(index)} style={{ cursor: 'pointer' }}>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                  <h6 className='mt-5'>  {quantities[index]} x ${item.price}</h6>
                </div>
              
              </div>
            </div>
          ))}
        </div>
        <div className='col-md-2 col-lg-4'>
         <div className='border border-1 '>
             <h2 className='fs-4 ps-2'>Order Summary</h2>
             <hr />
             <p className='px-3 d-flex justify-content-between'><span>product ({totalquinty})</span> <span className='totla-price '>${totalPrice}</span></p>
             <p className='px-3 d-flex justify-content-between'><span>shipping</span> <span className='shopping'>$30</span></p>
             <hr />
             <h4 className='px-2'><span>Total amount</span> <span className=' totalamo'>${totalamount}</span></h4>
             {/* <button>Go </button> */}
         </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Cart;
