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
	const [ad3, setAd3] = useState('');
	const [ad2wc, setAd2wc] = useState('');
	const [ad2mix, setAd2mix] = useState('');
	const [ad3mix, setAd3mix] = useState('');
	const [sub2, setSub2] = useState('');
	
	
  useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('title',title);
    localStorage.setItem('ad2',ad2);
    localStorage.setItem('ad3',ad3);
    localStorage.setItem('ad2wc',ad2wc);
    localStorage.setItem('ad2mix',ad2mix);
    localStorage.setItem('ad3mix',ad3mix);
    localStorage.setItem('sub2',sub2);
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
						 
						 <ValInput val={ad3} ch={setAd3} title='Addisjon med 3 siffer, utan tiarovergongar'/> 
						 
						 <ValInput val={ad2wc} ch={setAd2wc} title='Addisjon med 2 siffer, med tiarovergongar'/>
						 
						 <ValInput val={ad2mix} ch={setAd2mix} title='Addisjon med 2 siffer, blanda'/>
						 
						 <ValInput val={ad3mix} ch={setAd3mix} title='Addisjon med 2 siffer, blanda'/>
						 
						  <ValInput val={sub2} ch={setSub2} title='Subtraksjon med 2 siffer, utan tiarovergong'/>
			
			<button>			  
					<Link
      to={"/pdf_out/"}
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
