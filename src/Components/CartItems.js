import React from 'react';
import './Component.css'
import CartItemComponent from './CartItemComponent';
import AddItem from './AddItem';


const CartItems = ({ cartItemsList, products, getNumber, submitted, changed, price, checkOut }) => {
	return (
		<div className="container">
			<h1>Cart Items</h1>
			<div className="list-group">
				<div className="list-group-item">
					<div className="row">
						<div className="col-md-8">Product</div>
						<div className="col-md-2">Price</div>
						<div className="col-md-2">Quantity</div>
					</div>
				</div>
				<CartItemComponent cartItemsList={cartItemsList} />
			</div>

			<button className="btn btn-success" onClick={checkOut}>Update Total</button>

			<form onSubmit={submitted}>
				<p>Total Price: ${price}</p>
				<label>Quantity</label>
				<div>
					<input placeholder="1" type="number" name="quantity" onChange={getNumber}></input>
				</div>
				<label>Products</label>
				<AddItem products={products} changed={changed} />
				<button className="btn btn-primary">Submit</button>
			</form>

		</div>
	)
};

export default CartItems;


