"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=l,d=u["".concat(m,".").concat(y)]||u[y]||p[y]||a;return n?r.createElement(d,s(s({ref:t},i),{},{components:n})):r.createElement(d,s({ref:t},i))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},s="mysql \u5b89\u88c5",o={unversionedId:"\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5",id:"\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5",title:"mysql \u5b89\u88c5",description:"\uff08windows\uff09",source:"@site/docs/\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5.md",sourceDirName:"\u6570\u636e\u5e93/mysql",slug:"/\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5",permalink:"/blog/docs/\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6570\u636e\u5e93/mysql/mysql\u5b89\u88c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack \u9762\u8bd5\u77e5\u8bc6\u70b9\u8bb0\u5f55",permalink:"/blog/docs/\u5de5\u7a0b\u5316/webpack/webpack_4"},next:{title:"mysql \u8fde\u63a5",permalink:"/blog/docs/\u6570\u636e\u5e93/mysql/mysql\u8fde\u63a5"}},m={},c=[{value:"\u4e0b\u8f7d\u5730\u5740\uff1ahttps://dev.mysql.com/downloads/mysql/",id:"\u4e0b\u8f7d\u5730\u5740httpsdevmysqlcomdownloadsmysql",level:2},{value:"\u542f\u52a8 mysql \u6570\u636e\u5e93",id:"\u542f\u52a8-mysql-\u6570\u636e\u5e93",level:3},{value:"\u521d\u59cb\u5316\u6570\u636e\u5e93",id:"\u521d\u59cb\u5316\u6570\u636e\u5e93",level:3},{value:"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u8f93\u51fa root \u7528\u6237\u7684\u521d\u59cb\u9ed8\u8ba4\u5bc6\u7801\uff0c\u5982",id:"\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u8f93\u51fa-root-\u7528\u6237\u7684\u521d\u59cb\u9ed8\u8ba4\u5bc6\u7801\u5982",level:3},{value:"\u8f93\u5165\u5b89\u88c5\u547d\u4ee4",id:"\u8f93\u5165\u5b89\u88c5\u547d\u4ee4",level:3},{value:"\u542f\u52a8\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef",id:"\u542f\u52a8\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef",level:3},{value:"\u767b\u5f55 mysql",id:"\u767b\u5f55-mysql",level:3},{value:"\u7248\u672c\u67e5\u770b",id:"\u7248\u672c\u67e5\u770b",level:3}],i={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-\u5b89\u88c5"},"mysql \u5b89\u88c5"),(0,l.kt)("p",null,"\uff08windows\uff09"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u5730\u5740httpsdevmysqlcomdownloadsmysql"},"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"h2",href:"https://dev.mysql.com/downloads/mysql/"},"https://dev.mysql.com/downloads/mysql/")),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u540e\u5c06zip \u89e3\u538b\u5230\u54cd\u5e94\u7684\u76ee\u5f55\uff1b\u6211\u7ed9\u653e\u5230\u4e86c \u76d8\u4e0b\uff1aC:\\Users\\yuzejia\\mysql-8.0.27 \u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u914d\u7f6e\u4e0b mysql \u7684\u914d\u7f6e\u6587\u4ef6\uff1amy.ini"),(0,l.kt)("p",null,"\u5728\u521a\u89e3\u538b\u7684\u6587\u4ef6\u76ee\u5f55\u4e0b ",(0,l.kt)("strong",{parentName:"p"},"C:\\Users\\yuzejia\\mysql-8.0.27 \u5728\u8be5\u6587\u4ef6\u5939\u4e0b\u521b\u5efa my.ini \u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u7f16\u8bd1\u6587\u4ef6\u5185\u5bb9\u4e3a\u4ee5\u4e0b\u57fa\u672c \u4fe1\u606f\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"[client]\n# \u8bbe\u7f6emysql\u5ba2\u6237\u7aef\u9ed8\u8ba4\u5b57\u7b26\u96c6\ndefault-character-set=utf8mb4\n \n[mysqld]\n# \u8bbe\u7f6e3306\u7aef\u53e3\nport = 3306\n# \u8bbe\u7f6emysql\u7684\u5b89\u88c5\u76ee\u5f55\nbasedir=C:\\\\Users\\\\yuzejia\\\\mysql-8.0.27\n# \u8bbe\u7f6e mysql\u6570\u636e\u5e93\u7684\u6570\u636e\u7684\u5b58\u653e\u76ee\u5f55\uff0cMySQL 8+ \u4e0d\u9700\u8981\u4ee5\u4e0b\u914d\u7f6e\uff0c\u7cfb\u7edf\u81ea\u5df1\u751f\u6210\u5373\u53ef\uff0c\u5426\u5219\u6709\u53ef\u80fd\u62a5\u9519\n# datadir=C:\\\\Users\\\\yuzejia\\\\mysql-8.0.27\\\\data\n# \u5141\u8bb8\u6700\u5927\u8fde\u63a5\u6570\nmax_connections=20\n# \u670d\u52a1\u7aef\u4f7f\u7528\u7684\u5b57\u7b26\u96c6\u9ed8\u8ba4\u4e3a8\u6bd4\u7279\u7f16\u7801\u7684latin1\u5b57\u7b26\u96c6\ncharacter-set-server=utf8mb4\n# \u521b\u5efa\u65b0\u8868\u65f6\u5c06\u4f7f\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce\ndefault-storage-engine=INNODB\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"basedir")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"datadir")," \u8def\u5f84\u662f\u4f60\u81ea\u5df1\u7684\u6587\u4ef6\u76ee\u5f55\u8def\u5f84\uff01"),(0,l.kt)("h3",{id:"\u542f\u52a8-mysql-\u6570\u636e\u5e93"},"\u542f\u52a8 mysql \u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"cd C:\\Users\\yuzejia\\mysql-8.0.27\\bin\n")),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u6570\u636e\u5e93"},"\u521d\u59cb\u5316\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"mysqld --initialize --console\n")),(0,l.kt)("h3",{id:"\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u8f93\u51fa-root-\u7528\u6237\u7684\u521d\u59cb\u9ed8\u8ba4\u5bc6\u7801\u5982"},"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u8f93\u51fa root \u7528\u6237\u7684\u521d\u59cb\u9ed8\u8ba4\u5bc6\u7801\uff0c\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\n2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: Ykt%st?Xx7_s\n...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ykt%st?Xx7_s")," \u5c31\u662f\u521d\u59cb\u5bc6\u7801\uff0c\u540e\u7eed\u767b\u5f55\u9700\u8981\u7528\u5230\u8bf7\u4fdd\u5b58\u597d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u767b\u9646\u540e\u4fee\u6539\u5bc6\u7801\u3002"),(0,l.kt)("h3",{id:"\u8f93\u5165\u5b89\u88c5\u547d\u4ee4"},"\u8f93\u5165\u5b89\u88c5\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"mysql install\n")),(0,l.kt)("h3",{id:"\u542f\u52a8\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef"},"\u542f\u52a8\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"net start mysql\n")),(0,l.kt)("h3",{id:"\u767b\u5f55-mysql"},"\u767b\u5f55 mysql"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"mysql -u root -p\n")),(0,l.kt)("h3",{id:"\u7248\u672c\u67e5\u770b"},"\u7248\u672c\u67e5\u770b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"select version();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"mysql> select version();\n+-----------+\n| version() |\n+-----------+\n| 8.0.27    |\n+-----------+\n1 row in set (0.01 sec)\n\nmysql>\n")))}p.isMDXComponent=!0}}]);