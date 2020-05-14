import React from 'react';
import { connect } from 'react-redux';
import { addOneToCart } from '../actions';

function ProductListItem({ product, addOneToCart }) {
  function addProductToCart(e) {
    e.preventDefault();
    addOneToCart(product.id);
  }

  return (
    <li className="product">
      <div className="content">
        <img src={product.image} alt="product" />

        <div className="price-favorite">
          <p className="price">¢ {product.price}</p>
          <button>
            <i className="far fa-heart"></i>
          </button>
        </div>

        <p className="name">{product.name}</p>
      </div>

      <button
        className="add-to-cart vcx black outline block button"
        onClick={addProductToCart}
      >
        Add to cart
      </button>
    </li>
  );
}

export default connect(null, { addOneToCart })(ProductListItem);
