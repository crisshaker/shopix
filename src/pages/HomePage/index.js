import React from 'react';
import Cart from './Cart';
import NewProducts from './NewProducts';

export default function HomePage() {
  return (
    <div id="home-page">
      <Cart />
      <NewProducts />
    </div>
  );
}
