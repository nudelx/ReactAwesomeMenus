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
      this.radian = 180 / Math.PI
    }

    componentDidUpdate(prevProps, prevState) {
      const { onChange } = this.props
      if (
        typeof onChange === 'function' &&
        this.state.selected !== prevState.selected
      ) {
        onChange(this.state.selected)
      }
    }

    onclick = () => this.setState({ active: !this.state.active })
    onSelect = e => this.setState({ active: false, selected: e.target.id })

    calculatePosition = ({ alpha, radius, radian, offSet = 0 }) => {
      return {
        x: radius * Math.cos(alpha / this.radian) + offSet,
        y: radius * Math.sin(alpha / this.radian) + offSet
      }
    }
    calculateAlpha = ({ index, currentAlpha, startAlpha }) => {
      currentAlpha = index === 0 ? startAlpha : currentAlpha
      currentAlpha = currentAlpha >= 360 ? 0 : currentAlpha
      return currentAlpha
    }

    calculateNextStep = ({
      index,
      currentAlpha,
      startAlpha,
      radius,
      offSet,
      optimalAlphaStep,
      direction
    }) => {
      const alpha = this.calculateAlpha({
        index,
        currentAlpha,
        startAlpha
      })

      const position = this.calculatePosition({
        alpha,
        radius,
        offSet
      })
      position.nextAlpha = alpha + optimalAlphaStep * direction
      return position
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onClick={this.onclick}
          onSelect={this.onSelect}
          calculateNextStep={this.calculateNextStep}
        />
      )
    }
  }

  WithBasicEnhancement.displayName = `WithBasicEnhancement(${getDisplayName(
    WrappedComponent
  )})`

  return WithBasicEnhancement
}

export default enhanceWithBasic
