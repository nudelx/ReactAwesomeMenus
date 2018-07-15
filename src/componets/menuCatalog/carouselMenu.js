import React from 'react'
import PropTypes from 'prop-types'
import './carouselMenu.css'
class CarouselMenu extends React.Component {
  constructor(props) {
    super(props)
    this.opt = {
      radius: 100,
      optimalAlphaStep: 45,
      direction: 1,
      total: props.options.length,
      startAlpha: props.startAngle,
      currentAlpha: props.startAngle
    }
  }

  doMath(index, opt) {
    const { calculateNextStep } = this.props
    const { nextAlpha, calculatedAlpha } = calculateNextStep({
      index,
      ...opt
    })
    this.opt.currentAlpha = nextAlpha
    return { calculatedAlpha }
  }
  onCheckBoxClick = e => {
    const { onSelect } = this.props
    console.log(e.nativeEvent.target.id, e.nativeEvent.target.checked)
    return onSelect === 'function'
      ? onSelect(e.nativeEvent.target.id, e.nativeEvent.target.checked)
      : null
  }

  render() {
    const { options, onClick, active } = this.props
    return (
      <div className={`selector ${active ? 'open' : ''}`}>
        <ul>
          {options.map((item, index) => {
            const { calculatedAlpha } = this.doMath(index, this.opt)
            return (
              <li
                className={`item`}
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                style={{
                  transform: active ? `rotate(${calculatedAlpha}deg)` : ''
                }}>
                <input
                  onClick={this.onCheckBoxClick}
                  id={`item_${index}_${item.name}`}
                  type="checkbox"
                />
                <label htmlFor={`item_${index}_${item.name}`}>
                  {item.name}
                </label>
              </li>
            )
          })}
        </ul>
        <button onClick={onClick}>OPTIONS</button>
      </div>
    )
  }
}

CarouselMenu.defaultProps = {
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
  startAngle: -90
}

export default CarouselMenu
