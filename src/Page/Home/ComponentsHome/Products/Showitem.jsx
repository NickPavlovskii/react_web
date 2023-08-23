import {React, useState} from 'react'
import './products.css'
import { useParams } from 'react-router-dom';
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import productItems from '/productItems'

import { NavLink } from 'react-router-dom';
import product1data from './products1Data';

const Showitems = ({addToCart}) => {

   
    const {productItems}  = product1data;


let {id}  = useParams() 

// let i = Number (id) - 1



const result = productItems.find((productItems) => productItems.id === id )

// console.log(result) 

      
  return (
    
    <>


    <div className='section-p1' id='prodetails' >
      <div className="single-pro-image">
      <img src={"./img/"+result.img} alt="" id='MainImg' width='100%' /> 
      
      <div className="small-img-grp">
        <div className="small-img-col">
        <img src={"./img/"+result.img1} alt="" id='smalImg' width='100%' /> 
        </div>
        <div className="small-img-col">
        <img src={"./img/"+result.img2} alt="" id='smalImg' width='100%' /> 
        </div>
      </div>

  
      </div>

      <div className="single-pro-details">
        <h6>{result.name}</h6>
        <h4>{result.opis}</h4>
        <h2 >$ {result.price}</h2>
        <select name="" id="">
          <option value="">Select size</option>
          <option value="">XS</option>
          <option value="">XXS</option>
          <option value="">S</option>
          <option value="">M</option>
        </select>
        <input type="number"  value="1" />
        <button className='normal' onClick={()=> addToCart(result)} >Add to Cart</button>
        <h4>Product Details</h4>
        <span>{result.descrip}</span>
      </div>


        
     

                
            
              
            

         
    
    </div>

    <section id="product1" className="section-p1">

<h2>Featured Products</h2>
<p>Summer Collection New Moden Design</p>


<div className="pro-container">
    {productItems.slice(0,4).map((productItems, productIndex )=>{
        
        
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


</>

  )
}

export default Showitems

