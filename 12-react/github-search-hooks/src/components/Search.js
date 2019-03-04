import React, { useState } from 'react';

export default (props) => {

  // the constructor is replaced by this line
  const [username, setUsername] = useState('coldhead');

  // The underscore tells you that this is an event handler, it will be binded and called inside the render
  const _handleChange = (e) => {
    setUsername(e.target.value);
  }

  const _handleSubmit = (e) => {
    e.preventDefault();

    // Now username comes from the useState function
    props.history.push(`/details/${ username }`);
  }

  return (
    <div className="search">
      <h2>Search GitHub by UserName NOW WITH HOOKS</h2>
      <form onSubmit={ _handleSubmit } >
        <input
          type="search"
          onChange={ _handleChange }
          value={ username }
        />
      <button>Search for { username }</button>
      </form>
    </div>
  );
  
}
