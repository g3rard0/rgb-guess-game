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
      // colors.push(getColor());
      colors.push({ color: getColor() });
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
      gameMessage: '',
      isGameOver: false
    });
  };

  handleGameMessage = (message) => {
    this.setState({ gameMessage: message });
  }

  handleWrongColor = (i) => {
    let colors = [...this.state.colors];
    colors[i].clicked = true;
    console.log(JSON.stringify(colors, null, 2));
    this.setState({ colors });
  }

  hancldeCorrectColor = () => {
    console.log('user has picked the correct color')
    this.setState({ isGameOver: true })
  }
  render() {
    let { winningColor, isGameOver, mode, gameMessage } = this.state;
    console.log(this.state.colors)
    return (
      <div>
        <Header color={this.state.colors[winningColor].color} />
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
            handleWrongColor={this.handleWrongColor}
            hancldeCorrectColor={this.hancldeCorrectColor}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
