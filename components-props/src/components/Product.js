import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <h3>
          Product Component
        </h3>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.price }</p>
      </div>
    );
  }
}

export default Product;