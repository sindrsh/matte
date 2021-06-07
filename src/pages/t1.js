import React, { useState, useEffect } from 'react';
import Link from "gatsby-link"

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  
  const [isClient, setClient] = useState(false);

  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setClient(true)
		}
	}, []);
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    localStorage.setItem('title',count.toString());
  });

  if(isClient){
  	var n = localStorage.getItem('title');
  	return (
  	<div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {localStorage.getItem('title')}, 
      </button>
      <p> </p>
      <Link to={"/t2/"}> TRYKK </Link>
   	{localStorage.getItem('title')}
    </div>
  	);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {n}, 
      </button>
      <p> </p>
      <Link to={"/t2/"}> TRYKK </Link>
   
    </div>
  );
}

export default Example
