import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../../components/ProductListItem';

function NewProducts({ products }) {
  const newProducts = Object.values(products);

  return (
    <div className="main-container">
      <h2 className="vcx heading">
        <span>New products</span>
      </h2>

      <div className="product-tile new">
        <ul className="products">
          {newProducts.map((product) => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(NewProducts);
