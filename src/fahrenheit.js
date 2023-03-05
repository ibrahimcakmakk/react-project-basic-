import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Fahrenheit={-(this.props.info*1.8 + 32)}</h3>
      </div>
    )
  }
}
