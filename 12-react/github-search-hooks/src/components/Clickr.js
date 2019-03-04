//////////////////// INTRODUCING HOOKS!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////////////////////////////////////////////////

import React, { useState } from 'react';

export default () => {

  // clicks holds the value, setClicks is a function that is called that changes the state which is currently set at zero
  const [clicks, setClicks] = useState( 0 );

  console.log('functional component has been called', clicks);

  const _incrementClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <button onClick={ _incrementClicks } >{ clicks } clicks so far</button>
  );
};
