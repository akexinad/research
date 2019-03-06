import React, { useState, useEffect } from 'react';
import Github from '../utils.js';

const RUN_ONCE = [];

export default (props) => {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [dataLoaded, dataLoadedComplete] = useState(false);

  useEffect( () => {

    const username = props.match.params.username;

    Github.getUserInfo(username).then( result => {
      setUser(result.data);
    });

    Github.getUserRepos(username).then( result => {
      setRepos(result.data);
    })


  }, RUN_ONCE);  // The empty array causes the useEffect callback to only run once. Magic.



  return (
    <div className="profile">
      <h2>GitHub User Details</h2>

      <UserInfo
        user={ user }
      />

      <Repositories
        repos={ repos }
      />
    </div>
  )
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
