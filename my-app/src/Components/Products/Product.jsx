import React from 'react'
import './Prodycts.css'




function Product ({productItems}) {



    
return(
 <section id="product1" class="section-p1">
   
    <h2>Featured Products</h2>
    <p>Summer Collection New Moden Design</p>
    <div class="pro-container">
   
    <div className='Products' >
        {productItems.map((productItems, productIndex)=>{
            return (
                
                <div className='NN'>
                    <section id="product" class="section-p11"> 
                        <div className="pro">
                        <img src={"./img/"+ productItems.img}/> 
                        <h>{productItems.name}</h>
                        <h5>{productItems.opis}</h5>
                        <h4>$ {productItems.prise}</h4>
    
                        
                </div>
                
            </section>
                </div>
            )
      })
           } </div>
              
                 
          
      

    </div>
    </section>
    

        




  )
}

export default Product