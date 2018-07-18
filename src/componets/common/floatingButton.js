import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onclick, btnIcon, bgColor }) => (
  <a
    className="floating-btn"
    onClick={onclick}
    style={{ backgroundColor: bgColor }}>
    <i className={`${btnIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  btnIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  btnIcon: 'far-plus',
  bgColor: '#3544fd'
}

export default FloatingButton
