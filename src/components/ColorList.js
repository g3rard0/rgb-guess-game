import React, { Component } from 'react';

class ColorList extends Component {
  isWinningColor = (colorArr, i) => {
    let { isGameOver, colors, winningColorIndex} = this.props;

    if (!isGameOver && !colors[i].clicked) {
      let isWinningColor = (colorArr === colors[winningColorIndex].color);

      let message = isWinningColor ? 'Correct' : 'Try Again';
      this.props.changeMessage(message);
      if (isWinningColor) {
        this.props.hancldeCorrectColor();
      } else {
        this.props.handleWrongColor(i);
      }
    }
  };

  renderColor(colorObj, i) {
    let [r,g,b] = colorObj.color;
    let { color } = colorObj;
    let style = {};
    if (!colorObj.clicked) {
      style.background = `rgb(${r},${g},${b})`;
    }
    return (
      <li
        key={i}
        className={`color ${!colorObj.clicked ? 'box-shadow' : ''}`}
        style={style}
        onClick={() => this.isWinningColor(color, i)}
        >
        {/*color {color.join(",")}*/}
      </li>
    );
  }
  render() {
    return (
      <div>
        <ul className="color-list">
          {this.props.colors.map((colorObj, i) => this.renderColor(colorObj, i))}
        </ul>
        {/*<pre>{JSON.stringify(this.props.colors, null, 2)}</pre>*/}
      </div>
    );
  }
}

export default ColorList;
