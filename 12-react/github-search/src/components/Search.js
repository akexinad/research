// PROPS ARE ELEMENT ATTRIBUTES //////////////////////

import React, { Component } from 'react';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      username: 'coldhead'
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  // The underscore tells you that this is an event handler, it will be binded and called inside the render
  _handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username);

    // we want to navigate to /details/username
    const username = this.state.username;
    this.props.history.push(`/details/${ username }`);
  }

  render () {
    return (
      <div className="search">
        <h2>Search GitHub by UserName</h2>
        <form onSubmit={ this._handleSubmit } >
          <input
            type="search"
            onChange={ this._handleChange }
            value={ this.state.username }
          />
          <button>Search for user</button>
        </form>
      </div>
    );
  }
}
