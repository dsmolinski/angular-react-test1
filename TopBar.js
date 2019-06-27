import React, { Fragment }  from 'react';

const TopBar = () => {
  return (
/* ten selektor (app-top-bar) nie istnieje w Reakcie, więc musimy go naprawić. Z tego powodu należy dodać nowy tag w TopBar.js */
  <div className="app-top-bar"> 
    <a href="#">
      <h1>My Store</h1>
    </a>
    <a className="button fancy-button">
      <i class="material-icons">shopping_cart</i>Checkout
    </a>
  </div>
  )
};
/* JSX (JS XML) to nic innego jak nakładka rozszerzająca składnię ECMAScript. W sumie dość podobne do czystego HTMLka, co jest bardzo przyjazne dla mniej zaawansowanych osób. Różnicą względem np. Angulara jest to, że HTML umieszczamy w JS. Dzięki temu mamy również bardzo schludny i zwięzły kod. */

/* Dalej - w Reakcie funkcje zwracają JSX. W tym przypadku skorzystamy z prostego rozwiązania, które spowoduje, że aplikacja Angularowa zadziała bez problemu na implementacji Reaktowej */

export default TopBar;