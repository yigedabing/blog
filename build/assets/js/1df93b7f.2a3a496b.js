"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3237],{8391:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var l=n(7294),r=n(6010),a=n(9889);const c="content_ewlY",s="contentBox_tIB1",m="contentBoxRight_pjv_";var i=n(7462);const o="features_t9lD",u="featureSvg_GfXr",d=[];function p(e){let{title:t,image:n,description:a}=e;return l.createElement("div",{className:(0,r.Z)("col col--4")},l.createElement("div",{className:"text--center"},l.createElement("img",{className:u,alt:t,src:n})),l.createElement("div",{className:"text--center padding-horiz--md"},l.createElement("h3",null,t),l.createElement("p",null,a)))}class h extends l.Component{render(){return l.createElement("section",{className:o},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},d.map(((e,t)=>l.createElement(p,(0,i.Z)({key:t},e)))))))}}function E(){return l.createElement("div",{className:(0,r.Z)(c)},l.createElement("div",{id:"htmlS",className:(0,r.Z)(s)}),l.createElement("div",{className:(0,r.Z)(m)}))}class v extends l.Component{constructor(){super(...arguments),this.state={}}render(){return l.createElement(a.Z,null,l.createElement(E,null),l.createElement("main",null,l.createElement(h,null)))}componentDidMount(){const e=document.querySelector("#htmlS");this.writeOneByOne("\u55e8\u54df\u3002","h2",e,{interval:150,sleep:300}).then((()=>this.writeOneByOne("\u6211\u662f YUZEJIA\uff0c","h4",e,{interval:150,sleep:300}))).then((()=>this.writeOneByOne("\u4e00\u540d\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0cHAHA~\u3002","p",e,{sleep:400})))}writeOneByOne(e,t,n,l){const r=document.createElement(t),a=document.createElement("span");a.className="write-vertical-bar",r.appendChild(a),n.appendChild(r);let c=null,s=0,m=(l.interval,l.sleep||0);return new Promise((t=>{!function n(){const l=document.createTextNode(e[s]);r.insertBefore(l,a),s++,c=s<e.length?setTimeout((()=>{n()}),100):setTimeout((()=>{r.removeChild(a),clearTimeout(c),t("")}),m)}()}))}}}}]);