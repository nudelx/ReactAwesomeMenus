import React from 'react'
import PropTypes from 'prop-types'
import './carouselMenu.css'
class CarouselMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    const itemId = e.nativeEvent.target.id
    this.setState(
      {
        [itemId]: !this.state[itemId]
      },
      () => {
        if (onSelect === 'function')
          onSelect(e.target.id, this.state[e.target.id])
      }
    )
  }

  render() {
    const {
      options,
      onClick,
      active,
      btnLabel,
      itemColor,
      itemColorChecked,
      itemTextColor,
      itemTextColorChecked
    } = this.props
    return (
      <div className={`selector ${active ? 'open' : ''}`}>
        <ul>
          {options.map((item, index) => {
            const { calculatedAlpha } = this.doMath(index, this.opt)
            const itemKey = `item_${index}_${item.name}`
            return (
              <li
                className={`item`}
                key={`key_${itemKey}`}
                id={item.name}
                href="#"
                style={{
                  transform: active ? `rotate(${calculatedAlpha}deg)` : ''
                }}>
                <input
                  onClick={this.onCheckBoxClick}
                  id={itemKey}
                  type="checkbox"
                  checked={!!this.state[itemKey]}
                />
                <label
                  style={{
                    transform: `rotate(${-calculatedAlpha}deg)`,
                    backgroundColor: !!this.state[itemKey]
                      ? itemColorChecked
                      : itemColor,
                    color: !!this.state[itemKey]
                      ? itemTextColorChecked
                      : itemTextColor
                  }}
                  htmlFor={itemKey}>
                  <i className={item.class} /> {item.name}
                </label>
              </li>
            )
          })}
        </ul>
        <button onClick={onClick}>{btnLabel}</button>
      </div>
    )
  }
}

CarouselMenu.defaultProps = {
  options: [
    { name: 'home', class: 'fa fa-home ' },
    { name: 'comment', class: 'fa fa-comment ' },
    { name: 'play', class: 'fa fa-play ' },
    { name: 'camera', class: 'fa fa-camera ' },
    { name: 'music', class: 'fa fa-music ' },
    { name: 'user', class: 'fa fa-user ' },
    { name: 'empire', class: 'fab fa-empire' },
    { name: 'knight', class: 'fa fa-bell ' }
  ],
  startAngle: -90,
  btnLabel: 'OPTIONS',
  itemColor: '#a4d5f9',
  itemColorChecked: '#5cb85c',
  itemTextColor: '#222',
  itemTextColorChecked: '#fff'
}

export default CarouselMenu
