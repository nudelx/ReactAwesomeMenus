import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingButton from '../common/floatingButton'
import Menu from '../common/menu'
import './circularMenu.css'

class CircularMenu extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { onChange } = this.props
    if (
      typeof onChange === 'function' &&
      this.props.selected !== prevProps.selected
    ) {
      onChange(this.props.selected)
    }
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
      onSelect,
      calculateAlpha
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
            const { x, y } = calculateAlpha(index)
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
