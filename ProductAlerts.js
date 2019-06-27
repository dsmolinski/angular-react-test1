import React from 'react';
import {products} from './products';

const ProductAlerts = ({ product }) => {
  let productAlerts;
  
  if (product.price > 700) {
    productAlerts = <p><button>Powiadom mnie</button></p>;
  }
  
  return <div className="product-alerts">{productAlerts}</div>
};


export default ProductAlerts;

/* JS dodany z gita - odpowiada za alerty. Na jego podstawie dodamy sobie import na ProductList */