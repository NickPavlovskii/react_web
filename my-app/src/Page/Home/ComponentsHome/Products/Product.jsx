import React from 'react'
import './products.css'
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import productItems from '/productItems'

import { NavLink } from 'react-router-dom';



function Product ({productItems,addToCart}) {

    
return(
 <section id="product1" className="section-p1">

    <h2>Featured Products</h2>
    <p>Summer Collection New Moden Design</p>
    
   
    <div className="pro-container">
        {productItems.slice(0,8).map((productItems, productIndex )=>{
            
            
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
    

        




  )
}

export default Product