class App extends Component {

  constructor(props) {
    super(props);
    this.state = {fruits: fruits, new_fruit:""}
    this.addFruit = this.addFruit.bind(this);
    this.captureFruitChange = this.captureFruitChange.bind(this);
  }
  
  captureFruitChange = (e) => {
    this.setState({new_fruit: e.target.value});
    e.preventDefault();
  }
  
  
  addFruit = () => {
    let current_fruits = this.state.fruits;
    let nu = {name: this.state.new_fruit, price: "$2.50", origin: "Florida"};
    current_fruits.push(nu);
    this.setState({fruits: current_fruits});
  }
  
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            New fruit: {this.state.new_fruit}
          </div>
          <p className="App-intro">
            <button onClick={this.addFruit}>Add Fruit</button>
            <div>
            <input onChange={this.captureFruitChange}/>
            </div>
            {fruits.map(fruit => <Fruit fruit_name={ fruit.name } fruit_price={ fruit.price } fruit_local={ fruit.origin } />)}
          </p>
        </div>
      );
    }
  }