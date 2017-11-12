import React, { Component } from 'react';

class Controls extends Component {
  updateMode = (mode) => {
    this.props.changeMode(mode);
  }

  render() {
    let { isGameOver, mode } = this.props;
    return (
      <div className="controls">
        <div className="container">
          <span className="message">
            {!isGameOver && <span onClick={() => alert('clicked')}>New Colors</span>}
          </span>
          <ul className="modes">
            <li className={`mode-easy ${mode === 'easy' ? 'active': ''}`}
              onClick={() => this.updateMode('easy')}
              >easy</li>
            <li className={`mode-hard ${mode === 'hard' ? 'active': ''}`}
              onClick={() => this.updateMode('hard')}
              >hard</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Controls;
