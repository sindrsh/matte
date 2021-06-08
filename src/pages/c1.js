import React, { useState, useEffect } from 'react';
import Link from "gatsby-link"
import Layout from "../components/layout"

const ValInput = (props) =>(
	<form >
		   <label>
		      <input maxlength='1' size='1' type="text" value={props.val} onChange={event => props.ch(event.target.value)} />
		     &nbsp; {props.title}
		    </label>
		    </form>
		    )

function Example() {
  const [isLoaded, setLoaded] = useState(false);

	const [title, setTitle] = useState('');	
	const [ad2, setAd2] = useState('');		
	
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('ad2',ad2);
  });

  if(isLoaded){
  	return (
  		 <Layout>
					<div>
						<form >
						  <label>
						  Tittel &nbsp;
						    <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
						  </label>
						  </form>
						  
						 <ValInput val={ad2} ch={setAd2} title='Addisjon med 2 siffer, utan tiarovergongar'/> 
						  
						<Link to={"/c2/"}> TRYKK </Link>
					</div>
				 </Layout>	
  	);
  }
  return (
    <div>
		<p> Oh no, your browser does'nt support this function</p>   
    </div>
  );
}

export default Example
