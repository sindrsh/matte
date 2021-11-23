import React, { useState, useEffect } from 'react';
import {alph, ExTitle, MkInt, getRndInteger, Generator} from "../../components/exs_gen"
import MathJax from 'react-mathjax2'

function Sub2(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a1, a10, b1, b10, sm;
		for (let i = 1; i <= k; i++) {
			a10 = getRndInteger(1,9);
			b10 = getRndInteger(0,a10-1);
			if (b10===0){
				b10='';
				a1 = getRndInteger(1,9);
				b1 = getRndInteger(1,a1);
				sm = a1-b1+a10*10;
				}
			else {
			a1 = getRndInteger(0,9);
			b1 = getRndInteger(0,a1);
			sm = a1-b1+10*(a10-b10);
			b10 = b10.toString();
			}
			
			a1 = a1.toString();
			a10 = a10.toString();
			b1 = b1.toString();
			
			let s = a10+a1+'-'+b10+b1; 
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);
			fas.push(<p> {sm} </p>);  	      
		}
		return [exs, fas];
	}
	
	function Sub2wc(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a1, a10, b1, b10, sm;
		for (let i = 1; i <= k; i++) {
			a10 = getRndInteger(1,9);
			b10 = getRndInteger(0,a10-1);
			
			a1 = getRndInteger(0,8);
			b1 = getRndInteger(a1+1,9);
			sm = a1-b1+10*(a10-b10);
			
			if (b10===0){
				b10='';
				}
			else {
				b10 = b10.toString();
			}
			a1 = a1.toString();
			a10 = a10.toString();
			b1 = b1.toString();
			
			let s = a10+a1+'-'+b10+b1; 
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
				            <MathJax.Node inline>{s}
				            </MathJax.Node>
				    </MathJax.Context></p>);  
			fas.push(<p> {sm} </p>);  
		}
		return [exs, fas];
	}
	
	function Sub3(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a1, a10, a100, b1, b10, b100, sm;
		for (let i = 1; i <= k; i++) {
			a100 = getRndInteger(1,9);
			b100 = getRndInteger(0,a100-1);
			a1 = getRndInteger(0,9);
			b1 = getRndInteger(0,a1);
			if (b100===0){
				b100='';
				a10 = getRndInteger(1,9);
				b10 = getRndInteger(1,a10);
				sm = a1-b1+10*(a10-b10)+100*a100;
				}
			else {
				b100 = b100.toString();
				a10 = getRndInteger(0,9);
				b10 = getRndInteger(0,a10);
				sm = a1-b1+10*(a10-b10)+100*(a100-b100);
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
			fas.push(<p> {sm} </p>);	    
		}
		return [exs, fas];
	}
	
	function Sub3wc(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let a1, a10, a100, b1, b10, b100, sm;
		for (let i = 1; i <= k; i++) {
			a100 = getRndInteger(1,9);
			b100 = getRndInteger(0,a100-1);
			
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
			sm = a1-b1+10*(a10-b10)+100*(a100-b100);
			
			if (b100===0){
				b100='';
				}
			else {
			b100 = b100.toString();
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
			fas.push(<p> {sm} </p>);	      
		}
		return [exs, fas];
	}

function MkDiv(){
	let funclist = [Sub2, Sub2wc, Sub3, Sub3wc]
	let variables = ['sub2','sub2wc', 'sub3', 'sub3wc'];
	let excs = Generator(funclist, variables);
	return ( excs );
}

export default MkDiv
