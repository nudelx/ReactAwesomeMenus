import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import Menu from '../common/menu'
import './flowerMenu.css'

class FlowerMenu extends Component {
  constructor(props) {
    super(props)
    this.opt = {
      radius: 120,
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
      spinDirection,
      halfSpin,
      btnIcon,
      btnColor,
      menuColor,
      active,
      onClick,
      onSelect
    } = this.props

    return (
      <div className={`flower ${active ? 'active' : ''}`}>
        <div className="inner">
          <div className="spinner">
            {options.map((item, index) => {
              const { calculatedAlpha } = this.doMath(index, this.opt)
              return (
                <div
                  className="child"
                  style={{
                    transform: active ? `rotate(${calculatedAlpha}deg)` : ''
                  }}>
                  <div
                    className="leaf"
                    style={{
                      transform: active
                        ? `rotate(${calculatedAlpha}deg) translateX(144px) rotate(2250deg)`
                        : '',
                      backgroundColor: item.color,
                      backgroundSize: '100%',
                      opacity: '0.94',
                      transition:
                        'transform 3.2s ease-in-out, box-shadow 0.16s ease-in-out, visibility 3.2s linear'
                    }}>
                    <i
                      className={item.class}
                      style={{
                        color: 'white'
                      }}
                    />
                    <div
                      className="glass-holder"
                      style={{
                        transform: active
                          ? `rotate(${calculatedAlpha}deg)`
                          : '',
                        height: '100%'
                      }}>
                      <div className="counterspin">
                        <div className="glass" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="child">
              <a className="leaf" href="https://fb.me/tknomad" target="_blank">
                <img
                  src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/fb.svg"
                  alt="Facebook"
                />
                <div className="glass-holder">
                  <div className="counterspin">
                    <div className="glass" />
                  </div>
                </div>
              </a>
            </div>
            <div className="child">
              <a
                className="leaf"
                href="https://twitter.com/tknomad"
                target="_blank">
                <img
                  src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/bird.svg"
                  alt="Twitter"
                />
                <div className="glass-holder">
                  <div className="counterspin">
                    <div className="glass" />
                  </div>
                </div>
              </a>
            </div>
            <div className="child">
              <a
                className="leaf"
                href="https://www.flickr.com/photos/the-specious"
                target="_blank">
                <img
                  src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/photos.svg"
                  alt="Flickr"
                />
                <div className="glass-holder">
                  <div className="counterspin">
                    <div className="glass" />
                  </div>
                </div>
              </a>
            </div>
            <div className="child">
              <a
                className="leaf"
                href="https://github.com/specious"
                target="_blank">
                <img
                  src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/octocat.svg"
                  alt="GitHub"
                />
                <div className="glass-holder">
                  <div className="counterspin">
                    <div className="glass" />
                  </div>
                </div>
              </a>
            </div>
            <div className="child">
              <a
                className="leaf"
                href="https://codepen.io/tknomad"
                target="_blank">
                <img
                  src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/codepen.svg"
                  alt="CodePen"
                />
                <div className="glass-holder">
                  <div className="counterspin">
                    <div className="glass" />
                  </div>
                </div>
              </a>
            </div> */}
          </div>

          <div className="cover">
            {' '}
            <FloatingButton
              onClick={onClick}
              bgColor="#398963"
              btnIcon={'fab fa-jedi-order fa-4x'}
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
  halfSpin: false,
  spinDirection: 'right',
  itemsDirection: 'right',
  btnIcon: 'fas fa-bars',
  btnColor: '#FF86B2',
  startAngle: -90
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
