(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/installation.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"installation"}},"Installation"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Install ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-from-markup"),":"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"yarn add react react-dom react-from-markup\n")),r.a.createElement(o.MDXTag,{name:"p",components:n},"Then, when your page loads, use it to rehydrate your page."),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import rehydrate from "react-from-markup";\n\nrehydrate(document.getElementById("root"), {});\n')),r.a.createElement(o.MDXTag,{name:"p",components:n},"This will rehydrate any ",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/containers"}},"markup containers")," on your page - but in order to do anything useful, you'll want to specify some ",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/rehydrators"}},"rehydrators"),"."))}}}]);