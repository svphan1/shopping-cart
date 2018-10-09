import React from 'react';

const AddItem = ({products}) => {
  return products.map((product) => {
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