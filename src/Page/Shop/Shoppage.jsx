import React from 'react'
import './Shop.css';
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import '../Home/ComponentsHome/Products/products.css';


import { NavLink } from 'react-router-dom';
import Newsletter from '../Home/ComponentsHome/Newsletter/Newsletter';


const Shoppage = ({productItems,addToCart}) => {
  return (
    <div>
      

  
      
<section  className="shop-header">
      <h2> #Shop</h2>
      <p>Save more with coupons & up to 70% off</p>
      </section >
      <section id="product1" className="section-p1">
    <div className="pro-container">
        {productItems.map((productItems, productIndex )=>{
            
            
            return (
             
                   
                        <div className="pro">
                            
               
                             <div className='heart'><AiOutlineHeart/></div>
                             <NavLink to={'/'+productItems.id}>
                            <img src={"./img/"+ productItems.img }  onClick={()=><NavLink to={'/'+productItems.id}>aegerg</NavLink>}/> 
                            </NavLink>
                            
                            <div className='des'>
                            <h>{productItems.name}</h>
                            <h5>{productItems.opis}</h5>
                            <h>{productItems.Star}</h>
                            <h4 className='price'>$ {productItems.price}</h4>

                            </div>
                           
                             <a  onClick={()=> addToCart(productItems)}> <i className='caaart'><FaCartPlus/></i> </a> 
                             
                </div>
                
            
              
            

            )
            
      })
           } 
              </div>
                 
          
      

    
    </section>
    <Newsletter />
    </div>
  )
}

export default Shoppage
