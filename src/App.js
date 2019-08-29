import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

  render() {

    const cats = categories.map((item, index) => {
      return (
        <button>
          {item}
        </button>
      )
    })

    const products = inventory.map(({ name, id, category, description, price }, index) => {
      return (
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {/* List product categories here */}
          {cats}
        </ul>

        <ul>
          {/* List product categories here */}
          {products}
        </ul>



      </div>
    );
  }
}

export default App;
