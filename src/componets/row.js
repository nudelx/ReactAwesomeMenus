import React from 'react'

const Row = ({ children, title }) => (
  <div className="row">
    <div className="row-title">{title}</div>
    {children}{' '}
  </div>
)
export default Row
