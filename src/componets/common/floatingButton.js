import React from 'react'
import PropTypes from 'prop-types'

const FloatingButton = ({ onclick, buttonAfIcon }) => (
  <a className="floating-btn" onClick={onclick}>
    <i className={`fa ${buttonAfIcon}`} />
  </a>
)

FloatingButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  buttonAfIcon: PropTypes.string
}

FloatingButton.defaultProps = {
  buttonAfIcon: 'fa-plus'
}

export default FloatingButton
