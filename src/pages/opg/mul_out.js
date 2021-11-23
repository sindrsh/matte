import React, { useState, useEffect } from 'react';
import {alph, ExTitle, MkInt, getRndInteger, Generator} from "../../components/exs_gen"
import MathJax from 'react-mathjax2'

function Mul21(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(11,99);
			let sm = a*b;
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
			fas.push(<p> {sm} </p>);	     
		}
		return [exs, fas];
	}
	
	function Mul31(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(1,9);
			b = getRndInteger(101,999);
			let sm = a*b;
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
			fas.push(<p> {sm} </p>);	    
		}
		return [exs, fas];
	}
	
	function Mul22(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a, b;
		for (let i = 1; i <= k; i++) {
			a = getRndInteger(11,99);
			b = getRndInteger(11,99);
			let sm = a*b;
			a = a.toString();
			b = b.toString();
			let s = b+'\\cdot'+a; 
			
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>); 
			fas.push(<p> {sm} </p>);	     
		}
		return [exs, fas];
	}

function MkDiv(){
	let funclist = [Mul21, Mul31, Mul22]
	let variables = ['mul21','mul31', 'mul22'];
	let excs = Generator(funclist, variables);
	return ( excs );
}

export default MkDiv
