import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onclick, buttonIcon, bgColor }) => (
  <a
    className="floating-btn"
    onClick={onclick}
    style={{ backgroundColor: bgColor }}>
    <i className={`${buttonIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  buttonIcon: 'far-plus',
  bgColor: '#3544fd'
}

export default FloatingButton
