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
	const [mul11u, setMul11u] = useState('');
	const [mul11, setMul11] = useState('');
	const [mul21, setMul21] = useState('');
	const [mul31, setMul31] = useState('');
	const [mul22, setMul22] = useState('');
	const [mulDesTens, setMulDesTens] = useState('');				
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('mul11u',mul11u);
    localStorage.setItem('mul11',mul11);
    localStorage.setItem('mul21',mul21);
    localStorage.setItem('mul31',mul31);
    localStorage.setItem('mul22',mul22);
    localStorage.setItem('mulDesTens',mulDesTens);
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

<ValInput val={mul11u} ch={setMul11u} title='Multiplikasjon, 1*1 siffer. (Uten fasit)'/>
	<ValInput val={mul11} ch={setMul11} title='Multiplikasjon, 1*1 siffer'/>						  
	<ValInput val={mul21} ch={setMul21} title='Multiplikasjon, 2*1 siffer'/>
	<ValInput val={mul31} ch={setMul31} title='Multiplikasjon, 3*1 siffer'/>
	<ValInput val={mul22} ch={setMul22} title='Multiplikasjon, 2*2 siffer'/>	
	<ValInput val={mulDesTens} ch={setMulDesTens} title='Multiplikasjon, desimaltal og 10, 100 eller 1000'/>	
					  					 
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
