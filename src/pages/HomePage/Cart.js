import React, { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import CartListItem from './CartListItem';

function Cart({ count, cart, total }) {
  const [open, setOpen] = useState(false);

  function toggleOpen(e) {
    e.preventDefault();
    setOpen(!open);
  }

  if (count === 0) return null;

  return (
    <div
      id="cart"
      className={classNames('disable-selection', { open })}
      onDoubleClick={(e) => e.preventDefault()}
    >
      <div className="trigger">
        <p className="count">{count}</p>
        <button onClick={toggleOpen}></button>
      </div>

      <div className="main">
        <div className="products-container">
          <ul className="products">
            {Object.keys(cart).map((id) => (
              <CartListItem id={id} count={cart[id]} key={id} />
            ))}
          </ul>
        </div>

        <button className="checkout vcx block orange button">
          <i className="fas fa-shopping-cart"></i>Checkout (¢ {total})
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ cart, products }) {
  const count = Object.values(cart).reduce((total, num) => total + num, 0);
  const total = Object.keys(cart).reduce(
    (total, id) => total + products[id].price * cart[id],
    0
  );
  return { count, cart, total };
}

export default connect(mapStateToProps)(Cart);
