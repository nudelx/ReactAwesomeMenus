import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import './flowerMenu.css'

class FlowerMenu extends Component {
  constructor(props) {
    super(props)

    this.opt = {
      radius: 144,
      total: props.options.length,
      optimalAlphaStep: 360 / props.options.length,
      startAlpha: props.startAngle,
      currentAlpha: props.startAngle,
      direction: props.itemsDirection === 'right' ? 1 : -1
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

  render() {
    const {
      options,
      btnIcon,
      btnColor,
      btnBgColor,
      active,
      onClick,
      btnTxtColor
    } = this.props

    return (
      <div className={`flower ${active ? 'active' : ''}`}>
        <div className="inner">
          <div className="spinner">
            {options.map((item, index) => {
              const { calculatedAlpha } = this.doMath(index, this.opt)
              return (
                <div
                  key={`item_${index}_${item.name}`}
                  className="child"
                  style={{
                    transform: active
                      ? `rotate(${calculatedAlpha}deg)`
                      : `rotate(${-calculatedAlpha}deg)`
                  }}>
                  <div
                    className="leaf"
                    style={{
                      transform: active
                        ? `rotate(360deg) translateX(${this.opt.radius}px) `
                        : '',
                      backgroundColor: item.color,
                      backgroundSize: '100%',
                      opacity: '0.94',
                      transition:
                        'transform 1.5s ease-in-out, box-shadow 0.16s ease-in-out, visibility 1.5s linear'
                    }}>
                    <i
                      className={item.class}
                      style={{
                        color: btnTxtColor
                      }}
                    />
                    <div
                      className="glass-holder"
                      style={{
                        transform: active
                          ? `rotate(${calculatedAlpha}deg)`
                          : `rotate(${-calculatedAlpha}deg)`,
                        height: '100%'
                      }}>
                      <div className="counterspin">
                        <div
                          className="glass"
                          style={{
                            transform: active
                              ? 'rotate(270deg)'
                              : 'rotate(-270deg)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="cover">
            {' '}
            <FloatingButton
              onClick={onClick}
              bgColor={btnBgColor}
              btnColor={btnColor}
              btnIcon={btnIcon}
            />
          </div>
        </div>
      </div>
    )
  }
}
FlowerMenu.defaultProps = {
  options: [
    { name: 'facebook', class: 'fab fa-facebook fa-4x', color: '#4089c8' },
    { name: 'twitter', class: 'fab fa-twitter fa-4x', color: '#787528' },
    { name: 'google', class: 'fab fa-google-plus fa-4x', color: '#ae92be' },
    { name: 'linkedin', class: 'fab fa-linkedin fa-4x', color: '#647692' },
    { name: 'rebel', class: 'fab fa-rebel fa-4x', color: '#c4858c' },
    { name: 'empire', class: 'fab fa-empire fa-4x', color: '#4089c8' },
    { name: 'react', class: 'fab fa-react fa-4x', color: '#8992a3' }
  ],
  btnIcon: 'fab fa-jedi-order fa-4x',
  btnColor: '#fff',
  btnBgColor: '#398963',
  btnTxtColor: '#ffffff',
  startAngle: -90,
  itemsDirection: 'right'
}

FlowerMenu.propTypes = {
  onChange: PropTypes.func,
  halfSpin: PropTypes.bool,
  spinDirection: PropTypes.string,
  btnColor: PropTypes.string,
  itemsDirection: PropTypes.string,
  btnIcon: PropTypes.string,
  startAngle: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default FlowerMenu
