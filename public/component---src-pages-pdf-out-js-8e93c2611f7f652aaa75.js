(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5YR5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n("q1tI")),i=a(n("17x9"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.refreshMathJax()}},{key:"componentDidUpdate",value:function(){this.refreshMathJax()}},{key:"refreshMathJax",value:function(){var t=this.context.MathJax;if(!t)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");t.Hub.Queue(t.Hub.Typeset(this.div,this.props.onRender))}},{key:"render",value:function(){var t=this,e=this.props;e.classes,e.options;return r.default.createElement("div",{key:this.props.text,ref:function(e){return t.div=e}},this.props.text)}}]),e}(r.default.Component);c.contextTypes={MathJax:i.default.object},e.default=c},MuZe:function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?n:o)(a,r),a.onload||n(a,r),i.appendChild(a)}},Wmmy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n("q1tI")),i=a(n("17x9"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c={ascii:"asciimath",tex:"tex"},l=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(t){var e=t.inline!==this.props.inline||t.children!==this.props.children;this.typeset(e)}},{key:"shouldComponentUpdate",value:function(t,e,n){return t.children!==this.props.children||t.inline!==this.props.inline}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var t=this.context.MathJax;if(this.script){var e=t.Hub.getJaxFor(this.script);e&&e.Remove()}}},{key:"typeset",value:function(t){var e=this.context.MathJax;if(!e)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");var n=this.props.children;t&&this.clear(),!t&&this.script||this.setScriptText(n),e.Hub.Queue(e.Hub.Reprocess(this.script,this.props.onRender))}},{key:"setScriptText",value:function(t){var e=this.props.inline,n=c[this.context.input];this.script||(this.script=document.createElement("script"),this.script.type="math/"+n+"; "+(e?"":"mode=display"),this.refs.node.appendChild(this.script)),"text"in this.script?this.script.text=t:this.script.textContent=t}},{key:"render",value:function(){return r.default.createElement("span",{ref:"node"})}}]),e}(r.default.Component);l.propTypes={inline:i.default.bool,children:i.default.node.isRequired,onRender:i.default.func},l.contextTypes={MathJax:i.default.object,input:i.default.string},l.defaultProps={inline:!1,onRender:function(){}},e.default=l},dqLJ:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o);n("gBsj");e.default=function(){return r.a.createElement("p",null," HEI ")}},gBsj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Text=e.Context=e.Node=void 0;var o=a(n("Wmmy")),r=a(n("lM78")),i=a(n("5YR5"));function a(t){return t&&t.__esModule?t:{default:t}}e.Node=o.default,e.Context=r.default,e.Text=i.default,e.default={Node:o.default,Context:r.default,Text:i.default}},lM78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=u(n("q1tI")),i=u(n("17x9")),a=u(n("MuZe"));function u(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={loaded:!1},n.onLoad=n.onLoad.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"getChildContext",value:function(){return{MathJax:"undefined"==typeof MathJax?void 0:MathJax,input:this.props.input}}},{key:"componentDidMount",value:function(){var t=this.props.script;if(!t)return this.onLoad();(0,a.default)(t,this.onLoad)}},{key:"onLoad",value:function(){var t=this,e=this.props.options;MathJax.Hub.Config(e),MathJax.Hub.Register.StartupHook("End",(function(){MathJax.Hub.processSectionDelay=t.props.delay,t.props.didFinishTypeset&&t.props.didFinishTypeset(),t.props.onLoad&&t.props.onLoad(),t.setState({loaded:!0})})),MathJax.Hub.Register.MessageHook("Math Processing Error",(function(e){t.props.onError&&t.props.onError(MathJax,e)}))}},{key:"render",value:function(){if(!this.state.loaded&&!this.props.noGate)return this.props.loading;var t=this.props.children;return r.default.Children.only(t)}}]),e}(r.default.Component);s.propTypes={children:i.default.node.isRequired,didFinishTypeset:i.default.func,script:i.default.oneOfType([i.default.string,i.default.oneOf([!1])]),input:i.default.oneOf(["ascii","tex"]),delay:i.default.number,options:i.default.object,loading:i.default.node,noGate:i.default.bool},s.childContextTypes={MathJax:i.default.object,input:i.default.string},s.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML",input:"ascii",delay:0,options:{},loading:null,noGate:!1},e.default=s}}]);
//# sourceMappingURL=component---src-pages-pdf-out-js-8e93c2611f7f652aaa75.js.map