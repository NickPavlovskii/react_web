import React ,  { useState } from 'react'
import {FaTimes, FaPlus, FaMinus} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Cartpage.css'


const Cart = ({CartItem, addToCart, decreaseQty,deleteQty}) => {
 
 
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
      
    <>
   <section id="page-header " className="about-header">
      <h2> #Cart</h2>
      <p>Add your coupon code & SAVE uptp 50%</p>
   </section>
   

      <section className='cart-itm section-p1'  >
            <div className="container d_flex">
                <div className="cart_details">
                    {CartItem.length===0 && <h1 className='no-items product'>No items add cart </h1>  }
        
                    {CartItem.map((productItems, productIndex)=>{

                            const productQty = productItems.price * productItems.qty

                        return(

<>




<table width='100%'>
        <thead>
            <tr>
                <td>Rebove</td>
                <td>Imges</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>subtotal</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                    <div className="removeCart">
                                              <button className="removeCart"  onClick={()=>deleteQty(productItems)}>
                                                 <i> <FaTimes/> </i>
                                              </button>
                                              
                                            </div>
                    </td>
                    <td>
                    <NavLink to={'/'+productItems.id}>
                    <img src={"./img/"+ productItems.img}/> 
                    </NavLink>
                    </td>
                   
                    <td>
                    <h3>{productItems.name}</h3>
                    </td>
                    <td>
                        <span>{productItems.price}.00 $</span>
                    </td>
                    <td>
                        <div >
                            <div className='flex '>
                <input type="number" value={productItems.qty}/> 
                </div> 
                    <div className="cartControl ">
                                                <button className='inCart' onClick={()=>addToCart(productItems)}>  <FaPlus/>    </button>
                                            
                                            
                                                <button className='inCart' onClick={()=>decreaseQty(productItems)}>  <FaMinus/>    </button>
                                                </div>
                    </div>
                    </td>
                    <td>
                    {productQty}.00 $
                    </td>
               
                </tr>
                </tbody>
    </table>
                            




                            
                            </>
                        )
                    }
                    
                    
                    )}



                </div>
                {CartItem.length>0  &&  
               <div id='cart-add' className='product  cartadd section-p1'>
               <div className="Coupon">
               <h2>Apply Coupon</h2>
               
                 <div>
               <input type="text" placeholder='Enter Your Coupon' />
               <button className='normal'>Apply</button>
               </div>
               </div>
               
               <div className="subtotal">
                 <h3>Cart totals</h3>
                 <table>
                   <tr>
                     <td>Cart subtotal</td>
                     <td>${totalPrice}.00</td>
                   </tr>
                   <tr>
                     <td>Shipping</td>
                     <td>Free</td>
                   </tr>
                   <tr>
                     <td ><h5>Total</h5> </td>
                     <td>${totalPrice}.00</td>
                   </tr>
                 </table>
               <button>Proceed to checkout</button>
               </div>
               
               
              
               </div> 
}

            </div>
            
      </section>

    </>
  )
}


export default Cart


{/* */}
