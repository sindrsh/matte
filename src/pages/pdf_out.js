import React from "react"
import MathJax from 'react-mathjax2'

const PdfOut = ({ location }) => {
	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Ad2,Ad3,Ad2wc];
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
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{ad10+ad1+'+'+ad10a+ad1a}
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
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{ad100+ad10+ad1+'+'+ad100a+ad10a+ad1a}
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
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{ad10+ad1+'+'+ad10a+ad1a}
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

	for (let i = 0; i < location.state.data.length; i++){
				if (location.state.data[i]){
					upd_data.push(location.state.data[i]);
					upd_funclist.push(funclist[i]);
				}
			}
	
	let exs = [];
	
	for (let i = 0; i < upd_data.length; i++){
				exs.push(MkExcs(i,upd_data[i]));
			}
	if (location.state.title) {
		return (
		<div>
		<h1 style={{marginLeft: '25px', fontSize:'24px'}}> {location.state.title} </h1>
		{exs}
		</div>
		)
	  } 
	 else {
		return <p> Fyll inn tittel :-) </p>
	  }
}

export default PdfOut
