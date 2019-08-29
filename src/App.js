import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      category: ''
    }
  }

  render() {

    const cats = categories.map((item, i) => {
      return (
        <button key={`category-${i}`}
          onClick={(e) => {
            this.setState({ category: item })
          }}

        >
          {item}
        </button>
      )
    })

    const products = inventory.filter(
      (item) => {
        return item.category === this.state.category
      }
    ).map(({ name, id, category, description, price }, i) => {
      return (
        <div key={`product- ${id}`}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <h1>Show products here</h1>
        <p>{this.state.category}</p>

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
