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
      optimalAlphaStep: 35,
      startAlpha: props.startAngle,
      currentAlpha: props.startAngle,
      direction: props.itemsDirection === 'right' ? 1 : -1
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
            <div className="child">
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
            </div>
          </div>
          <div className="cover" onClick={onClick} />
        </div>
      </div>
    )
  }
}
FlowerMenu.defaultProps = {
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
