import React from 'react'

const Row = ({ children, title }) => (
  <div className="row">
    <div>{title}</div>
    {children}{' '}
  </div>
)
export default Row
