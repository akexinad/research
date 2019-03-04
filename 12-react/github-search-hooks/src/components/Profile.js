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
      .then( (result) => {
        console.log(result.data);
        this.setState({
          user: result.data,
        })
      });

    Github.getUserRepos(username)
      .then( (result) => {
        // console.log(result);
        this.setState({
          repos: result.data,
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

        <UserInfo
          user={ this.state.user }
        />

        <Repositories
          repos={ this.state.repos }
        />
      </div>
    );
  }
}

const UserInfo = (props) => {
  if (props.user === null) {
    return(
      <div className="info-loading">
        Loading...
      </div>
    )
  }

    // Example of Destructuring below.
const { login, followers, following, public_repos, public_gists } = props.user;

  return (
    // <h3>User Info Coming Soon</h3>
    <div className="info">
      <h3>Stats for { login }</h3>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Repos: { public_repos }</p>
      <p>Gists: { public_gists }</p>
    </div>
  );

}

const Repositories = (props) => {

  if (props.repos === null) {
    return (
      <div className="repo-loading">
        Loading...
      </div>
    )
  }

  const userRepos = props.repos.map( (repo) => {
    return (
      <li key={ repo.id }>
        <a
          href={ repo.html_url }
          target="_blank"
          rel="noopener noreferrer"
        >
        { repo.name }
        </a>
      </li>
    )
  })

  return(
    // <h3>Repo's Coming Soon</h3>
    <div className="repos">
      <h3>User Repositories</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  );

}
