import React, { Component } from 'react';
import Github from '../utils.js';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      repos: null,
    };
  }

  // this function automatically fires when you enter the page
  componentDidMount() {
    // console.log('componentDidMount');

    // XXX: Find the user name.
    // XXX: fetch the user Info.
    // XXX: .then save the response in our state
    const username = this.props.match.params.username;
    Github.getUserInfo(username)
      .then( result => {
        console.log(result.data);
        this.setState({
          user: result.data,
        })
      });
  }

  // this function automatically fires when you leave the page
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      // <h2>{ this.props.match.params.username } Coming Soon</h2>
      <div className="profile">
        <h2>GitHub User Details</h2>
        <UserInfo />
        <Repositories />
      </div>
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <h3>User Info Coming Soon</h3>
    );
  }
}

class Repositories extends Component {
  render() {
    return(
      <h3>Repo's Coming Soon</h3>
    );
  }
}
