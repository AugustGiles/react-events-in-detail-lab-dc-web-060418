// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

  clickHandler = (e) => {
    e.persist()
    return setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return(
      <button onClick={this.clickHandler}>Delay Click</button>
    )
  }

}

export default DelayedButton
