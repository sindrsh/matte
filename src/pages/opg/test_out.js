import React, { useState, useEffect } from 'react';
import {alph, ExTitle, MkInt, getRndInteger, Generator} from "../../components/exs_gen"
import MathJax from 'react-mathjax2'

function Ad(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
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

function MkDiv(){
	let funclist = [Ad, Sub]
	let variables = ['ad','sub'];
	let excs = Generator(funclist, variables);
	return ( excs );
}

export default MkDiv
