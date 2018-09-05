import './App.css'
import './media.css'
import React, { Component } from 'react'
import Header from './componets/header'
import Stage from './componets/stage'
import TitleCard from './componets/titleCard'
import Welcome from './componets/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TitleCard>
          <Welcome />
        </TitleCard>
        <Stage />
      </div>
    )
  }
}

export default App
