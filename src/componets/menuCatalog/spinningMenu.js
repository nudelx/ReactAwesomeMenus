import React from 'react'
import './spinningMenu.css'
class SpinningMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.radius = 100
    this.total = props.options.length
    this.optimalAlphaStep = 35
    this.startAlpha = props.startAngle
    this.currentAlpha = this.startAlpha
    this.radian = 180 / Math.PI
    this.direction = 1
  }
  calculatePosition(alpha) {
    return {
      x: this.radius * Math.cos(alpha / this.radian) + 120,
      y: this.radius * Math.sin(alpha / this.radian) + 120
    }
  }

  calculateAlpha(index) {
    this.currentAlpha = index === 0 ? this.startAlpha : this.currentAlpha
    this.currentAlpha = this.currentAlpha >= 360 ? 0 : this.currentAlpha
    const position = this.calculatePosition(this.currentAlpha)
    this.currentAlpha += this.optimalAlphaStep * this.direction
    return position
  }

  onclick = () => this.setState({ active: !this.state.active })
  render() {
    const { active } = this.state
    const { options } = this.props
    return (
      <div className={`circle ${active ? 'open' : ''}`}>
        <div className="ring">
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
                  transform: `translate(${x}px, ${y}px)`
                }}
              />
            )
          })}
        </div>
        <button
          href="#"
          onClick={this.onclick}
          className={`center fa fa-th fa-2x `}
        />
      </div>
    )
  }
}
SpinningMenu.defaultProps = {
  options: [
    { name: 'facebook', class: 'fa fa-home fa-2x' },
    { name: 'twitter', class: 'fa fa-comment fa-2x' },
    { name: 'google', class: 'fa fa-play fa-2x' },
    { name: 'linkedin', class: 'fa fa-camera fa-2x' },
    { name: 'rebel', class: 'fa fa-music fa-2x' },
    { name: 'empire', class: 'fa fa-user fa-2x' },
    { name: 'react1', class: 'fa fa-star fa-2x' },
    { name: 'react2', class: 'fa fa-star fa-2x' }
  ],
  startAngle: -90
}

export default SpinningMenu
