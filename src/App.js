import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/Header';
import CartFooter from './Components/Footer';
import CartItems from './Components/CartItems';

class App extends Component {

  copyright = '2018';

  state = {

    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Millennium Falcon', priceInCents: 30999 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'X-Wing Starfighter', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Imperial Star Destroyer', priceInCents: 1999 }, quantity: 1 },
    ],

    products: [
      { id: 40, name: 'Millennium Falcon', priceInCents: 30999 },
      { id: 41, name: 'X-Wing Starfighter', priceInCents: 499 },
      { id: 42, name: 'Imperial Star Destroyer', priceInCents: 1999 },
      { id: 43, name: 'Naboo Royal Starship', priceInCents: 2500 },
      { id: 44, name: 'TIE Fighter', priceInCents: 700 },
      { id: 45, name: 'AT-AT Walkers', priceInCents: 399 },
      { id: 46, name: 'Death Star', priceInCents: 99999 },
      { id: 47, name: 'Speeder Bike', priceInCents: 6500 },
      { id: 48, name: 'Super Star Destroyer', priceInCents: 23990 },
    ],

    current_id: null,
    current_product_name: null,
    current_priceInCents: null,
    current_quantity: null,

    totalPrice: 0,

  };

  componentDidMount() {
    this.checkOut()
  }

  captureNumber = (e) => {
    this.setState({ current_quantity: Number(e.target.value) })
    console.log(e.target.value) 
  }

  addProduct = (e) => {
    e.preventDefault();
    console.log(this.state)
    const current_list = [...this.state.cartItemsList];
    const new_list = {
      id: this.state.current_id,
      product: { id: this.state.current_id, name: this.state.current_product_name, priceInCents: this.state.current_priceInCents }, quantity: this.state.current_quantity
    };
    const finalList = current_list.concat(new_list);
    this.setState({ cartItemsList: finalList });
    this.checkOut();
  }

  selectChanged = (e) => {
    let filtered = this.state.products.filter(product => {
      return product.name === (e.target.value)
    })
    this.setState({ current_id: filtered[0].id, current_product_name: filtered[0].name, current_priceInCents: filtered[0].priceInCents })
  }

  checkOut = () => {
    this.setState({totalPrice: this.state.cartItemsList.reduce((accum, current) => {
      return accum + (current.product.priceInCents);
    },0 )})
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>

        <div>
          <CartItems
            cartItemsList={this.state.cartItemsList}
            products={this.state.products}
            getNumber={this.captureNumber}
            submitted={this.addProduct}
            changed={this.selectChanged} 
            price={this.state.totalPrice}
            checkOut={this.checkOut} />
        </div>

        <footer>
          <CartFooter copyright={this.copyright} />
        </footer>
      </div>
    );
  }
}

export default App;
