import React from 'react';

const AddItem = (array) => {
  return array.products.map((product) => {
    return (
      <div className='container'>
          <select className="select">
            <option selected disabled>Select a product...</option>
            <option value={product} class="col-md-8">{product.name} {product.priceInCents}</option>
          </select>
       
      </div>
    )
  })

};

export default AddItem;