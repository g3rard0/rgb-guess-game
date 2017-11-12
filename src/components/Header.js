import React, { Component } from 'react';

class Header extends Component {
  render() {
    let { color } = this.props
    console.log(color);
    return (
      <header className="header">
        <h2>The Great</h2>
        <h1>RGB ({color.join(",")})</h1>
        <h2>Guessing Game</h2>
      </header>
    );
  }
}

export default Header;
