import React, {Component} from 'react';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'
import './stylecomp.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      getProducts: [],
      cartItems: []
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }
  componentWillMount() {
    fetch('cartload.json').
    then(res => res.json()).
    then(data => this.setState({
      products: data,
      getProducts: data
    }))
  }
  handleAddToCart(e, product) {
 //   event.preventDefault();
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          item.count += 1;
          productAlreadyInCart = true;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          if(item.count >= 0 ) {
            item.count -= 1;
            productAlreadyInCart = true;
          }
        }
      });
      if (!productAlreadyInCart) {
          cartItems.pop({ ...product, count: 1});
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  render() {
    var {products, getProducts, cartItems} = this.state;
    console.log(products);
    console.log(getProducts);
    console.log(cartItems)
    return (
      <div className="container">
        <h1>Grocery Shopping Site</h1>
        <hr/>
        <div>
          <div>
            <Products products={this.state.getProducts} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
          <div>
            <Cart cartItems={this.state.cartItems} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
