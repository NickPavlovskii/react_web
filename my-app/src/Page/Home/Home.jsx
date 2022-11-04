import React from 'react';
import {Header } from './ComponentsHome/Header'; 
import {Hero} from './ComponentsHome/Hero'; 
import {Feature} from './ComponentsHome/Feature'; 
import Footer from './ComponentsHome/Footer/Footer'; 
import Product from './ComponentsHome/Products/Product'; 
import Product2 from './ComponentsHome/Products/Products2'; 
// import CartList from '../ComponentsHome/Products/CartList'; 
import Banner from './ComponentsHome/Banner/Banner'; 
import Sm_banner from './ComponentsHome/Banner/Sm_banner'; 
import Banner3 from './ComponentsHome/Banner/Banner3';
import Newsletter from './ComponentsHome/Newsletter/Newsletter'; 

import {useState} from "react";





   
 
const Home = () => {
  const productItems = 
  [
      {
          id: 1,
          name: "Adidas",
          opis: "Cartoon Astronaut T-Shorts",
          prise: '22,99',
          Star: 'star',
          img: '/products/f1.jpg'


      },
      {
        id: 2,
        name: "Burberry",
        opis: "Hawaiian Summer Men's Shorts",
        prise: 72,
        Star: 'star',
        img: '/products/f2.jpg'


    },
    {
      id: 3,
      name: "Lyle & Scott",
      opis: " Shorts",
      prise: 32,
      Star: 'star',
      img: '/products/f3.jpg'

      
  },
  {
    id: 4,
    name: "Lyle & Scott",
    opis: " Hawaiian Summer Men's Shorts",
    prise: 52,
    Star: 'star',
    img: '/products/f5.jpg'

    
},
{
  id: 5,
  name: "Adidas",
  opis: " Men's Long-sleeved Lapel Corduroy Shirt",
  prise: 320,
  Star: 'star',
  img: '/products/f6.jpg'

  
},
{
id: 6,
name: "Adidas",
opis: " Women's leggings",
prise: 320,
Star: 'star',
img: '/products/f7.jpg'


},
{
id: 7,
name: "Adidas",
opis: " Women's blouse",
prise: 320,
Star: 'star',
img: '/products/f8.jpg',
img2: '/products/f1.jpg'


},  {
id: 8,
name: "Adidas",
opis: " Advantage Base Velcro",
prise: '32,99',
Star: 'star',
img: '/products/a1.jpg'


},
  ]
  // alert(productItems[1].name)
  const [cart, setCart]=useState([])
  console.log(cart)
  const addToCart=(data) =>{
    console.log(data)
    setCart([...cart, data])
  }
  return (

    <div>
     <Header count={cart.length} >  </Header> 

    


{/* <CartList/> */}
<Hero/>
<Feature/> 
<Product productItems={productItems} addToCart={addToCart} />
 <Banner/> 
 <Product2 productItems={productItems} addToCart={addToCart} />
 <Sm_banner/>
 <Banner3/> 
<Newsletter/>
<Footer/>
    </div>
  );
};
 
export default Home;