import React, { Component } from 'react'; // Destructuring: I wany something called "Component" that includes react for me. The const Component variable is not necessary anymore.

// const Component = React.Component;

// <HelloWorld />
// You need to include the slash like a self-closing tag or React cracks the shits.
class HelloWorld extends Component {
  // Every react component must have a metjod called "render()"
  render() {
    return (
      <h1>HelloWorld</h1>
    );
  }
}

export default HelloWorld;
