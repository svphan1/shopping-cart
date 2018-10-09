import React from 'react';

const AddItem = ({ products, changed }) => {
  const dropDown = products.map((product) => {
    return (
      <option key={product.id} value={product.name} className="col-md-8">{product.name} {product.priceInCents}</option>
    )
  })
  return (
    <div>
      <select onChange={changed} className="select">
        <option selected disabled>Select a product...</option>
        { dropDown }
      </select>
    </div>
  )
};

export default AddItem;