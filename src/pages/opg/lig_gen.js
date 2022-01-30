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
	const [lig1, setLig1] = useState('');
	const [lig2, setLig2] = useState('');
	const [lig3, setLig3] = useState('');
	const [lig4, setLig4] = useState('');			
			
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('lig1',lig1);
    localStorage.setItem('lig2',lig2);
    localStorage.setItem('lig3',lig3);
    localStorage.setItem('lig4',lig4);
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
						  
			<ValInput val={lig1} ch={setLig1} title='Likningar, tre tal, x'/>
			<ValInput val={lig2} ch={setLig2} title='Likningar, fire tal, x'/>				  				<ValInput val={lig3} ch={setLig3} title='Likningar, fire tal, a*x'/>
			<ValInput val={lig4} ch={setLig4} title='Likningar, fire tal, a*x, omvend'/>	 
			<button>			  
					<Link
      to={"../../opg/lig_out/"}
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
