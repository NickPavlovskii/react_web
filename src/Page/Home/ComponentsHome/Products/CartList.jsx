import React from 'react';
import './Prodycts.css'



function CartList({cart}){
    return(
        <section id="product1" className="section-p1">
        <div>
            
            {
                
            cart.map((cartItem, cartindex) =>{
                return (
                    <div>
                   
                    <img src={"./img/"+ cartItem.img} width='50px'/>
                    
                    </div>
                )

                
                })
            }               
        </div>
        </section>
    )
}
export default CartList