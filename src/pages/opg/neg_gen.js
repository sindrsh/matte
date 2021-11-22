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
	const [ad, setAd] = useState('');		
	const [sub, setSub] = useState('');
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('ad',ad);
    localStorage.setItem('sub',sub);
  });

  if(isLoaded){
  	return (
  		 <Layout>
					<div>
					<p> <b> Skriv inn ønska tittel og antal oppgåver (9 er maks) frå kvar kategori.  </b> </p>
						<form >
						  <label>
						  Tittel &nbsp;
						    <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
						  </label>
						  </form>
						  
						 <ValInput val={ad} ch={setAd} title='Addisjon'/> 
						 
						 <ValInput val={sub} ch={setSub} title='Subtraksjon'/> 
			<button>			  
					<Link
      to={"../../opg/neg_out/"}
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
