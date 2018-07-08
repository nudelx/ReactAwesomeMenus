import './circularMenu.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class CircularMenu extends Component {
  state = { active: false }

  componentDidUpdate(prevProps) {
    const { onChange } = this.props
    if (
      typeof onChange === 'function' &&
      this.props.selected !== prevProps.selected
    ) {
      onChange(this.state.selected)
    }
  }

  onclick = () => this.setState({ active: !this.state.active })

  onSelect = e => this.setState({ active: false, selected: e.target.id })

  render() {
    const { options } = this.props
    return (
      <div
        id="circularMenu"
        className={`circular-menu ${this.state.active ? 'active' : ''}`}>
        <a className="floating-btn" onClick={this.onclick}>
          <i className="fa fa-plus" />
        </a>

        <menu className="items-wrapper">
          {options.map(item => (
            <a
              key={item.name}
              id={item.name}
              href="#"
              onClick={this.onSelect}
              className={`menu-item fa ${item.class}`}
            />
          ))}
        </menu>
      </div>
    )
  }
}

CircularMenu.defaultProps = {
  options: [
    { name: 'facebook', class: 'fa-facebook' },
    { name: 'twitter', class: 'fa-twitter' },
    { name: 'google', class: 'fa-google-plus' },
    { name: 'linkedin', class: 'fa-linkedin' }
  ]
}

CircularMenu.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default CircularMenu
