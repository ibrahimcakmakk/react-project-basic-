import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h3>Kelvin={this.props.info +273.15}</h3>
      </div>
    )
  }
}
