import React from 'react';

import {Hero} from './ComponentsHome/Hero'; 
import {Feature} from './ComponentsHome/Feature'; 

import Product from './ComponentsHome/Products/Product'; 
import Product2 from './ComponentsHome/Products/Products2'; 
// import CartList from '../ComponentsHome/Products/CartList'; 
import Banner from './ComponentsHome/Banner/Banner'; 
import Sm_banner from './ComponentsHome/Banner/Sm_banner'; 
import Banner3 from './ComponentsHome/Banner/Banner3';
import Newsletter from './ComponentsHome/Newsletter/Newsletter'; 

import {useState} from "react";





   
 
const Home = ({addToCart,productItems}) => {
  
  // alert(productItems[1].name)

  return (

    <div>
     

    


{/* <CartList/> */}
<Hero/>
<Feature/> 
<Product productItems={productItems} addToCart={addToCart} />
 <Banner/> 
 <Product2 productItems={productItems} addToCart={addToCart} />
 <Sm_banner/>
 <Banner3/> 
<Newsletter/>

    </div>
  );
};
 
export default Home;