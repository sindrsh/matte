(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),u=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{height:80,background:"#000099"}},l.a.createElement("div",{style:{margin:"0 auto",padding:"0.9rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(r.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.defaultProps={siteTitle:""};var c=u,i=(a("8ypT"),a("+ZDr")),m=a.n(i),o=a("Tmqt"),s=a.n(o),d=function(e){return l.a.createElement(m.a,{to:e.to,className:s.a.btn,activeClassName:s.a.btna},e.children)},E=function(){return l.a.createElement("div",{style:{height:2.5,background:"#334d4d"}})},b=function(){return l.a.createElement("div",{className:s.a.menu},l.a.createElement("ul",{className:s.a.ulmenu},l.a.createElement(m.a,{className:s.a.btn,exact:!0,to:"/",activeClassName:s.a.btna},l.a.createElement("i",null)," Start"),l.a.createElement(E,null),l.a.createElement(d,{className:s.a.btn,to:"/tital/"},l.a.createElement("i",null)," Titalsystemet"),l.a.createElement(d,{className:s.a.btn,to:"/rekning/"},l.a.createElement("i",null)," Rekning"),l.a.createElement(d,{className:s.a.btn,to:"/brok/"},l.a.createElement("i",null)," Brøk"),l.a.createElement(E,null),l.a.createElement(d,{className:s.a.btn,to:"/bok/"},l.a.createElement("i",null)," Bok"),l.a.createElement(d,{className:s.a.btn,to:"/pdf_gen/"},l.a.createElement("i",null)," Oppgåvegenerator")))};t.a=function(e){var t=e.children,a=Object(r.useStaticQuery)("3649515864");return l.a.createElement(l.a.Fragment,null,l.a.createElement("body",{className:s.a.bdy},l.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),l.a.createElement(b,null),l.a.createElement("div",{className:s.a.cont},t)))}},Tmqt:function(e,t,a){e.exports={bdy:"menu-module--bdy--2weRK",cont:"menu-module--cont--2CDxe",menu:"menu-module--menu--2N3du",btm:"menu-module--btm--3Yu56",ulmenu:"menu-module--ulmenu--15DjK",atch:"menu-module--atch--1RmBf",btn:"menu-module--btn--17J7o",active:"menu-module--active--27I1K",btna:"menu-module--btna--3qViT"}},bugt:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),r=a.n(l),u=a("Bl7J"),c=a("+ZDr"),i=a.n(c),m=function(e){return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{maxlength:"1",size:"1",type:"text",value:e.val,onChange:e.ch}),"  ",e.title))},o=function(e){function t(t){var a;return(a=e.call(this,t)||this).chTitle=function(e){a.setState({title:e.target.value}),"undefined"!=typeof window&&window.sessionStorage.setItem("title",e.target.value)},a.chAd2=function(e){a.setState({ad2:e.target.value}),window.sessionStorage.setItem("ad2",e.target.value)},a.state={title:null,ad2:null,ad3:null,ad2wc:null,ad2mix:null,ad3mix:null,sub2:null},a}Object(n.a)(t,e);var a=t.prototype;return a.render=function(){return"undefined"==typeof window?r.a.createElement("p",null," Nettlesaren støttar ikkje denne funksjonen. "):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Titel  ",r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.chTitle}))),r.a.createElement(m,{val:this.state.ad2,ch:this.chAd2,title:"Addisjon med 2 siffer, utan tiarovergongar"}),r.a.createElement("button",null,r.a.createElement(i.a,{to:"/pdf_out/",style:{textDecoration:"none",display:"block"}},"Lag PDF")))},a.componentDidMount=function(){window.sessionStorage.clear()},t}(r.a.Component);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement(o,null),r.a.createElement("div",null))}}}]);
//# sourceMappingURL=component---src-pages-pdf-gen-js-26645153b1e0ad6d61ff.js.map