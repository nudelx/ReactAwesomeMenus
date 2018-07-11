import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import Menu from '../common/menu'
import './circularMenu.css'

class CircularMenu extends Component {
  constructor(props) {
    super(props)
    this.opt = {
      radius: 120,
      total: props.options.length,
      optimalAlphaStep: 35,
      startAlpha: props.startAngle,
      currentAlpha: props.startAngle,
      direction: props.itemsDirection === 'right' ? 1 : -1,
      radian: 180 / Math.PI
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
      <div
        id="circularMenu"
        className={`circular-menu ${
          spinDirection === 'right' ? spinDirection : 'left'
        } ${halfSpin ? 'half' : 'third'} ${active ? 'active' : ''}`}
        style={{
          backgroundColor: active ? menuColor || btnColor : 'inherit',
          borderRadius: '50%'
        }}>
        <FloatingButton
          onclick={onClick}
          btnIcon={btnIcon}
          bgColor={btnColor}
        />
        <Menu>
          {options.map((item, index) => {
            const { x, y } = this.doMath(index, this.opt)

            return (
              <button
                key={`${item.name}_${index}`}
                id={item.name}
                href="#"
                onClick={onSelect}
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
  btnIcon: 'fas fa-bars',
  btnColor: '#FF86B2',
  startAngle: -90
}

CircularMenu.propTypes = {
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

export default CircularMenu
