import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js'; // ./ means look in the currrent directory.
import HelloUser from './HelloUser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld />
          <HelloUser name="Groucho" />
          <HelloUser name="Fellini" />
          <HelloUser name="Benigni" />
          <HelloUser />
        </header>
      </div>
    );
  }
}



export default App;
