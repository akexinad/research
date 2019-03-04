import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Search from './components/Search.js';
import Profile from './components/Profile.js';

import './index.css';

// the ':' in the route means that it is dynamic

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route path="/details/:username" component={ Profile } />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
