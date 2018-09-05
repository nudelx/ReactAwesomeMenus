import React from 'react'

const Card = ({ children, title }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    {children}{' '}
  </div>
)
export default Card
