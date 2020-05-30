import React, { Component } from 'react';

export default class VegContainer extends Component {
  constructor() {
    super();
    this.state = {
      one: 1,
    };
    this.notState = {
      two: 2,
    };
  }

  render() {
    return (
      <p>
        helloworld {this.state.one} {this.notState.two}
      </p>
    );
  }
}
