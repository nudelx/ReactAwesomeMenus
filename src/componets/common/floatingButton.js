import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onClick, btnIcon, bgColor }) => (
  <a
    className="floating-btn"
    onClick={onClick}
    style={{ backgroundColor: bgColor }}>
    <i className={`${btnIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  btnIcon: 'fas fa-plus',
  bgColor: '#3544fd'
}

export default FloatingButton
