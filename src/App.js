import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <TodoList 
        addItem={this.addItem} 
        inputElement = {this.inputElement}
        handleInput = {this.handleInput}
        currentItem = {this.state.currentItem}
        />
      </div>
    )
  }
}

export default App