import React, { Component } from 'react';
import Header from './Header';
import Controls from './Controls';
import { getColor, randomNum } from '../helpers';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'easy',
      gameOver: false,
    };
    this.state.colors = this.getColors();
    this.state.winningColor = this.getWinningColor();
    console.log(`state, ${JSON.stringify(this.state, null, 2)}`);
  }

  getColorCount = () => {
    return (this.state.mode === 'easy') ? 3 : 6;
  }

  getColors = () => {
    let colorCount = this.getColorCount();
    let colors = [];
    for (let i = 0; i < colorCount; i++) {
      colors.push(getColor());
    }
    return colors;
  };

  getWinningColor = () => {
    let colorCount = this.getColorCount();
    // console.log(randomNum(0, colorCount-1));
    return randomNum(0, colorCount-1);
  };

  render() {
    let { winningColor } = this.state;
    return (
      <div>
        <Header color={this.state.colors[winningColor]} />
        <Controls />
        Game container
      </div>
    );
  }
}

export default Game;
