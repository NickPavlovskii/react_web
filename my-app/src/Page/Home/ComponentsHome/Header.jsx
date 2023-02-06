import React from 'react'
import {BsBag} from 'react-icons/bs';
import { BiUser} from 'react-icons/bi';
import { Link } from "react-router-dom"

export const Header = ({CartItem}) => {
  return (
    <>
    <section id="header" >
    <Link to="/"><img src="logo2.png" alt="logo" class="logo" ></img></Link>
    <ul id="navbar" media="screen">
      
        <li><Link to="/" class="active">Home</Link></li>
        <li><Link to="/shop" class="Shop">Shop</Link></li>
        <li><Link to="/blog" class="Blog">Blog</Link></li>
        
        <li><Link to="/about" class="About"   >About</Link></li>
        <li><Link to="/Contact" class="Contact">Contact</Link></li>
        <div className="cart">
        <Link to='/cart' >
                    <li> <i> <BsBag className='icon-circle' /></i></li>

             
              
              <span>{CartItem.length === 0 ? "" : <span className='none'> {CartItem.length}</span>} </span>
              </Link>
              </div>
          <li><Link to="/user" class="link"><BiUser/></Link></li>

          
    </ul>

</section>
</>
  )
}
export default Header