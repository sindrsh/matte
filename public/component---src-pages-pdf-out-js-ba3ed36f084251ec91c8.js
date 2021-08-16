(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[691],{9586:function(t){function e(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function n(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,r,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async=!("async"in r)||!!r.async,a.src=t,r.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,r.attrs),r.text&&(a.text=""+r.text),("onload"in a?e:n)(a,o),a.onload||e(a,o),i.appendChild(a)}},979:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=u(n(7294)),i=u(n(5697)),a=u(n(9586));function u(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={loaded:!1},n.onLoad=n.onLoad.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"getChildContext",value:function(){return{MathJax:"undefined"==typeof MathJax?void 0:MathJax,input:this.props.input}}},{key:"componentDidMount",value:function(){var t=this.props.script;if(!t)return this.onLoad();(0,a.default)(t,this.onLoad)}},{key:"onLoad",value:function(){var t=this,e=this.props.options;MathJax.Hub.Config(e),MathJax.Hub.Register.StartupHook("End",(function(){MathJax.Hub.processSectionDelay=t.props.delay,t.props.didFinishTypeset&&t.props.didFinishTypeset(),t.props.onLoad&&t.props.onLoad(),t.setState({loaded:!0})})),MathJax.Hub.Register.MessageHook("Math Processing Error",(function(e){t.props.onError&&t.props.onError(MathJax,e)}))}},{key:"render",value:function(){if(!this.state.loaded&&!this.props.noGate)return this.props.loading;var t=this.props.children;return o.default.Children.only(t)}}]),e}(o.default.Component);s.propTypes={children:i.default.node.isRequired,didFinishTypeset:i.default.func,script:i.default.oneOfType([i.default.string,i.default.oneOf([!1])]),input:i.default.oneOf(["ascii","tex"]),delay:i.default.number,options:i.default.object,loading:i.default.node,noGate:i.default.bool},s.childContextTypes={MathJax:i.default.object,input:i.default.string},s.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML",input:"ascii",delay:0,options:{},loading:null,noGate:!1},e.default=s},1541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=a(n(7294)),i=a(n(5697));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l={ascii:"asciimath",tex:"tex"},c=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(t){var e=t.inline!==this.props.inline||t.children!==this.props.children;this.typeset(e)}},{key:"shouldComponentUpdate",value:function(t,e,n){return t.children!==this.props.children||t.inline!==this.props.inline}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var t=this.context.MathJax;if(this.script){var e=t.Hub.getJaxFor(this.script);e&&e.Remove()}}},{key:"typeset",value:function(t){var e=this.context.MathJax;if(!e)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");var n=this.props.children;t&&this.clear(),!t&&this.script||this.setScriptText(n),e.Hub.Queue(e.Hub.Reprocess(this.script,this.props.onRender))}},{key:"setScriptText",value:function(t){var e=this.props.inline,n=l[this.context.input];this.script||(this.script=document.createElement("script"),this.script.type="math/"+n+"; "+(e?"":"mode=display"),this.refs.node.appendChild(this.script)),"text"in this.script?this.script.text=t:this.script.textContent=t}},{key:"render",value:function(){return o.default.createElement("span",{ref:"node"})}}]),e}(o.default.Component);c.propTypes={inline:i.default.bool,children:i.default.node.isRequired,onRender:i.default.func},c.contextTypes={MathJax:i.default.object,input:i.default.string},c.defaultProps={inline:!1,onRender:function(){}},e.default=c},6549:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=a(n(7294)),i=a(n(5697));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.refreshMathJax()}},{key:"componentDidUpdate",value:function(){this.refreshMathJax()}},{key:"refreshMathJax",value:function(){var t=this.context.MathJax;if(!t)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");t.Hub.Queue(t.Hub.Typeset(this.div,this.props.onRender))}},{key:"render",value:function(){var t=this,e=this.props;e.classes,e.options;return o.default.createElement("div",{key:this.props.text,ref:function(e){return t.div=e}},this.props.text)}}]),e}(o.default.Component);l.contextTypes={MathJax:i.default.object},e.default=l},6908:function(t,e,n){"use strict";var r=a(n(1541)),o=a(n(979)),i=a(n(6549));function a(t){return t&&t.__esModule?t:{default:t}}r.default,o.default,i.default,e.ZP={Node:r.default,Context:o.default,Text:i.default}},5835:function(t,e,n){"use strict";n.r(e);var r=n(7294),o=n(6908);e.default=function(){var t=["a","b","c","d","e","f","g","h","i"],e=0,n=parseInt("10px",10)+parseInt("20px",10)+"px",i=[function(e){var n,i,a,u,l=[];l.push(s());for(var p=1;p<=e;p++){i=c(1,9),0===(u=c(0,9-i))?(u="",n=c(0,8),a=c(1,9-n)):(u=u.toString(),n=c(0,9),a=c(0,9-n)),n=n.toString(),i=i.toString(),a=a.toString();var f=u+a+"+"+i+n;0===c(0,1)&&(f=i+n+"+"+u+a),l.push(r.createElement("p",null," ",t[p-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},f))))}return l},function(e){var n,i,a,u,l,p,f=[];f.push(s());for(var d=1;d<=e;d++){n=c(0,9),i=c(0,9),a=c(1,9),l=c(0,9-i),p=c(0,9-a),u=c(0,9-n),0===p?(p="",i=c(0,8),l=c(1,9-i)):(p=p.toString(),i=c(0,9),l=c(0,9-i)),n=n.toString(),i=i.toString(),a=a.toString(),u=u.toString(),l=l.toString();var h=a+i+n+"+"+p+l+u;0===c(0,1)&&(h=p+l+u+"+"+a+i+n),f.push(r.createElement("p",null," ",t[d-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},h))))}return f},function(e){var n,i,a,u,l=[];l.push(s());for(var p=1;p<=e;p++){i=c(1,9),u=c(0,9),n=c(0,9),a=c(0,9),0===u?(u="",n=c(1,9),a=c(10-n,9)):(n+a<10&&(u=c(10-i,9)),u=u.toString()),n=n.toString(),i=i.toString(),a=a.toString();var f=u+a+"+"+i+n;0===c(0,1)&&(f=i+n+"+"+u+a),l.push(r.createElement("p",null," ",t[p-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},f))))}return l},function(e){var n=[];n.push(s());for(var i=1;i<=e;i++){var a=c(1,99),u=c(1,99);a=a.toString(),u=u.toString(),n.push(r.createElement("p",null," ",t[i-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},a+"+"+u))))}return n},function(e){var n=[];n.push(s());for(var i=1;i<=e;i++){var a=c(1,999),u=c(1,999);a=a.toString(),u=u.toString(),n.push(r.createElement("p",null," ",t[i-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},a+"+"+u))))}return n},function(e){var n,i,a,u,l=[];l.push(s());for(var p=1;p<=e;p++){i=c(1,9),0===(u=c(0,i-1))?(u="",n=c(1,9),a=c(1,n)):(u=u.toString(),n=c(0,9),a=c(0,n)),n=n.toString(),i=i.toString(),a=a.toString();var f=i+n+"-"+u+a;l.push(r.createElement("p",null," ",t[p-1],") ",r.createElement(o.ZP.Context,{input:"tex"},r.createElement(o.ZP.Node,{inline:!0},f))))}return l}],a=[],u=[];function s(){return r.createElement("p",null," ",r.createElement("b",null,"Oppgåve ",e)," ")}function l(t){return parseInt(t)}function c(t,e){var n=Math.floor(Math.random()*(e+1-t))+t;return parseInt(n)}function p(t,o){e+=1;var i=l(o),a=l(t),s=u[a](i);return r.createElement("div",{style:{marginLeft:n}}," ",s," ")}var f=(0,r.useState)(!1),d=f[0],h=f[1];if((0,r.useEffect)((function(){"undefined"!=typeof localStorage&&h(!0)}),[]),d){var y,v=["ad2","ad3","ad2wc","ad2mix","ad3mix","sub2"],b=[];for(y in v)b.push(localStorage.getItem(v[y]));for(var x=0;x<b.length;x++)b[x]&&(a.push(b[x]),u.push(i[x]));for(var m=[],g=0;g<a.length;g++)m.push(p(g,a[g]));return r.createElement("div",null,r.createElement("h1",{style:{marginLeft:"25px",fontSize:"24px"}}," ",localStorage.getItem("title")," "),m)}return null}}}]);
//# sourceMappingURL=component---src-pages-pdf-out-js-ba3ed36f084251ec91c8.js.map