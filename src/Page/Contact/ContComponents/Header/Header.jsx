import React from 'react'
import {BsBag} from 'react-icons/bs';
import { BiUser} from 'react-icons/bi';
import './style.css'
export const HeaderA = (props) => {
  return (
    <section id="header" >
    <a href="/"><img src="logo2.png" alt="logo" class="logo" ></img></a>
    <ul id="navbar">
        <li><a href="/" >Home</a></li>
        <li><a href="/shop" class="Shop">Shop</a></li>
        <li><a href="/blog" class="Blog">Blog</a></li>
        
        <li><a href="/about" class="About " to="/about"  >About</a></li>
        <li><a href="/contact" class="Contact active">Contact</a></li>
        
            <div>  <li><a href="" className="cart"><BsBag className='caart'> </BsBag>  </a> <sup className='sbaag' > <div className='baag'>{props.count} </div></sup></li>
            
            </div>
          <li><a href="contact.html" class="link"><BiUser/></a></li>
      
          
    </ul>

</section>
  )
}
export default HeaderA;