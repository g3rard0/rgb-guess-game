import React, { Component } from 'react';
import Header from './Header';
import Controls from './Controls';
import ColorList from './ColorList';
import { getColor, randomNum } from '../helpers';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'easy',
      isGameOver: false,
      gameMessage: '',
    };
    this.state.colors = this.getColors();
    this.state.winningColor = this.getWinningColor();
    console.log(`state, ${JSON.stringify(this.state, null, 2)}`);
  }

  getColorCount = (mode = this.state.mode) => {
    return (mode === 'easy') ? 3 : 6;
  }

  getColors = (mode = this.state.mode) => {
    let colorCount = this.getColorCount(mode);
    let colors = [];
    for (let i = 0; i < colorCount; i++) {
      colors.push(getColor());
    }
    return colors;
  };

  getWinningColor = (mode = this.state.mode) => {
    let colorCount = this.getColorCount(mode);
    return randomNum(0, colorCount-1);
  };

  handleChangeMode = (mode = this.state.mode) => {
    this.handleResetColors(mode);
  };

  handleResetColors = (mode) => {
    console.log(mode)
    let newColors = this.getColors(mode);
    let newWinningColor = this.getWinningColor(mode);
    this.setState({
      mode: mode,
      colors: newColors,
      winningColor: newWinningColor,
      gameMessage: ''
    });
  };

  handleGameMessage = (message) => {
    console.log('game message');
    this.setState({ gameMessage: message });
  }

  render() {
    let { winningColor, isGameOver, mode, gameMessage } = this.state;
    console.log(this.state.colors)
    return (
      <div>
        <Header color={this.state.colors[winningColor]} />
        <Controls
          isGameOver={isGameOver}
          mode={mode}
          changeMode={this.handleChangeMode}
          gameMessage={gameMessage}
        />
        <div className="game">
          <div className="container">
          <ColorList
            colors={this.state.colors}
            winningColorIndex={winningColor}
            isGameOver={isGameOver}
            changeMessage={this.handleGameMessage}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
