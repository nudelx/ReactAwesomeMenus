import React from 'react'

const Box = ({ children, seporator }) => (
  <div className={'box'}>
    {children}
    {seporator ? <div className="seporator" /> : null}
  </div>
)

export default Box
