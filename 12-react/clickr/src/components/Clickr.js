import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    /* oh */ super(); // This calls the original constructor from Component().
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  // Event handlers start with an _ BY CONVENTION.
  _incrementClicks() {
    // this.state.clicks += 1; WRONG. You cannot mutate state directly (React will not notice)
    this.setState({ clicks: this.state.clicks + 1 })
  }

  render() {
    return (
      <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
