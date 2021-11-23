import React, { useState, useEffect } from 'react';
import {alph, ExTitle, MkInt, getRndInteger, Generator} from "../../components/exs_gen"
import MathJax from 'react-mathjax2'

function Ad2(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		let ad1, ad10, ad1a, ad10a, sm;
		for (let i = 1; i <= k; i++) {
			ad10 = getRndInteger(1,9);
			ad10a = getRndInteger(0,9-ad10);
			if (ad10a===0){
				ad10a='';
				ad1 = getRndInteger(0,8);
				ad1a = getRndInteger(1,9-ad1);
				sm = ad1a+ad10*10+ad1;
				}
			else {
			ad1 = getRndInteger(0,9);
			ad1a = getRndInteger(0,9-ad1);
			sm = ad10a*10+ad1a+ad10*10+ad1;
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
			fas.push(<p> {sm} </p>);  
		}
		return [exs, fas];
	}
	
	function Ad3(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		let ad1, ad10, ad100, ad1a, ad10a, ad100a, sm;
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
				sm = ad1a+ad1+10*(ad10a+ad10)+ad100*100;
				}
			else {
			ad10 = getRndInteger(0,9);
			ad10a = getRndInteger(0,9-ad10);
			sm = ad1a+ad1+10*(ad10a+ad10)+100*(ad100+ad100a);
			ad100a = ad100a.toString();
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
			fas.push(<p> {sm} </p>);    
		}
		return [exs, fas];
	}

	function Ad2wc(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		let ad1, ad10, ad1a, ad10a, sm;
		for (let i = 1; i <= k; i++) {
			ad10 = getRndInteger(1,9);
			ad10a = getRndInteger(0,9);
			ad1 = getRndInteger(0,9);
			ad1a = getRndInteger(0,9);
			if (ad10a===0){
				ad10a='';
				ad1 = getRndInteger(1,9);
				ad1a = getRndInteger(10-ad1,9);
				sm = ad1a+ad10*10+ad1;
				}
			else {
				if(ad1+ad1a<10){
					ad10a = getRndInteger(10-ad10,9);
				}
				sm = ad1a+10*(ad10+ad10a)+ad1;
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
			fas.push(<p> {sm} </p>);   
		}
		return [exs, fas];
	}
	
	function Ad2mix(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(1,99);
			let b = getRndInteger(1,99);
			let sm = a+b;
			a = a.toString();
			b= b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>); 
			fas.push(<p> {sm} </p>); 			 
		}				
		return [exs, fas];
	}
	
	function Ad3mix(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(100,999);
			let b = getRndInteger(1,999);
			let sm = a+b;
			a = a.toString();
			b= b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>);
			fas.push(<p> {sm} </p>); 			  
		}				
		return [exs, fas];
	}
	
	function Ad4mix(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(1000,9999);
			let b = getRndInteger(10,999);
			let sm = a+b;
			a = a.toString();
			b = b.toString();
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+'+'+b}
						        </MathJax.Node>
						</MathJax.Context></p>);
			fas.push(<p> {sm} </p>); 			  
		}				
		return [exs, fas];
	}
	
	function Ad4des(k, n){
		let exs = [];
		exs.push(ExTitle(n));
		let fas = [];
		fas.push(ExTitle(n));
		
		for (let i = 1; i <= k; i++) {
			let a = getRndInteger(10,999);
			let b = getRndInteger(10,999);
			let c = getRndInteger(0,9);
			let d = getRndInteger(1,9);
			let sm = a+c/10.0 + b+d/10.0;
			
			a = a.toString();
			b = b.toString();
			c = c.toString();
			d = d.toString();
			
			
			exs.push(<p> {alph[i-1]}) <MathJax.Context input='tex'>
						        <MathJax.Node inline>{a+','+c+'+'+b+','+d}
						        </MathJax.Node>
						</MathJax.Context></p>);  
			fas.push(<p> {sm.toFixed(1)} </p>);
		}				
		return [exs,fas];
	}

function MkDiv(){
	let funclist = [Ad2, Ad3, Ad2wc, Ad2mix, Ad3mix, Ad4mix, Ad4des]
	let variables = ['ad2', 'ad3', 'ad2wc', 'ad2mix', 'ad3mix', 'ad4mix', 'ad4des'];
	let excs = Generator(funclist, variables);
	return ( excs );
}

export default MkDiv
