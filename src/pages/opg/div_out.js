import React, { useState, useEffect } from 'react';
import {alph, ExTitle, MkInt, getRndInteger, Generator} from "../../components/exs_gen"
import MathJax from 'react-mathjax2'

	function Div21(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		let a, b, c;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(2,9);
			c = getRndInteger(10,Math.floor(100/a));
			b = a*c;
			a = a.toString();
			b = b.toString();
			let s = b+':'+a;
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>); 
			fas.push(<p> {c} </p>);	     
		}
		return [exs, fas];
	}
	
	function Div31(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		let a, b, c;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(2,9);
			c = getRndInteger(100,Math.floor(1000/a));
			b = a*c;
			
			a = a.toString();
			b = b.toString();
			let s = b+':'+a;
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>); 
			fas.push(<p> {c} </p>);	 			     
		}
		return [exs, fas];
	}

function MkDiv(){
	let funclist = [Div21, Div31]
	let variables = ['div21','div31'];
	let excs = Generator(funclist, variables);
	return ( excs );
}

export default MkDiv
