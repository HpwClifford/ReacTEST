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
        {/* // snails hiding in fiddleheads 
        <Fiddlehead />

        // tigers and nuts 
        <TigerNut />

        // dragons and carrots, maybe pass carrot and dragon in as a prop, then in carrot it can be passed down to a rabbit or something
        <DragonCarrot />

        <Melon /> */}
        helloworld {this.state.one} {this.notState.two}
      </p>
    );
  }
}
