import React from 'react';
import { connect } from 'react-redux';
import {
  addOneToCart,
  removeAllFromCart,
  removeOneFromCart,
} from '../../actions';

function CartListItem({
  product,
  count,
  addOneToCart,
  removeAllFromCart,
  removeOneFromCart,
}) {
  function addProductToCart(e) {
    e.preventDefault();
    addOneToCart(product.id);
  }

  function removeOneOfProductFromCart(e) {
    e.preventDefault();
    removeOneFromCart(product.id);
  }

  function removeAllOfProductFromCart(e) {
    e.preventDefault();
    removeAllFromCart(product.id);
  }

  return (
    <li className="product">
      <img src={product.image} alt="" />
      <div className="content">
        <p className="name">{product.name}</p>
        <p className="price">¢ {product.price}</p>
        <div className="actions">
          <button onClick={removeOneOfProductFromCart}>
            <i className="fas fa-minus"></i>
          </button>
          <span>{count}</span>
          <button onClick={addProductToCart}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="delete" onClick={removeAllOfProductFromCart}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

function mapStateToProps({ products }, ownProps) {
  return { product: products[ownProps.id] };
}

export default connect(mapStateToProps, {
  addOneToCart,
  removeAllFromCart,
  removeOneFromCart,
})(CartListItem);
