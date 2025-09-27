import react from 'react'
import img1 from '../assets/im1.jpeg'
import img2 from '../assets/im2.jpeg'
import img3 from '../assets/im3.webp'
import img4 from '../assets/im4.jpeg'
import Footer from './footer'
const About =()=>{

    return(
        <>
            <div className="container">
                <div className="row pt-3">
                    
                          <h1 className='mt-5 fs-1 text-center'>About Us</h1>
                          <hr />
                          <p>orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
                          <h3 className='my-4 text-center'>Our Products</h3>
                          <div className="row ">
                              <div className="text-center col-md-6 col-lg-3">
                                 <img src={img1} className="card-img-top" alt="" />
                                 <div className="card-body border border-1">
                                        <h5 className='mt-3' >Mens's Clothing</h5>
                                 </div>
                               </div>
                                <div className="text-center col-md-6 col-lg-3">
                                 <img src={img2} className="card-img-top" alt="" />
                                 <div className="card-body border border-1">
                                        <h5 className='mt-3'>Women's Clothing</h5>
                                 </div>
                               </div>
                                <div className="text-center col-md-6 col-lg-3">
                                 <img src={img3} className="card-img-top" alt="" />
                                 <div className="card-body border border-1">
                                        <h5 className='mt-3'>Jewelery</h5>
                                 </div>
                               </div>
                                <div className=" text-center col-md-6 col-lg-3">
                                 <img src={img4} className="card-img-top" alt="" />
                                 <div className="card-body border border-1">
                                        <h5 className='mt-3'>Electronics</h5>
                                 </div>
                               </div>
                          </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;
