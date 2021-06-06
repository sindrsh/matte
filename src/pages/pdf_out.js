import React from "react"
import MathJax from 'react-mathjax2'
import "../components/pdfDataContainer"

const PdfOut = () => {
	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Ad2,Ad3,Ad2wc,Ad2mix,Ad3mix,Sub2];
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
	
	function Ad3(k){
		let exs = [];
		exs.push(ExTitle());
		let ad1, ad10, ad100, ad1a, ad10a, ad100a;
		for (let i = 1; i <= k; i++) {
			ad1 = getRndInteger(0,9);
			ad10 = getRndInteger(0,9);
			ad100 = getRndInteger(1,9);
			ad10a = getRndInteger(0,9-ad10);
			ad100a = getRndInteger(0,9-ad100);
			ad1a = getRndInteger(0,9-ad1);
			if (ad100a===0){
				ad100a='';
				ad10 = getRndInteger(0,8);
				ad10a = getRndInteger(1,9-ad10);
				}
			else {
			ad100a = ad100a.toString();
			ad10 = getRndInteger(0,9);
			ad10a = getRndInteger(0,9-ad10);
			}
			
			ad1 = ad1.toString();
			ad10 = ad10.toString();
			ad100 = ad100.toString();
			ad1a = ad1a.toString();
			ad10a = ad10a.toString();
			
			let s = ad100+ad10+ad1+'+'+ad100a+ad10a+ad1a;
			if (getRndInteger(0,1) === 0){
				s = ad100a+ad10a+ad1a+'+'+ad100+ad10+ad1;
			}
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}

	function Ad2wc(k){
		let exs = [];
		exs.push(ExTitle());
		
		let ad1, ad10, ad1a, ad10a;
		for (let i = 1; i <= k; i++) {
			ad10 = getRndInteger(1,9);
			ad10a = getRndInteger(0,9);
			ad1 = getRndInteger(0,9);
			ad1a = getRndInteger(0,9);
			if (ad10a===0){
				ad10a='';
				ad1 = getRndInteger(1,9);
				ad1a = getRndInteger(10-ad1,9);
				}
			else {
				if(ad1+ad1a<10){
					ad10a = getRndInteger(10-ad10,9);
				}
				ad10a = ad10a.toString();
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
	
	function Ad2mix(k){
		let exs = [];
		exs.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(1,99);
			let b = getRndInteger(1,99);
			a = a.toString();
			b= b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>);  
		}				
		return exs;
	}
	
	function Ad3mix(k){
		let exs = [];
		exs.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(1,999);
			let b = getRndInteger(1,999);
			a = a.toString();
			b= b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>);  
		}				
		return exs;
	}
	
	function Sub2(k){
		let exs = [];
		exs.push(ExTitle());
		let a1, a10, b1, b10;
		for (let i = 1; i <= k; i++) {
			a10 = getRndInteger(1,9);
			b10 = getRndInteger(0,a10-1);
			if (b10===0){
				b10='';
				a1 = getRndInteger(1,9);
				b1 = getRndInteger(1,a1);
				}
			else {
			b10 = b10.toString();
			a1 = getRndInteger(0,9);
			b1 = getRndInteger(0,a1);
			}
			
			a1 = a1.toString();
			a10 = a10.toString();
			b1 = b1.toString();
			
			let s = a10+a1+'-'+b10+b1; 
			
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
	
	let variables = ['ad2', 'ad3', 'ad2wc', 'ad2mix', 'ad3mix', 'sub2'];
	let data = [];
	let x;
	for (x in variables){
		data.push(window.sessionStorage.getItem(variables[x]))
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
	if (window.sessionStorage.getItem('title')) {
		return (
		<div>
		<h1 style={{marginLeft: '25px', fontSize:'24px'}}> {window.sessionStorage.getItem('title')} </h1>
		{exs}
		</div>
		)
	  } 
	 else {
		return <p> Fyll inn tittel :-) </p>
	  }
}

const PdfGen = () => {
	if (typeof(window) !== 'undefined'){
		return(<PdfOut/>)
	}
	else{return null}
}

export default PdfGen
