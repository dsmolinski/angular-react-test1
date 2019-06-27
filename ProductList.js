/*  w reakcie nie ma konkretnych dyrektyw do interacji w JSX. Wszystko jest JS-em, wiec iterujemy korzystajac z JavaScirptu.  */
import React from 'react';

import {products} from './products';

import ProductAlerts from `./ProductAlerts`;


const ProductList = () => {
  const share = () => {
    window.alert('Zostaniesz powiadomiony o końcu świata!');
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
  {products.map(product => { /* pobieramy produkty z products.js. Co wazne korzytamy z operatora .map, który wygeneruje nam kod JSX. Title generujemy za pomocą wyrażenia JSowego i klasycznego "stringu" */ 
  return (
  <div>
     <h3>
      <a title={`${product.name} details`}>
        { product.name }
      </a>
     </h3>

  {product.description ? <p>{`Opis: ${product.description}`}</p> : null}
      <button onClick={share}>
        Cokolwiek
      </button>

    <ProductAlerts product={product} />

  </div>
  )

})}
      </div>
  )

};

export default ProductList;