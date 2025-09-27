import react from "react";
import Footer from "./footer";
const Contact=()=>{
    return(
        <> 
                <div className="container mt-5">
                     <div className="row">
                        <div className="">
                            <h1 className="text-center">Contact Us</h1>
                        <hr />

                        <form  className="text-center " action="">
                            <label className="text-start ps-0  mb-2 w-25" htmlFor="Name">Name</label><br />
                            <input placeholder="Entar Your Name" className="w-25 border rounded-1 mb-4 ps-3 py-1" type="text" name="Name" id="Name" /> <br />
                            <label htmlFor="email" className="mb-2 text-start ps-0 w-25">Email</label><br />
                            <input className="w-25 mb-4 ps-3 py-1 border rounded-1" type="email" name="email" id="email" placeholder="name@example.com" /><br />
                            <label className="text-start ps-0 w-25 mb-2" htmlFor="message">Message</label> <br />
                            {/* <input className="w-25 mb-4 ps-3 py-1" type="message"  name="messsage" id="message"/> <br /> */}
                            <textarea name="message" rows={5} placeholder="enter your message" className="w-25 ps-3 border rounded-1" id="message"></textarea><br />
                            <button className="btn btn-secondary mt-3" type='submit'>Submit</button>

                        </form>

                        </div>
                     </div>
                    </div>  
                    <Footer/>     
         </>
    )
}

export default Contact;
