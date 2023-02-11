import React, { useState } from "react";
import './style/style.css';

import {Header } from './Page/Home/ComponentsHome/Header';  
import { BrowserRouter as Router, Routes, Route} 
    from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/Abaut/Abaut';

import Contact from './Page/Contact/Contact';
import Cart from "./Page/Cart/Cartpage";
import Footer from './Page/Home/ComponentsHome/Footer/Footer'; 
import Blogs from "./Page/Blog/Blog";

import product1data from "./Page/Home/ComponentsHome/Products/products1Data";
import blogdata from "./Page/Blog/blogItems";
import Showitems from "./Page/Home/ComponentsHome/Products/Showitem";
import Shoppage from "./Page/Shop/Shoppage";
import Login from "./Page/User/Login";

function App() {
 



 const [CartItem, setCartItem] = useState([])
 
 const addToCart = (product) => {  //добавление
   
    const productExit = CartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      
        setCartItem([...CartItem, { ...product, qty: 1 }]) 
    }
  }
  
  const decreaseQty = (product) => { //уменьшение кол-ва товаров
   
    const productExit = CartItem.find((item) => item.id === product.id)

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  const deleteQty=(product)=>{  //удаление товара
    // console.log('delete',product.id);
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }

 
  const {productItems}  = product1data;
  const {blogItems}=blogdata;
    return (
    <>  
    
    

    <Router>
    <Header CartItem={CartItem}/>
    <Routes>
    <Route exact path='/'  element={<Home   addToCart={addToCart}  productItems={productItems}   />} />
        <Route path='/:id' element={<Showitems productItems={productItems} addToCart={addToCart}  />}  />
        <Route  exact path='/Shop' element={<Shoppage addToCart={addToCart}  productItems={productItems}/>} />
        <Route  exact path='/user' element={<Login/>} />
        <Route  exact path='/Contact' element={<Contact/>} />
        <Route  exact path='/about' element={<About/>} />
       
        <Route path='/Blog' element={<Blogs blogItems={blogItems}/>}  />
         <Route exact path='/cart'  element={<Cart  CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteQty={deleteQty} />} />
    </Routes>
  
  
  

    <Footer/>
    </Router>
      
    
    
    


    </>
    
    )
}

export default App;
