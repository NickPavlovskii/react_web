import React from 'react';
import Product from './Products/Product';
import {Link, Route, Routes} from "react-router-dom";

const Routess = ({productItems}) => {
  return (
    <div>
      <Link>
        <Product/>
        </Link>
    </div>
  )
}

export default Routess