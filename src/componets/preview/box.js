import React from 'react'

const Box = ({ children, seporator }) => (
  <div className={'box'}>
    {seporator ? <div className="seporator" /> : null}
    {children}
  </div>
)

export default Box
