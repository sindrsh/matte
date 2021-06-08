import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2'

function Example() {

	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Ad2];
	let upd_data = [];
	let upd_funclist = [];
	
	function ExTitle(){ return (<p> <b>Oppgåve {cnt}</b> </p>)}

	function MkInt(k){
	 let n = parseInt(k);
	 return n;
	}

	function getRndInteger(min, max) {
	  let randm = Math.floor(Math.random() * (max+1 - min) ) + min;
	  return parseInt(randm);
	}
	
	function Ad2(k){
		let exs = [];
		exs.push(ExTitle());
		let ad1, ad10, ad1a, ad10a;
		for (let i = 1; i <= k; i++) {
			ad10 = getRndInteger(1,9);
			ad10a = getRndInteger(0,9-ad10);
			if (ad10a===0){
				ad10a='';
				ad1 = getRndInteger(0,8);
				ad1a = getRndInteger(1,9-ad1);
				}
			else {
			ad10a = ad10a.toString();
			ad1 = getRndInteger(0,9);
			ad1a = getRndInteger(0,9-ad1);
			}
			
			ad1 = ad1.toString();
			ad10 = ad10.toString();
			ad1a = ad1a.toString();
			
			let s = ad10a+ad1a+'+'+ad10+ad1; 
			if (getRndInteger(0,1) === 0){
				s = ad10+ad1+'+'+ad10a+ad1a;
			}
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function MkExcs(i,n){
		cnt +=1;
		let k = MkInt(n);
		let m = MkInt(i);
		let exs = upd_funclist[m](k);
		return (<div style={{marginLeft: leftTotal}}> {exs} </div>)
	}
	
	// ---------------------------------------
  const [isLoaded, setLoaded] = useState(false);

   useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);

  if(isLoaded){
  
  let variables = ['ad2'];
	let data = [];
	let x;
		for (x in variables){
			data.push(localStorage.getItem(variables[x]))
			}
			
		for (let i = 0; i < data.length; i++){
					if (data[i]){
						upd_data.push(data[i]);
						upd_funclist.push(funclist[i]);
					}
				}
	
	let exs = [];
	for (let i = 0; i < upd_data.length; i++){
				exs.push(MkExcs(i,upd_data[i]));
			}
  
  return (
    <div>
      <h1 style={{marginLeft: '25px', fontSize:'24px'}}> {localStorage.getItem('title')} </h1>
      {exs}
    </div>
  );
  }
  return (
    <div>
		<p> Oh no, your browser does'nt support this function</p>   
    </div>
  );
}

export default Example
