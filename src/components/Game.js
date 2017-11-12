import React, { Component } from 'react';
import Header from './Header';
import Controls from './Controls';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Controls />
        Game container
      </div>
    );
  }
}

export default Game;
