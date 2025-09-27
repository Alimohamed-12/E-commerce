import react from "react";

const Checkout=()=>{
    return(
        <>
              <div className="container mt-5">
      <h2 className="text-center">Your Checkout</h2>
      <hr />
      <div className="row">
        <div className=' row col-md-8 col-lg-8'>
          <div className="parnet border border-1 p-3">
            <h2>Billing Adress</h2>
            <hr />
            <form action="#">
               <div className="d-flex">
                 <div className="w-50">
                    <label className="w-75" htmlFor="fname">First Name</label><br />
                    <input  className="w-75 border border-2 rounded-1 ps-2 py-1" type="text" id="fname" name="fname" />
                </div>
                <div className="w-50">
                    <label className="w-75" htmlFor="lname">Last Name</label><br />
                    <input className="w-75 border border-2 rounded-1 ps-2 py-1" type="text" id="lname" name="lname" />
                </div>
               </div>
               <div className="my-3">
                <label className="w-100" htmlFor="email">Email </label><br />
                <input className="w-100 border border-2 rounded-1 ps-2 py-1" placeholder="mohamed@gmail.com" type="email" name="email" id="email" />
               </div>
               <div>
                <label className="w-100" htmlFor="adress">Adress</label> <br />
                <input className="w-100 border border-2 rounded-1 ps-2 py-1" type="text" placeholder="2468 Suez Ca " />
               </div>
               <div className="my-3">
                <label className="w-100" htmlFor="adress">Adress 2 (Optional)</label> <br />
                <input  className="w-100 border border-2 rounded-1 ps-2 py-1" type="text" placeholder="Apartment or suite " />
               </div>
               
               <div className="w-100 d-flex justify-content-between">
                <div className="w-25">
                    <label className="w-100" htmlFor="country">Country</label> <br />
                     <select className="w-100 border border-2 rounded-1 ps-2 py-1" name="cars" id="country">
                         <option value="volvo">Egypt</option>
                         <option value="saab">Italia</option>
                         <option value="mercedes">Shina</option>
                          <option value="audi">Brazil</option>
                     </select>
                </div>
                <div className="w-25">
                    <label className="w-100" htmlFor="state"> State</label> <br />
                 <select className="w-100 border border-2 rounded-1 ps-2 py-1" id="state" >
                        <option value="male">Male</option>
                        <option value="Famle">Famle</option>
             
                    </select >
                </div>
                <div className="w-25">
                     <label className="w-100" htmlFor="Zip">Zip</label><br />
                     <input className="w-100 border border-2 rounded-1 ps-2 py-1" type="number" />
                </div>
               </div>
               <hr />
               <h3>payment</h3>
                 <div className="d-flex w-100 mt-3">
                 <div className="w-50 me-5">
                    <label className="w-75" htmlFor="nameCard">Name on card</label><br />
                    <input className="w-75 border border-2 rounded-1 ps-2 py-1" type="text" id="nameCard" name="nameCard" />
                </div>
                <div className="w-50">
                    <label className="w-75 " htmlFor="numbercard">Credit card number</label><br />
                    <input className="w-75 border border-2 rounded-1 ps-2 py-1" type="text" id="numbercard" name="numbercard" />
                </div>
               </div>
               <p className="fs-6">Full name as displayed on card</p>
                <hr />
                <div>
                    <button className="text-center w-100 btn btn-secondary">Continue to Checkout</button>
                </div>

            </form>
          </div>
        </div>
        {/* <div className='col-md-2 col-lg-4'>
         <div className='border border-1 '>
             <h2 className='fs-4 ps-2'>Order Summary</h2>
             <hr />
             <p className='px-3 d-flex justify-content-between'><span>product ({totalquinty})</span> <span className='totla-price '>${totalPrice}</span></p>
             <p className='px-3 d-flex justify-content-between'><span>shipping</span> <span className='shopping'>$30</span></p>
             <hr />
             <h4 className='px-2'><span>Total amount</span> <span className=' totalamo'>${totalamount}</span></h4>
         </div>
        </div> */}
      </div>
    </div>
        </>
    )
}
export default Checkout;
