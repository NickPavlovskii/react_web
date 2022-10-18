import React from 'react';
import Product from './Products/Product';
import {Route, Routes} from "react-router-dom";

const Routess = ({productItems}) => {
  return (
    <div>
      <Routes> 
        <Route >
        <Product/>
        </Route>
      </Routes>
    </div>
  )
}

export default Routess