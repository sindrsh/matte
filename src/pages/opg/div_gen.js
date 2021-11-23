import React, { useState, useEffect } from 'react';
import Link from "gatsby-link"
import Layout from "../../components/layout"

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
	const [div21, setDiv21] = useState('');
	const [div31, setDiv31] = useState('');		
			
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('div21',div21);
    localStorage.setItem('div31',div31);
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
						  
			<ValInput val={div21} ch={setDiv21} title='Divisjon, 2:1 siffer'/>
			<ValInput val={div31} ch={setDiv31} title='Divisjon, 3:1 siffer'/>				  					 
			<button>			  
					<Link
      to={"../../opg/div_out/"}
      style={{textDecoration: 'none', display: 'block'}}>
    Lag PDF
    </Link>
    </button>
					</div>
				 </Layout>	
  	);
  }
  return (
    null
);
}

export default Example
