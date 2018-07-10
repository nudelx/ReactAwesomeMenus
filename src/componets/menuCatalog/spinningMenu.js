import React from 'react'
import PropTypes from 'prop-types'
import './spinningMenu.css'
class SpinningMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.radius = 100
    this.radian = 180 / Math.PI
    this.optimalAlphaStep = 35
    this.offSet = 125
    this.direction = 1
    this.total = props.options.length
    this.startAlpha = props.startAngle
    this.currentAlpha = this.startAlpha
  }

  calculatePosition(alpha, radius, offSet) {
    return {
      x: this.radius * Math.cos(alpha / this.radian) + this.offSet,
      y: this.radius * Math.sin(alpha / this.radian) + this.offSet
    }
  }

  calculateAlpha(index) {
    this.currentAlpha = index === 0 ? this.startAlpha : this.currentAlpha
    this.currentAlpha = this.currentAlpha >= 360 ? 0 : this.currentAlpha
    const position = this.calculatePosition(this.currentAlpha)
    this.currentAlpha += this.optimalAlphaStep * this.direction
    return position
  }

  onSelect = e => this.setState({ active: false, selected: e.target.id })

  onclick = () => this.setState({ active: !this.state.active })
  render() {
    const { active } = this.state
    const {
      options,
      btnBgColor,
      btnborderColor,
      btnIcon,
      itemColor,
      ringBgColor
    } = this.props
    return (
      <div className={`circle ${active ? 'open' : ''}`}>
        <div className="ring" style={{ backgroundColor: ringBgColor }}>
          {options.map((item, index) => {
            const { x, y } = this.calculateAlpha(index)
            return (
              <button
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                onClick={this.onSelect}
                className={`menuItem ${item.class}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  color: itemColor
                }}
              />
            )
          })}
        </div>
        <div
          onClick={this.onclick}
          className={`center ${btnIcon}`}
          style={{
            backgroundColor: btnBgColor,
            borderColor: btnborderColor
          }}
        />
      </div>
    )
  }
}
SpinningMenu.defaultProps = {
  options: [
    { name: 'home', class: 'fa fa-home fa-2x' },
    { name: 'comment', class: 'fa fa-comment fa-2x' },
    { name: 'play', class: 'fa fa-play fa-2x' },
    { name: 'camera', class: 'fa fa-camera fa-2x' },
    { name: 'music', class: 'fa fa-music fa-2x' },
    { name: 'user', class: 'fa fa-user fa-2x' },
    { name: 'empire', class: 'fab fa-empire fa-2x' },
    { name: 'knight', class: 'fa fa-bell fa-2x' }
  ],
  startAngle: -90,
  btnBgColor: 'rgba(255, 255, 255, 0.3)',
  btnborderColor: '#ffffff',
  btnIcon: 'fa fa-th fa-2x',
  itemColor: '#eeeeee',
  ringBgColor: 'rgba(0, 0, 0, 0.5)'
}

SpinningMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  ),
  btnBgColor: PropTypes.string,
  btnborderColor: PropTypes.string,
  btnIcon: PropTypes.string,
  itemColor: PropTypes.string,
  ringColor: PropTypes.string
}

export default SpinningMenu
