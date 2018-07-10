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
      <div>
        <a href="https://github.com/nudelx/ReactAwesomeMenus">
          <i class="fas fa-code" />
        </a>{' '}
        <a href="https://github.com/nudelx">
          <i class="fab fa-github" />
        </a>{' '}
        <a href="https://twitter.com/_nudelx_">
          <i class="fab fa-twitter" />
        </a>{' '}
        <a href="https://www.linkedin.com/in/alexnudelm/">
          <i class="fab fa-linkedin" />
        </a>{' '}
      </div>
    </h2>
  </div>
)

export default Welcome
