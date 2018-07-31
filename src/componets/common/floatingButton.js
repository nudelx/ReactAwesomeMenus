import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onClick, btnIcon, bgColor, btnColor }) => (
  <a
    className="floating-btn"
    onClick={onClick}
    style={{ backgroundColor: bgColor, color: btnColor }}>
    <i style={{ color: btnColor }} className={`${btnIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  btnIcon: 'fas fa-plus',
  bgColor: '#3544fd',
  btnColor: '#fff'
}

export default FloatingButton
