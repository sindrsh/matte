import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
	
  if(isClient && typeof localStorage !=='undefined'){
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {localStorage.getItem('title')}
      </button>
    </div>
  );
  }
  return null;
}

export default Example
