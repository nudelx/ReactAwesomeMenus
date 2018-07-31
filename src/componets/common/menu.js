import React from 'react'

const Menu = ({ children, className }) => (
  <menu className={`items-wrapper ${className}`}>{children}</menu>
)

export default Menu
