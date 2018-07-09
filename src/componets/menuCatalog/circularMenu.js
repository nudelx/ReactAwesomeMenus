import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import Menu from '../common/menu'
import './circularMenu.css'

class CircularMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.radius = 120
    this.total = props.options.length
    this.optimalAlphaStep = 35
    this.startAlpha = props.startAngle
    this.currentAlpha = this.startAlpha
    this.direction = props.itemsDirection === 'right' ? 1 : -1
    this.radian = 180 / Math.PI
  }

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

  calculatePosition(alpha) {
    return {
      x: this.radius * Math.cos(alpha / this.radian),
      y: this.radius * Math.sin(alpha / this.radian)
    }
  }

  calculateAlpha(index) {
    this.currentAlpha = index === 0 ? this.startAlpha : this.currentAlpha
    this.currentAlpha = this.currentAlpha >= 360 ? 0 : this.currentAlpha
    const position = this.calculatePosition(this.currentAlpha)
    this.currentAlpha += this.optimalAlphaStep * this.direction
    return position
  }

  render() {
    const {
      options,
      spinDirection,
      halfSpin,
      buttonIcon,
      buttonColor,
      menuColor
    } = this.props

    const { active } = this.state
    return (
      <div
        id="circularMenu"
        className={`circular-menu ${
          spinDirection === 'right' ? spinDirection : 'left'
        } ${halfSpin ? 'half' : 'third'} ${active ? 'active' : ''}`}
        style={{
          backgroundColor: active ? menuColor || buttonColor : 'inherit',
          borderRadius: '50%'
        }}>
        <FloatingButton
          onclick={this.onclick}
          buttonIcon={buttonIcon}
          bgColor={buttonColor}
        />
        <Menu>
          {options.map((item, index) => {
            const { x, y } = this.calculateAlpha(index)
            return (
              <button
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                onClick={this.onSelect}
                className={`menu-item ${item.class} ${
                  active ? 'fadein' : 'fadeout'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              />
            )
          })}
        </Menu>
      </div>
    )
  }
}

CircularMenu.defaultProps = {
  options: [
    { name: 'facebook', class: 'fab fa-facebook' },
    { name: 'twitter', class: 'fab fa-twitter' },
    { name: 'google', class: 'fab fa-google-plus' },
    { name: 'linkedin', class: 'fab fa-linkedin' },
    { name: 'rebel', class: 'fab fa-rebel' },
    { name: 'empire', class: 'fab fa-empire' },
    { name: 'react', class: 'fab fa-react' }
  ],
  halfSpin: false,
  spinDirection: 'right',
  itemsDirection: 'right',
  buttonIcon: 'fas fa-bars',
  buttonColor: '#FF86B2',
  startAngle: -90
}

CircularMenu.propTypes = {
  onChange: PropTypes.func,
  halfSpin: PropTypes.bool,
  spinDirection: PropTypes.string,
  buttonColor: PropTypes.string,
  itemsDirection: PropTypes.string,
  buttonIcon: PropTypes.string,
  startAngle: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default CircularMenu
