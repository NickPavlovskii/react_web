import React from 'react';
import "./Footer.css";
import {  FaFacebookF, FaVk, FaYoutube} from 'react-icons/fa';
import {  AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai';


export const Footer = () => {
  return (
   <footer id="Footer" className='section-p1'>
       <div className="col">
        <img src="logo2.png" alt="" className='logo1'/>
        
        <h4>Contact</h4>
        <p> <strong>Address:</strong>  562 Wellington Road, Streat 32, San Francisco</p>
        <p> <strong>Phone:</strong> 8-988-362-07-22/8-981-613-17-18</p>
        <p> <strong>House:</strong>  10:00-19:00, mon-fr</p>
      
       <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              
           <i><a href=""><FaFacebookF/></a> </i>
           <i><a href="">< AiOutlineTwitter/></a> </i>
           <i><a href=""><  FaVk/></a></i> 
           <i><a href="">< AiOutlineInstagram/></a> </i>
           <i><a href="">< FaYoutube/></a></i>
           
            </div>
            </div>
       </div>
       <div className="col">
        <h4>About</h4>
        <a href="">About us</a>
        <a href="">Delivery Infomation</a>
        
        <a href="">Privacy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Contacr us</a>
       </div>
       
       <div className="col">
        <h4>My account</h4>
        <a href="">Sing in</a>
        <a href="">View cart</a>
        <a href="">My Wishlist</a>
        <a href="">Trock My Order</a>
        <a href="">Help</a>
       </div>
       <div className="col instal">
        <h4>Instal app</h4>
       <p> From App Store or Google play</p>
       <div className="row">
       <img src="img/pay/app.jpg" alt="" />
      
       <img src="img/pay/play.jpg" alt="" />

          
       </div>
    <p>Secured Payment Gateways</p>
       <img src="img/pay/pay.png" alt="" />
       
       </div>

       <div className="copyright">
  <p>© 2022, Niklad etc - Ecommerce Templates</p>
</div>
</footer>

  )
 

}

export default Footer;