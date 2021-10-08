import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2'

function Example() {

	let alph = ['a','b','c','d','e','f','g','h','i'];
	let cnt = 0;
	let margleft = '10px';
	let margleftupdate = '20px';
	let leftTotal = parseInt(margleft, 10) + parseInt( margleftupdate, 10 ) + "px";
	let funclist = [Ad2,Ad3,Ad2wc,Ad2mix,Ad3mix,Ad4mix,Ad4des,Sub2, Sub2wc, Sub3, Sub3wc, Mul21, Mul31, Div21, Div31];
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
			let a = getRndInteger(100,999);
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
	
	function Ad4mix(k){
		let exs = [];
		exs.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(1000,9999);
			let b = getRndInteger(10,999);
			a = a.toString();
			b= b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>);  
		}				
		return exs;
	}
	
	function Ad4des(k){
		let exs = [];
		exs.push(ExTitle());
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(10,999);
			let b = getRndInteger(10,999);
			let c = getRndInteger(0,9);
			let d = getRndInteger(1,9);
			a = a.toString();
			b = b.toString();
			c = c.toString();
			d = d.toString();
			
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+','+c+'+'+b+','+d}
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
	
	function Sub2wc(k){
		let exs = [];
		exs.push(ExTitle());
		let a1, a10, b1, b10;
		for (let i = 1; i <= k; i++) {
			a10 = getRndInteger(1,9);
			b10 = getRndInteger(0,a10-1);
			if (b10===0){
				b10='';
				}
			else {
				b10 = b10.toString();
			}
			a1 = getRndInteger(0,8);
			b1 = getRndInteger(a1+1,9);
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
	
	function Sub3(k){
		let exs = [];
		exs.push(ExTitle());
		let a1, a10, a100, b1, b10, b100;
		for (let i = 1; i <= k; i++) {
			a100 = getRndInteger(1,9);
			b100 = getRndInteger(0,a100-1);
			if (b100===0){
				b100='';
				a10 = getRndInteger(1,9);
				b10 = getRndInteger(1,a10);
				}
			else {
			b100 = b100.toString();
			a10 = getRndInteger(0,9);
			b10 = getRndInteger(0,a10);
			}
			
			a1 = getRndInteger(0,9);
			b1 = getRndInteger(0,a1);
			
			a1 = a1.toString();
			a10 = a10.toString();
			a100 = a100.toString();
			b1 = b1.toString();
			b10 = b10.toString();
			
			let s = a100+a10+a1+'-'+b100+b10+b1; 
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function Sub3wc(k){
		let exs = [];
		exs.push(ExTitle());
		let a1, a10, a100, b1, b10, b100;
		for (let i = 1; i <= k; i++) {
			a100 = getRndInteger(1,9);
			b100 = getRndInteger(0,a100-1);
			if (b100===0){
				b100='';
				}
			else {
			b100 = b100.toString();
			}
			
			a10 = getRndInteger(0,9);
			b10 = getRndInteger(0,9);
			
			if (a10 >= b10 ){
				a1 = getRndInteger(0,8);
				b1 = getRndInteger(a1+1,9);	
			}
			else {
				a1 = getRndInteger(0,9);
				b1 = getRndInteger(0,a1);
			}
			
			a1 = a1.toString();
			a10 = a10.toString();
			a100 = a100.toString();
			b1 = b1.toString();
			b10 = b10.toString();
			
			let s = a100+a10+a1+'-'+b100+b10+b1; 
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function Mul21(k){
		let exs = [];
		exs.push(ExTitle());
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(11,99);
			a = a.toString();
			b = b.toString();
			let s = b+'\\cdot'+a; 
			if (getRndInteger(0,1) === 0){
				s = a+'\\cdot'+b;
			}
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function Mul31(k){
		let exs = [];
		exs.push(ExTitle());
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(101,999);
			a = a.toString();
			b = b.toString();
			let s = b+'\\cdot'+a;
			if (getRndInteger(0,1) === 0){
				s = a+'\\cdot'+b;
			} 
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function Div21(k){
		let exs = [];
		exs.push(ExTitle());
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(2,9);
			b = a*getRndInteger(10,Math.floor(100/a));
			a = a.toString();
			b = b.toString();
			let s = b+':'+a;
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
		}
		return exs;
	}
	
	function Div31(k){
		let exs = [];
		exs.push(ExTitle());
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(2,9);
			b = a*getRndInteger(100,Math.floor(1000/a));
			a = a.toString();
			b = b.toString();
			let s = b+':'+a;
			
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
  
  let variables = ['ad2','ad3', 'ad2wc', 'ad2mix', 'ad3mix', 'ad4mix','ad4des','sub2', 'sub2wc', 'sub3', 'sub3wc', 'mul21', 'mul31', 'div21', 'div31'];
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
    null
  );
}

export default Example
