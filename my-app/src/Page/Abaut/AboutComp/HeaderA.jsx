import React from 'react'
import {BsBag} from 'react-icons/bs';
import { BiUser} from 'react-icons/bi';

export const HeaderA = (props) => {
  return (
    <section id="header" >
    <a href=""><img src="logo2.png" alt="logo" class="logo" ></img></a>
    <ul id="navbar">
        <li><a href="/" >Home</a></li>
        <li><a href="shop.html" class="Shop">Shop</a></li>
        <li><a href="blog.html" class="Blog">Blog</a></li>
        
        <li><a href="/about" class="About active" to="/about"  >About</a></li>
        <li><a href="contact.html" class="Contact">Contact</a></li>
        
            <div>  <li><a href="" class="cart.htl caart"><BsBag/>  </a> <sup className='sbag' > <div className='bag'>{props.count} </div></sup></li>
            
            </div>
          <li><a href="contact.html" class="link"><BiUser/></a></li>
      
          
    </ul>

</section>
  )
}
export default HeaderA;