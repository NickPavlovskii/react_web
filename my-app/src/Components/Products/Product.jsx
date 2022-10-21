import React from 'react'
import './Prodycts.css'
import { FaCartPlus} from 'react-icons/fa';



function Product ({productItems}) {



    
return(
 <section id="product1" className="section-p1">
   
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
                            <a href="" className='cart'><FaCartPlus /></a>
                             
                </div>
                
            
              
            

            )
            
      })
           } 
              </div>
                 
          
      

    
    </section>
    

        




  )
}

export default Product