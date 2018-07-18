import React from 'react'
import PropTypes from 'prop-types'
import './spinningMenu.css'
class SpinningMenu extends React.Component {
  constructor(props) {
    super(props)
    this.opt = {
      radius: 100,
      optimalAlphaStep: 35,
      offSet: 125,
      direction: 1,
      total: props.options.length,
      startAlpha: props.startAngle,
      currentAlpha: props.startAngle
    }
  }

  doMath(index, opt) {
    const { calculateNextStep } = this.props
    const { x, y, nextAlpha } = calculateNextStep({
      index,
      ...opt
    })
    this.opt.currentAlpha = nextAlpha
    return { x, y }
  }

  render() {
    const {
      options,
      btnBgColor,
      btnborderColor,
      btnIcon,
      itemColor,
      ringBgColor,
      active,
      onClick,
      onSelect
    } = this.props
    return (
      <div className={`circle ${active ? 'open' : ''}`}>
        <div className="ring" style={{ backgroundColor: ringBgColor }}>
          {options.map((item, index) => {
            const { x, y } = this.doMath(index, this.opt)

            return (
              <button
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                onClick={onSelect}
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
          onClick={onClick}
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
  ringBgColor: PropTypes.string
}

export default SpinningMenu
