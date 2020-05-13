import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions';

function CartListItem({ product, count, addToCart, removeFromCart }) {
  function addProductToCart(e) {
    e.preventDefault();
    addToCart(product.id);
  }

  function removeProductFromCart(e) {
    e.preventDefault();
    removeFromCart(product.id);
  }

  return (
    <li className="product">
      <img src={product.image} alt="" />
      <div className="content">
        <p className="name">{product.name}</p>
        <p className="price">¢ {product.price}</p>
        <div className="actions">
          <button onClick={removeProductFromCart}>
            <i className="fas fa-minus"></i>
          </button>
          <span>{count}</span>
          <button onClick={addProductToCart}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

function mapStateToProps({ products }, ownProps) {
  return { product: products[ownProps.id] };
}

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  CartListItem
);
