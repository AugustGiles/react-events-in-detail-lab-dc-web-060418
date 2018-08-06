// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

  clickHandler = (e) => {
    let data = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(data)
  }

  render() {
    return(
      <button onClick={this.clickHandler}>Coordinates</button>
    )
  }

}

export default CoordinatesButton
