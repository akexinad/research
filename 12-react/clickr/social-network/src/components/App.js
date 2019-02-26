import React, { Component } from 'react';
import Clock from './Clock.js'
import Profile from './Profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Profile name="Fellini" age="101" motto="No Gods No Masters" pic="http://fillmurray.com/400/400"/>
        <Profile name="Benigni" age="34" motto="No Gods No Masters" pic="http://fillmurray.com/401/401"/>
        <Profile name="Germi" age="56" motto="No Gods No Masters" pic="http://fillmurray.com/399/400"/>
        <Profile name="Pasolini" age="87" motto="No Gods No Masters" pic="http://fillmurray.com/400/401"/>
      </div>
    );
  }
}

export default App;
