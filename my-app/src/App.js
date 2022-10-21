
import './style/style.css';
import {Header } from './Components/Header'; 
import {Hero} from './Components/Hero'; 
import {Feature} from './Components/Feature'; 
import Product from './Components/Products/Product'; 

import {useState} from "react";


function App() {
 


  const [productItems, SetProdducts]= 
      useState([
          {
              id: 1,
              name: "Adidas",
              opis: "Cartoon Astronaut T-Shorts",
              prise: 72,
              Star: 'star',
              img: '/products/f1.jpg'
  
  
          },
          {
            id: 2,
            name: "Adidas",
            opis: "Cartoon Astronaut T-Shorts",
            prise: 42,
            Star: 'star',
            img: '/products/f2.jpg'


        },
        {
          id: 3,
          name: "Adidas",
          opis: " Кроссовки adidas высокие",
          prise: 32,
          Star: 'star',
          img: '/products/f3.jpg'

          
      },
      {
        id: 4,
        name: "Adidas",
        opis: " Кроссовки adidas высокие",
        prise: 52,
        Star: 'star',
        img: '/products/f5.jpg'

        
    },
    {
      id: 5,
      name: "Adidas",
      opis: " Кроссовки adidas высокие",
      prise: 320,
      Star: 'star',
      img: '/products/f6.jpg'

      
  },
  {
    id: 6,
    name: "Adidas",
    opis: " Кроссовки adidas высокие",
    prise: 320,
    Star: 'star',
    img: '/products/f7.jpg'

    
},
{
  id: 7,
  name: "Adidas",
  opis: " Кроссовки adidas высокие",
  prise: 320,
  Star: 'star',
  img: '/products/f8.jpg'

  
},  {
  id: 8,
  name: "Adidas",
  opis: " Кроссовки adidas высокие",
  prise: 320,
  Star: 'star',
  img: '/products/a1.jpg'

  
},
      ])

     
  
    return <div>  
    
    <Header/>
    <Hero/>
    <Feature/>
    <Product productItems={productItems}/>


    </div>
    
  
}

export default App;
