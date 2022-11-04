import React from 'react'
import './Prodycts.css'
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import productItems from '/productItems'


function Product ({productItems,addToCart}) {



    
return(
 <section id="product1" className="section-p1">

    <h2>Featured Products</h2>
    <p>Summer Collection New Moden Design</p>
    
   
    <div className="pro-container">
        {productItems.map((productItems, productIndex)=>{
            return (
               
                
                   
                        <div className="pro">
                             <div className='heart'><AiOutlineHeart/></div>
                            <img src={"./img/"+ productItems.img}/> 
                            <div className='des'>
                            <h>{productItems.name}</h>
                            <h5>{productItems.opis}</h5>
                            <h4 class='price'>$ {productItems.prise}</h4>
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