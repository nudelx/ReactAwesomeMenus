import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onclick, buttonAfIcon, bgColor }) => (
  <a
    className="floating-btn"
    onClick={onclick}
    style={{ backgroundColor: bgColor }}>
    <i className={`fa ${buttonAfIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  buttonAfIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  buttonAfIcon: 'fa-plus',
  bgColor: '#3544fd'
}

export default FloatingButton
