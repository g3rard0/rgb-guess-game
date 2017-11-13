import React, { Component } from 'react';

class ColorList extends Component {
  isWinningColor = (colorArr) => {
    let { isGameOver} = this.props;

    if (!isGameOver) {
      let { winningColorIndex, colors } = this.props;
      console.log(colorArr === colors[winningColorIndex]);

      let message = (colorArr === colors[winningColorIndex]) ? 'Correct' : 'Try Again';
      this.props.changeMessage(message);
      if (colorArr === colors[winningColorIndex]) {
        alert('you won');
      } else {
        alert('make color transparent');
      }
    }
  };

  renderColor(colorArr, i) {
    let [r,g,b] = colorArr;
    let style = {
      background: `rgb(${r},${g},${b})`
    };
    return (
      <li
        key={i}
        className="color"
        style={style}
        onClick={() => this.isWinningColor(colorArr)}
        >
        color {colorArr.join(",")}
      </li>
    );
  }
  render() {
    return (
      <div>
        <ul className="color-list">
          {this.props.colors.map((colorArr, i) => this.renderColor(colorArr, i))}
        </ul>
        {/*<pre>{JSON.stringify(this.props.colors, null, 2)}</pre>*/}
      </div>
    );
  }
}

export default ColorList;
