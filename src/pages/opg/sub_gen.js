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
	const [sub2, setSub2] = useState('');
	const [sub2wc, setSub2wc] = useState('');
	const [sub3, setSub3] = useState('');
	const [sub3wc, setSub3wc] = useState('');		
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('sub2',sub2);
    localStorage.setItem('sub2wc',sub2wc);
    localStorage.setItem('sub3',sub3);
    localStorage.setItem('sub3wc',sub3wc);
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
						  
						 						  <ValInput val={sub2} ch={setSub2} title='Subtraksjon med 2 siffer, utan tiarovergong'/>
						  <ValInput val={sub2wc} ch={setSub2wc} title='Subtraksjon med 2 siffer, med tiarovergong'/>
						  <ValInput val={sub3} ch={setSub3} title='Subtraksjon med 3 siffer, utan tiarovergong'/>
						  <ValInput val={sub3wc} ch={setSub3wc} title='Subtraksjon med 3 siffer, med tiarovergong'/>						 
			<button>			  
					<Link
      to={"../../opg/sub_out/"}
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
