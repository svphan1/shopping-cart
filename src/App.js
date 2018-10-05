import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/Header';
import CartFooter from './Components/Footer';
import CartItems from './Components/CartItems';
import AddItem from './Components/AddItem';

class App extends Component {

  copyright = '2018';

  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Millennium Falcon', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'X-Wing Starfighter', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Imperial Star Destroyer', priceInCents: 1999 }, quantity: 1 },
    ],
  
    products: [
      { id: 40, name: 'Millennium Falcon', priceInCents: 399 },
      { id: 41, name: 'X-Wing Starfighter', priceInCents: 499 },
      { id: 42, name: 'Imperial Star Destroyer', priceInCents: 1999 },
      { id: 43, name: 'Naboo Royal Starship', priceInCents: 2500 },
      { id: 44, name: 'TIE Fighter', priceInCents: 1000 },
      { id: 45, name: 'AT-AT Walkers', priceInCents: 399 },
      { id: 46, name: 'Death Star', priceInCents: 2999 },
      { id: 47, name: 'Speeder Bike', priceInCents: 40000 },
      { id: 48, name: 'Super Star Destroyer', priceInCents: 3990 },
    ]
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
        <p>
          <CartItems cartItemsList={this.state.cartItemsList} />
        </p>
        <p>
          <AddItem products={this.state.products} change={this.handleChange}/>
        </p>
        <div>
          
        </div>
        <div className="container">
        <button className="btn btn-primary" type="button">Submit</button>
        </div>
        <footer>
          <CartFooter copyright={this.copyright} />
        </footer>
      </div>
    );
  }
}

export default App;
