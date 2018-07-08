import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import Menu from '../common/menu'
import './circularMenu.css'

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
    const { options, spinDirection, halfSpin, buttonAfIcon } = this.props
    return (
      <div
        id="circularMenu"
        className={`circular-menu ${
          spinDirection === 'right' ? spinDirection : 'left'
        } ${halfSpin ? 'half' : 'third'} ${this.state.active ? 'active' : ''}`}>
        <FloatingButton onclick={this.onclick} buttonAfIcon={buttonAfIcon} />
        <Menu>
          {options.map((item, indx) => (
            <a
              key={`${item.name}_${indx}`}
              id={item.name}
              href="#"
              onClick={this.onSelect}
              className={`menu-item fa ${item.class}`}
            />
          ))}
        </Menu>
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
  ],
  halfSpin: true,
  spinDirection: 'right',
  buttonAfIcon: 'fa-bars'
}

CircularMenu.propTypes = {
  onChange: PropTypes.func,
  halfSpin: PropTypes.bool,
  spinDirection: PropTypes.string,
  buttonAfIcon: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default CircularMenu
