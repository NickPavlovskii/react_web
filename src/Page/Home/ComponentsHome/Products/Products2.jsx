import React from 'react'
import './products.css'
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';


import { NavLink } from 'react-router-dom';
function Product2 ({productItems,addToCart}) {

    
  
    
  
    
return(


  
 <section id="product1" className="section-p1">
   
    <h2>New Arrivals</h2>
    <p>Summer Collections</p>
    
   
    <div className="pro-container">
        {productItems.slice(8,17).map((productItems, productIndex)=>{
           
            return (
               
                
                   
                        <div className="pro">

                           <div className='heart'><AiOutlineHeart/></div>
                           <NavLink to={'/'+productItems.id}>
                            <img src={"./img/"+ productItems.img}/> 
                            </NavLink>
                            <div className='des'>
                            <h>{productItems.name}</h>
                            <h5>{productItems.opis}</h5>
                            <h4 class='price'>$ {productItems.price}</h4>
                            
                           
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

export default Product2