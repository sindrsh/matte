(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5YR5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=i(n("q1tI")),a=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){return u(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.refreshMathJax()}},{key:"componentDidUpdate",value:function(){this.refreshMathJax()}},{key:"refreshMathJax",value:function(){var t=this.context.MathJax;if(!t)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");t.Hub.Queue(t.Hub.Typeset(this.div,this.props.onRender))}},{key:"render",value:function(){var t=this,e=this.props;e.classes,e.options;return o.default.createElement("div",{key:this.props.text,ref:function(e){return t.div=e}},this.props.text)}}]),e}(o.default.Component);s.contextTypes={MathJax:a.default.object},e.default=s},MuZe:function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function r(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof e&&(o=e,e={}),e=e||{},o=o||function(){},i.type=e.type||"text/javascript",i.charset=e.charset||"utf8",i.async=!("async"in e)||!!e.async,i.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(i,e.attrs),e.text&&(i.text=""+e.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},Wmmy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=i(n("q1tI")),a=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s={ascii:"asciimath",tex:"tex"},c=function(t){function e(){return u(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(t){var e=t.inline!==this.props.inline||t.children!==this.props.children;this.typeset(e)}},{key:"shouldComponentUpdate",value:function(t,e,n){return t.children!==this.props.children||t.inline!==this.props.inline}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var t=this.context.MathJax;if(this.script){var e=t.Hub.getJaxFor(this.script);e&&e.Remove()}}},{key:"typeset",value:function(t){var e=this.context.MathJax;if(!e)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");var n=this.props.children;t&&this.clear(),!t&&this.script||this.setScriptText(n),e.Hub.Queue(e.Hub.Reprocess(this.script,this.props.onRender))}},{key:"setScriptText",value:function(t){var e=this.props.inline,n=s[this.context.input];this.script||(this.script=document.createElement("script"),this.script.type="math/"+n+"; "+(e?"":"mode=display"),this.refs.node.appendChild(this.script)),"text"in this.script?this.script.text=t:this.script.textContent=t}},{key:"render",value:function(){return o.default.createElement("span",{ref:"node"})}}]),e}(o.default.Component);c.propTypes={inline:a.default.bool,children:a.default.node.isRequired,onRender:a.default.func},c.contextTypes={MathJax:a.default.object,input:a.default.string},c.defaultProps={inline:!1,onRender:function(){}},e.default=c},dqLJ:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("gBsj"),i=n.n(a);var u=function(){if("undefined"!=typeof window){var t=["a","b","c","d","e","f","g","h","i"],e=0,n=parseInt("10px",10)+parseInt("20px",10)+"px",r=[function(e){var n,r,a,u,s=[];s.push(l());for(var p=1;p<=e;p++){r=c(1,9),0===(u=c(0,9-r))?(u="",n=c(0,8),a=c(1,9-n)):(u=u.toString(),n=c(0,9),a=c(0,9-n)),n=n.toString(),r=r.toString(),a=a.toString();var f=u+a+"+"+r+n;0===c(0,1)&&(f=r+n+"+"+u+a),s.push(o.a.createElement("p",null," ",t[p-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},f))))}return s},function(e){var n,r,a,u,s,p,f=[];f.push(l());for(var d=1;d<=e;d++){n=c(0,9),r=c(0,9),a=c(1,9),s=c(0,9-r),p=c(0,9-a),u=c(0,9-n),0===p?(p="",r=c(0,8),s=c(1,9-r)):(p=p.toString(),r=c(0,9),s=c(0,9-r)),n=n.toString(),r=r.toString(),a=a.toString(),u=u.toString(),s=s.toString();var h=a+r+n+"+"+p+s+u;0===c(0,1)&&(h=p+s+u+"+"+a+r+n),f.push(o.a.createElement("p",null," ",t[d-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},h))))}return f},function(e){var n,r,a,u,s=[];s.push(l());for(var p=1;p<=e;p++){r=c(1,9),u=c(0,9),n=c(0,9),a=c(0,9),0===u?(u="",n=c(1,9),a=c(10-n,9)):(n+a<10&&(u=c(10-r,9)),u=u.toString()),n=n.toString(),r=r.toString(),a=a.toString();var f=u+a+"+"+r+n;0===c(0,1)&&(f=r+n+"+"+u+a),s.push(o.a.createElement("p",null," ",t[p-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},f))))}return s},function(e){var n=[];n.push(l());for(var r=1;r<=e;r++){var a=c(1,99),u=c(1,99);a=a.toString(),u=u.toString(),n.push(o.a.createElement("p",null," ",t[r-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},a+"+"+u))))}return n},function(e){var n=[];n.push(l());for(var r=1;r<=e;r++){var a=c(1,999),u=c(1,999);a=a.toString(),u=u.toString(),n.push(o.a.createElement("p",null," ",t[r-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},a+"+"+u))))}return n},function(e){var n,r,a,u,s=[];s.push(l());for(var p=1;p<=e;p++){r=c(1,9),0===(u=c(0,r-1))?(u="",n=c(1,9),a=c(1,n)):(u=u.toString(),n=c(0,9),a=c(0,n)),n=n.toString(),r=r.toString(),a=a.toString();var f=r+n+"-"+u+a;s.push(o.a.createElement("p",null," ",t[p-1],") ",o.a.createElement(i.a.Context,{input:"tex"},o.a.createElement(i.a.Node,{inline:!0},f))))}return s}],a=[],u=[];function l(){return o.a.createElement("p",null," ",o.a.createElement("b",null,"Oppgåve ",e)," ")}function s(t){return parseInt(t)}function c(t,e){var n=Math.floor(Math.random()*(e+1-t))+t;return parseInt(n)}function p(t,r){e+=1;var a=s(r),i=s(t),l=u[i](a);return o.a.createElement("div",{style:{marginLeft:n}}," ",l," ")}var f,d=["ad2","ad3","ad2wc","ad2mix","ad3mix","sub2"],h=[];for(f in d)h.push(localStorage.getItem(d[f]));for(var y=0;y<h.length;y++)h[y]&&(a.push(h[y]),u.push(r[y]));for(var v=[],m=0;m<a.length;m++)v.push(p(m,a[m]));return localStorage.setItem("title","OKAY"),localStorage.getItem("title")?o.a.createElement("div",null,o.a.createElement("h1",{style:{marginLeft:"25px",fontSize:"24px"}}," ",localStorage.getItem("title")," "),v):o.a.createElement("p",null," Fyll inn tittel :-) ")}return o.a.createElement("p",null," Nettlesaren din støttar ikkje denne funksjonen. ")};e.default=function(){return o.a.createElement("body",null,o.a.createElement("p",{style:{fontSize:"8px"}}," hellandmatte.no "),o.a.createElement(u,null))}},gBsj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Text=e.Context=e.Node=void 0;var r=i(n("Wmmy")),o=i(n("lM78")),a=i(n("5YR5"));function i(t){return t&&t.__esModule?t:{default:t}}e.Node=r.default,e.Context=o.default,e.Text=a.default,e.default={Node:r.default,Context:o.default,Text:a.default}},lM78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=u(n("q1tI")),a=u(n("17x9")),i=u(n("MuZe"));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={loaded:!1},n.onLoad=n.onLoad.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"getChildContext",value:function(){return{MathJax:"undefined"==typeof MathJax?void 0:MathJax,input:this.props.input}}},{key:"componentDidMount",value:function(){var t=this.props.script;if(!t)return this.onLoad();(0,i.default)(t,this.onLoad)}},{key:"onLoad",value:function(){var t=this,e=this.props.options;MathJax.Hub.Config(e),MathJax.Hub.Register.StartupHook("End",(function(){MathJax.Hub.processSectionDelay=t.props.delay,t.props.didFinishTypeset&&t.props.didFinishTypeset(),t.props.onLoad&&t.props.onLoad(),t.setState({loaded:!0})})),MathJax.Hub.Register.MessageHook("Math Processing Error",(function(e){t.props.onError&&t.props.onError(MathJax,e)}))}},{key:"render",value:function(){if(!this.state.loaded&&!this.props.noGate)return this.props.loading;var t=this.props.children;return o.default.Children.only(t)}}]),e}(o.default.Component);l.propTypes={children:a.default.node.isRequired,didFinishTypeset:a.default.func,script:a.default.oneOfType([a.default.string,a.default.oneOf([!1])]),input:a.default.oneOf(["ascii","tex"]),delay:a.default.number,options:a.default.object,loading:a.default.node,noGate:a.default.bool},l.childContextTypes={MathJax:a.default.object,input:a.default.string},l.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML",input:"ascii",delay:0,options:{},loading:null,noGate:!1},e.default=l}}]);
//# sourceMappingURL=component---src-pages-pdf-out-js-6455f7a204d8fb730ecb.js.map