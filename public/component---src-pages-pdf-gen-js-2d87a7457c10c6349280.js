(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{height:80,background:"#000099"}},l.a.createElement("div",{style:{margin:"0 auto",padding:"0.9rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.defaultProps={siteTitle:""};var r=c,u=(a("8ypT"),a("+ZDr")),m=a.n(u),s=a("Tmqt"),o=a.n(s),d=function(e){return l.a.createElement(m.a,{to:e.to,className:o.a.btn,activeClassName:o.a.btna},e.children)},h=function(){return l.a.createElement("div",{style:{height:2.5,background:"#334d4d"}})},E=function(){return l.a.createElement("div",{className:o.a.menu},l.a.createElement("ul",{className:o.a.ulmenu},l.a.createElement(m.a,{className:o.a.btn,exact:!0,to:"/",activeClassName:o.a.btna},l.a.createElement("i",null)," Start"),l.a.createElement(h,null),l.a.createElement(d,{className:o.a.btn,to:"/tital/"},l.a.createElement("i",null)," Titalsystemet"),l.a.createElement(d,{className:o.a.btn,to:"/rekning/"},l.a.createElement("i",null)," Rekning"),l.a.createElement(d,{className:o.a.btn,to:"/brok/"},l.a.createElement("i",null)," Brøk"),l.a.createElement(h,null),l.a.createElement(d,{className:o.a.btn,to:"/bok/"},l.a.createElement("i",null)," Bok"),l.a.createElement(d,{className:o.a.btn,to:"/pdf_gen/"},l.a.createElement("i",null)," Oppgåvegenerator")))};t.a=function(e){var t=e.children,a=Object(i.useStaticQuery)("3649515864");return l.a.createElement(l.a.Fragment,null,l.a.createElement("body",{className:o.a.bdy},l.a.createElement(r,{siteTitle:a.site.siteMetadata.title}),l.a.createElement(E,null),l.a.createElement("div",{className:o.a.cont},t)))}},Tmqt:function(e,t,a){e.exports={bdy:"menu-module--bdy--2weRK",cont:"menu-module--cont--2CDxe",menu:"menu-module--menu--2N3du",btm:"menu-module--btm--3Yu56",ulmenu:"menu-module--ulmenu--15DjK",atch:"menu-module--atch--1RmBf",btn:"menu-module--btn--17J7o",active:"menu-module--active--27I1K",btna:"menu-module--btna--3qViT"}},bugt:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),i=a.n(l),c=a("Bl7J"),r=a("+ZDr"),u=a.n(r),m=function(e){return i.a.createElement("form",null,i.a.createElement("label",null,i.a.createElement("input",{maxlength:"1",size:"1",type:"text",value:e.val,onChange:e.ch}),"  ",e.title))},s=function(e){function t(t){var a;return(a=e.call(this,t)||this).chTitle=function(e){a.setState({title:e.target.value})},a.chAd2=function(e){a.setState({ad2:e.target.value})},a.chAd3=function(e){a.setState({ad3:e.target.value})},a.chAd2wc=function(e){a.setState({ad2wc:e.target.value})},a.chAd2mix=function(e){a.setState({ad2mix:e.target.value})},a.chAd3mix=function(e){a.setState({ad3mix:e.target.value})},a.chSub2=function(e){a.setState({sub2:e.target.value})},a.state={title:null,ad2:null,ad3:null,ad2wc:null,ad2mix:null,ad3mix:null,sub2:null},a}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("label",null,"Titel  ",i.a.createElement("input",{type:"text",value:this.state.title,onChange:this.chTitle}))),i.a.createElement(m,{val:this.state.ad2,ch:this.chAd2,title:"Addisjon med 2 siffer, utan tiarovergongar"}),i.a.createElement(m,{val:this.state.ad3,ch:this.chAd3,title:"Addisjon med 3 siffer, utan tiarovergongar"}),i.a.createElement(m,{val:this.state.ad2wc,ch:this.chAd2wc,title:"Addisjon med 2 siffer, med tiarovergongar"}),i.a.createElement(m,{val:this.state.ad2mix,ch:this.chAd2mix,title:"Addisjon med 2 siffer, blanda"}),i.a.createElement(m,{val:this.state.ad3mix,ch:this.chAd3mix,title:"Addisjon med 3 siffer, blanda"}),i.a.createElement(m,{val:this.state.sub2,ch:this.chSub2,title:"Subtraksjon med to siffer, utan tiarovergongar"}),i.a.createElement("button",null,i.a.createElement(u.a,{to:"/pdf_out/",style:{textDecoration:"none",display:"block"},state:{title:this.state.title,data:[this.state.ad2,this.state.ad3,this.state.ad2wc,this.state.ad2mix,this.state.ad3mix,this.state.sub2]}},"Lag PDF")))},t}(i.a.Component);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(s,null),i.a.createElement("div",null))}}}]);
//# sourceMappingURL=component---src-pages-pdf-gen-js-2d87a7457c10c6349280.js.map