import React, { Component } from 'react'
import './circularMenu.css'

class CircularMenu extends Component {
  state = { active: false }

  onclick = () => this.setState({ active: !this.state.active })

  render() {
    return (
      <div
        id="circularMenu"
        className={`circular-menu ${this.state.active ? 'active' : ''}`}>
        <a className="floating-btn" onClick={this.onclick}>
          <i className="fa fa-plus" />
        </a>

        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-facebook" />
          <a href="#" className="menu-item fa fa-twitter" />
          <a href="#" className="menu-item fa fa-google-plus" />
          <a href="#" className="menu-item fa fa-linkedin" />
        </menu>
      </div>
    )
  }
}

export default CircularMenu
