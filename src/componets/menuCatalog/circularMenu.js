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
    this.startAlpha = props.startAׁngle
    this.currentAlpha = this.startAlpha
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
      x: this.radius * Math.cos(alpha / (180 / Math.PI)),
      y: this.radius * Math.sin(alpha / (180 / Math.PI))
    }
  }

  calculateAlpha(index) {
    this.currentAlpha = index === 0 ? this.startAlpha : this.currentAlpha
    this.currentAlpha = this.currentAlpha >= 360 ? 0 : this.currentAlpha
    const position = this.calculatePosition(this.currentAlpha)
    this.currentAlpha += this.optimalAlphaStep
    return position
  }

  render() {
    const {
      options,
      spinDirection,
      halfSpin,
      buttonAfIcon,
      itemsDirection,
      buttonColor,
      menuColor
    } = this.props

    const { active } = this.state
    return (
      <div
        id="circularMenu"
        className={`circular-menu  items-${
          itemsDirection === 'right' ? itemsDirection : 'left'
        } ${spinDirection === 'right' ? spinDirection : 'left'} ${
          halfSpin ? 'half' : 'third'
        } ${active ? 'active' : ''}`}
        style={{
          backgroundColor: active ? menuColor : 'inherit',
          borderRadius: '50%'
        }}>
        <FloatingButton
          onclick={this.onclick}
          buttonAfIcon={buttonAfIcon}
          bgColor={buttonColor}
        />
        <Menu>
          {options.map((item, index) => {
            const { x, y } = this.calculateAlpha(index)
            return (
              <a
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                onClick={this.onSelect}
                className={`menu-item fab ${item.class} ${
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
    { name: 'facebook', class: 'fa-facebook' },
    { name: 'twitter', class: 'fa-twitter' },
    { name: 'google', class: 'fa-google-plus' },
    { name: 'linkedin', class: 'fa-linkedin' },
    { name: 'rebel', class: 'fa-rebel' },
    { name: 'empire', class: 'fa-empire' },
    { name: 'react', class: 'fa-react' }
  ],
  halfSpin: true,
  spinDirection: 'right',
  itemsDirection: 'right',
  buttonAfIcon: 'fa-bars',
  buttonColor: '#FF86B2',
  menuColor: '#FF86B2',
  startAׁngle: -90
}

CircularMenu.propTypes = {
  onChange: PropTypes.func,
  halfSpin: PropTypes.bool,
  spinDirection: PropTypes.string,
  itemsDirection: PropTypes.string,
  buttonAfIcon: PropTypes.string,
  startAׁngle: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default CircularMenu
