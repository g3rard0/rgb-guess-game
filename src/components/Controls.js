import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Controls extends Component {
  updateMode = (mode) => {
    this.props.changeMode(mode);
  };

  resetColors = () => {
    this.updateMode();
  };

  render() {
    let { isGameOver, mode, gameMessage } = this.props;
    return (
      <div className="controls">
        <div className="container">
          <span className="message">
            {!isGameOver && <button className="button" onClick={() => this.resetColors()}>New Colors</button>}
          </span>
          <ul className="modes">
            <li>
              <button className={`button mode-easy ${mode === 'easy' ? 'active': ''}`}
                onClick={() => this.updateMode('easy')}>easy</button>
            </li>
            <li>
              <button className={`button mode-hard ${mode === 'hard' ? 'active': ''}`}
                  onClick={() => this.updateMode('hard')}
                >hard</button>
            </li>
          </ul>
              <span className="game-message">
                <ReactCSSTransitionGroup
                  transitionName="zoom-out"
                  transitionEnterTimeout={200}
                  transitionLeaveTimeout={20}>
                    <div key={Date.now()}>{gameMessage}</div>
                </ReactCSSTransitionGroup>
              </span>
        </div>
      </div>
    );
  }
}

export default Controls;
