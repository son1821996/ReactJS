import React, { Component } from 'react';
import Product from './components/Product';
import './App.css';

class App extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'Iphone 7 PLUS PLUS',
        price: '5000000',
        status: true
      },
      {
        id: 2,
        name: 'Iphone XS',
        price: '15000000',
        status: true
      },
      {
        id: 3,
        name: 'Iphone 8 PLUS PLUS',
        price: '2000000',
        status: false
      }
    ];

    let elements = products.map((product, index) => {
      if(product.status) {
          return <Product
          name= { product.name }
          price= { product.price }
        ></Product>
      }
     
    });
    return (
        <div>
          <h1>Component</h1>
          { elements }
        </div>
    );
  }
}

export default App;
