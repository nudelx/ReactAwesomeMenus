import './App.css'
import React, { Component } from 'react'
import Header from './componets/header'
import Stage from './componets/stage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stage />
      </div>
    )
  }
}

export default App
