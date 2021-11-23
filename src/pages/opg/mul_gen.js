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
	const [mul21, setMul21] = useState('');
	const [mul31, setMul31] = useState('');
	const [mul22, setMul22] = useState('');			
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('mul21',mul21);
    localStorage.setItem('mul31',mul31);
    localStorage.setItem('mul22',mul22);
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
						  
	<ValInput val={mul21} ch={setMul21} title='Multiplikasjon, 2*1 siffer'/>
	<ValInput val={mul31} ch={setMul31} title='Multiplikasjon, 3*1 siffer'/>
	<ValInput val={mul22} ch={setMul22} title='Multiplikasjon, 2*2 siffer'/>					  					 
			<button>			  
					<Link
      to={"../../opg/mul_out/"}
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
