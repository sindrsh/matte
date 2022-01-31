import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2'

function NegativeNum() {

	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Lig1,Lig2, Lig3, Lig4];
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
	
	function Lig1(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		let a_s, b_s;
		for (let i = 1; i <= k; i++) {
			let x = getRndInteger(2,10);
			let m = getRndInteger(1,2);
			let a = getRndInteger(1,20);
			let b = x+a;			
			if (m === 2) { 
				a = getRndInteger(1,x-1);
				b = x-a;
			}
			
			a_s = a.toString();
			b_s = b.toString();

			let s;
			if (m === 2){
				s = 'x -' + a_s + ' = ' + b_s;
				if (getRndInteger(0,1) === 0){
					s = b_s + '= x-' + a_s;
				}
			}
			else{
				s = 'x + ' + a_s + ' = ' + b_s;
				if (getRndInteger(0,1) === 0){
					s = b_s + '= x + ' + a_s;	
				}
			}
			fas.push(<p> x={x} </p>);
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return [exs, fas];
	}
	
	function Lig2(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(2,20);
			let b = a-1;
			let c = getRndInteger(1,20);
			let d = getRndInteger(1,20);			
			
			let a_s = a.toString();
			let b_s = b.toString();
			if (b === 1){ b_s = ' '};
			let c_s = c.toString();
			let d_s = d.toString();

			let s;
			if (getRndInteger(0,1) === 0){
				s =  a_s+'x-'+c_s+' = '+d_s+'+'+b_s+'x';	
			}
			else{
				s = a_s+'x-'+c_s+' = '+b_s+'x +'+d_s;
			}
			fas.push(<p> x={d+c} </p>);
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return [exs, fas];
	}
	
	function Lig3(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let b = getRndInteger(2,11);
			let n = getRndInteger(2,9);
			let a = b+n;
			let c_i = getRndInteger(2,9);
			let d_i = getRndInteger(1,10-c_i);	
			let c = n*c_i;		
			let d = n*d_i;
			let a_s = a.toString();
			let b_s = b.toString();
			let c_s = c.toString();
			let d_s = d.toString();

			let s;
			if (getRndInteger(0,1) === 0){
				s =  a_s+'x-'+c_s+' = '+d_s+'+'+b_s+'x';	
			}
			else{
				s = a_s+'x-'+c_s+' = '+b_s+'x +'+d_s;
			}
			fas.push(<p> x={(d+c)/n} </p>);
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return [exs, fas];
	}
	
	function Lig4(k){
		let exs = [];
		exs.push(ExTitle());
		let fas = [];
		fas.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let b = getRndInteger(2,11);
			let n = getRndInteger(2,9);
			let a = b+n;
			let c_i = getRndInteger(2,9);
			let d_i = getRndInteger(1,10-c_i);	
			let c = n*c_i;		
			let d = n*d_i;
			
			let a_s = a.toString();
			let b_s = b.toString();
			let c_s = c.toString();
			let d_s = d.toString();

			let s;
			if (getRndInteger(0,1) === 0){
				s =  d_s+'+'+b_s+'x = '+a_s+'x-'+c_s;	
			}
			else{
				s = b_s+'x +'+d_s+' = '+a_s+'x-'+c_s;
			}
			fas.push(<p> x={(d+c)/n} </p>);
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
  
  let variables = ['lig1','lig2', 'lig3', 'lig4'];
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

export default NegativeNum
