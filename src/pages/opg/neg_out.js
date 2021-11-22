import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2'

function Addition() {

	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Ad,Sub];
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
	
	function Ad(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		let a, b, a_s, b_s;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(1,9);
			a_s = a.toString();
			b_s = b.toString();
			
			let s;
			if (getRndInteger(0,1) === 0){
				s = '-'+a_s+'+'+b_s;
				fas.push(<p> {-a+b} </p>)
			}
			else{
				s = a_s + '+(-' +b_s +')';
				fas.push(<p> {a-b} </p>);
			}
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return [exs, fas];
	}
	
	function Sub(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		
		let a, a_s, b, b_s;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(1,9);
			let biggerA = a > b;
			a_s = a.toString();
			b_s = b.toString();
			
			let s;
			let rand = getRndInteger(0,3);			
			if (rand === 0){
				s = '-'+a_s+'-'+b_s;
				fas.push(<p> {-a-b} </p>);
			}
			else if (rand === 1){
				s = a_s+'-'+b_s;
				if (biggerA) {
					s = b_s+'-'+a_s;
				}
				fas.push(<p> {-Math.abs(a-b)} </p>);
			}
			else if (rand === 2){
				s = '-'+a_s+'-'+b_s;
				fas.push(<p> {-a-b} </p>);
			}
			else {
				s = a_s + '-(-' + b_s + ')';
				fas.push(<p> {a+b} </p>); 
			}
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return [exs, fas];
	}
	
	function MkExcs(i,n){
		cnt +=1;
		let k = MkInt(n);
		let exs_fas = upd_funclist[i](k);
		return (
			[<div style={{marginLeft: leftTotal}}> {exs_fas[0]} </div>, 
			 <div style={{marginLeft: leftTotal}}> {exs_fas[1]} </div>])
	}
	
	
	// ---------------------------------------
  const [isLoaded, setLoaded] = useState(false);

   useEffect(() => {
		if (typeof localStorage !== 'undefined'){
		setLoaded(true)
		}
	}, []);

  if(isLoaded){
  
  let variables = ['ad','sub'];
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
	let fas = []
	for (let i = 0; i < upd_data.length; i++){
				let a_b = MkExcs(i,upd_data[i]);
				exs.push(a_b[0]);
				fas.push(a_b[1]);
			}
  
  return (
    <div>
      <h1 style={{marginLeft: '25px', fontSize:'24px'}}> {localStorage.getItem('title')} </h1>
      {exs}
<h1 style={{marginLeft: '25px', fontSize:'24px'}}>  FASIT </h1>
      {fas}
    </div>
  );
  }
  return (
    null
  );
}

export default Addition
