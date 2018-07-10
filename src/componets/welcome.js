import React from 'react'
const Emoji = () => (
  <span role="img" aria-label="Heart">
    {'❤️ '}
  </span>
)
const Welcome = () => (
  <div className={'welcome'}>
    <h1 className={'welcome-h1'}>Welcome to React Awesome Menus</h1>
    <h2 className={'welcome-h2'}>
      Made with <Emoji />
      by Alex Nudelman (<a href="https://github.com/nudelx">nudelx</a>)
    </h2>
  </div>
)

export default Welcome
