import React, { useState, useEffect } from 'react';

let alph = ['a','b','c','d','e','f','g','h','i'];

function ExTitle(n){ return (<p> <b>Oppgåve {n}</b> </p>)}

function MkInt(k){
	 let n = parseInt(k);
	 return n;
	}

function getRndInteger(min, max) {
		let randm = Math.floor(Math.random() * (max+1 - min) ) + min;
		return parseInt(randm);
	}

function Generator(funclist, variables) {

	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let upd_data = [];
	let upd_funclist = [];
	
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
 
    
