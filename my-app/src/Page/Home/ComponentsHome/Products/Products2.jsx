import React from 'react'
import './Prodycts.css'
import { FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
// import productItems from '/productItems'


function Product2 ({productItems,addToCart}) {

    
    const productItems1 = 
    [
        {
            id: 9,
            name: "Adidas",
            opis: "Cartoon Astronaut T-Shorts",
            prise: '78,99',
            Star: 'star',
            img: '/products/n1.jpg'
    
    
        },
        {
          id: 10,
          name: "Burberry",
          opis: "Cartoon Astronaut T-Shorts",
          prise: '78',
          Star: 'star',
          img: '/products/n2.jpg'
    
    
      },
      {
        id:11,
        name: "Lyle & Scott",
        opis: "Cartoon Astronaut T-Shorts",
        prise: 32,
        Star: 'star',
        img: '/products/n3.jpg'
    
        
    },
    {
      id: 12,
      name: "Lyle & Scott",
      opis: " HCartoon Astronaut T-Shorts",
      prise: 52,
      Star: 'star',
      img: '/products/n4.jpg'
    
      
    },
    {
    id: 13,
    name: "Adidas",
    opis: "Cartoon Astronaut T-Shorts",
    prise: 320,
    Star: 'star',
    img: '/products/n5.jpg'
    
    
    },
    {
    id: 14,
    name: "jack & jones",
    opis: "Бермуды  ",
    prise: 320,
    Star: 'star',
    img: '/products/n6.jpg'
    
    
    },
    {
      id: 15,
      name: "Adidas",
      opis: "Cartoon Astronaut T-Shorts",
      prise: 320,
      Star: 'star',
      img: '/products/n7.jpg'
      
      
      },
     
      {
        id: 15,
        name: "Adidas",
        opis: "Cartoon Astronaut T-Shorts",
        prise: 320,
        Star: 'star',
        img: '/products/n8.jpg'
        
        
        },
    
    ]
    
    
return(
 <section id="product1" className="section-p1">
   
    <h2>New Arrivals</h2>
    <p>Summer Collections</p>
    
   
    <div className="pro-container">
        {productItems1.map((productItems1, productIndex)=>{
           
            return (
               
                
                   
                        <div className="pro">
                           <div className='heart'><AiOutlineHeart/></div>
                            <img src={"./img/"+ productItems1.img}/> 
                            <div className='des'>
                            <h>{productItems1.name}</h>
                            <h5>{productItems1.opis}</h5>
                            <h4 class='price'>$ {productItems1.prise}</h4>
                            
                           
                            </div>
                            
                            <a  onClick={()=> addToCart(productItems1)}> <i className='caaart'><FaCartPlus/></i> </a> 
                             
                </div>
                
            
              
            

            )
            
      })
           } 
              </div>
                 
          
      

    
    </section>
    

        




  )
}

export default Product2