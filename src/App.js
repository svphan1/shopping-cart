import React, { Component } from 'react'
import './App.css'
import CartHeader from './Components/Header'
import CartFooter from './Components/Footer'
import CartItems from './Components/CartItems'

class App extends Component {

  copyright = '2018'

  state = {

    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Millennium Falcon', priceInDollars: 30999 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'X-Wing Starfighter', priceInDollars: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Imperial Star Destroyer', priceInDollars: 1999 }, quantity: 1 }
    ],

    products: [
      { id: 40, name: 'Millennium Falcon', priceInDollars: 30999 },
      { id: 41, name: 'X-Wing Starfighter', priceInDollars: 499 },
      { id: 42, name: 'Imperial Star Destroyer', priceInDollars: 1999 },
      { id: 43, name: 'Naboo Royal Starship', priceInDollars: 2500 },
      { id: 44, name: 'TIE Fighter', priceInDollars: 700 },
      { id: 45, name: 'AT-AT Walkers', priceInDollars: 399 },
      { id: 46, name: 'Death Star', priceInDollars: 99999 },
      { id: 47, name: 'Speeder Bike', priceInDollars: 6500 },
      { id: 48, name: 'Super Star Destroyer', priceInDollars: 23990 }
    ],

    currentId: null,
    currentProductName: null,
    currentPriceInDollars: null,
    currentQuantity: null,

    totalPrice: 0,

  }

  componentDidMount() {
    this.checkOut()
  }

  captureNumber = (e) => {
    this.setState({ currentQuantity: Number(e.target.value) })
  }

  addProduct = (e) => {
    e.preventDefault()
    const currentList = [...this.state.cartItemsList]
    const newList = {
      id: this.state.currentId,
      product: {
        id: this.state.currentId,
        name: this.state.currentProductName,
        priceInDollars: this.state.currentPriceInDollars
      },
      quantity: this.state.currentQuantity
    }
    const finalList = currentList.concat(newList)
    this.setState({ cartItemsList: finalList })
    this.checkOut()
  }

  selectChanged = (e) => {
    let filtered = this.state.products.filter(product => {
      return product.name === (e.target.value)
    })
    this.setState({
      currentId: filtered[0].id,
      currentProductName: filtered[0].name,
      currentPriceInDollars: filtered[0].priceInDollars
    })
  }

  checkOut = () => {
    const totalPrice = this.state.cartItemsList.reduce((accum, current) => {
      return accum + (current.product.priceInDollars * current.quantity)
    }, 0)
    return totalPrice
  }


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
    )
  }
}

export default App
