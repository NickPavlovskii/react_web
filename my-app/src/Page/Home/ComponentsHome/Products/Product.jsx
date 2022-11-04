import React from 'react'
import './Prodycts.css'
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import productItems from '/productItems'


function Product ({productItems,addToCart}) {



    
return(
 <section id="product1" className="section-p1">
   <div className='heart'><AiOutlineHeart/></div>
    <h2>Featured Products</h2>
    <p>Summer Collection New Moden Design</p>
    
   
    <div className="pro-container">
        {productItems.map((productItems, productIndex)=>{
            return (
               
                
                   
                        <div className="pro">
                            <img src={"./img/"+ productItems.img}/> 
                            <div className='des'>
                            <h>{productItems.name}</h>
                            <h5>{productItems.opis}</h5>
                            <h4 class='price'>$ {productItems.prise}</h4>
                            </div>
                            
                            <a  className='cart' onClick={()=> addToCart(productItems)}>
                                
                                <FaCartPlus /></a>
                             
                </div>
                
            
              
            

            )
            
      })
           } 
              </div>
                 
          
      

    
    </section>
    

        




  )
}

export default Product