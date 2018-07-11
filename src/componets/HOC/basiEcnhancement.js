import React, { Component } from 'react'
// import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const enhanceWithBasic = WrappedComponent => {
  class WithBasicEnhancement extends Component {
    constructor(props) {
      super(props)
      this.state = { active: false }

      this.radius = 120
      this.total = props.options.length
      this.optimalAlphaStep = 35
      this.startAlpha = props.startAngle
      this.currentAlpha = this.startAlpha
      this.direction = props.itemsDirection === 'right' ? 1 : -1
      this.radian = 180 / Math.PI
    }
    onclick = () => this.setState({ active: !this.state.active })
    onSelect = e => this.setState({ active: false, selected: e.target.id })
    calculatePosition(alpha) {
      return {
        x: this.radius * Math.cos(alpha / this.radian),
        y: this.radius * Math.sin(alpha / this.radian)
      }
    }
    calculateAlpha = index => {
      this.currentAlpha = index === 0 ? this.startAlpha : this.currentAlpha
      this.currentAlpha = this.currentAlpha >= 360 ? 0 : this.currentAlpha
      const position = this.calculatePosition(this.currentAlpha)
      this.currentAlpha += this.optimalAlphaStep * this.direction
      return position
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onClick={this.onclick}
          onSelect={this.onSelect}
          calculateAlpha={this.calculateAlpha}
        />
      )
    }
  }

  WithBasicEnhancement.displayName = `WithBasicEnhancement(${getDisplayName(
    WrappedComponent
  )})`

  WithBasicEnhancement.defaultProps = {
    options: [
      { name: 'facebook', class: 'fab fa-facebook' },
      { name: 'twitter', class: 'fab fa-twitter' },
      { name: 'google', class: 'fab fa-google-plus' },
      { name: 'linkedin', class: 'fab fa-linkedin' },
      { name: 'rebel', class: 'fab fa-rebel' },
      { name: 'empire', class: 'fab fa-empire' },
      { name: 'react', class: 'fab fa-react' }
    ],
    halfSpin: false,
    spinDirection: 'right',
    itemsDirection: 'right',
    btnIcon: 'fas fa-bars',
    btnColor: '#FF86B2',
    startAngle: -90
  }
  return WithBasicEnhancement
}

export default enhanceWithBasic
