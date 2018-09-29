(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/introduction.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}a.default=function(e){var a=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"introduction"}},"Introduction"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," lets you declare React components using simple, static markup."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The repository for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," can be found ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/simon360/react-from-markup"}},"here"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"why"}},"Why?"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Sometimes, your tech stack doesn\u2019t speak JavaScript very well."),o.a.createElement(r.MDXTag,{name:"p",components:a},"This can be a particular problem with some CMS, or legacy systems. React is a JavaScript library, and oftentimes, it\u2019s difficult to create the bootstrapping JavaScript from your templating system. These systems want to speak in markup, and making them work another way might be more challenging than it's worth."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," is intended to make it possible to use React components on these legacy systems, ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"without changing the way you write your React components"),". It provides tools to simplify the mapping from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-")," attributes into React props, and ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"can even handle React children"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The result: React can be used to build a component library, useable by other React apps, and you don\u2019t need to write a second component library for your legacy systems, or a second set of non-React JavaScript. You just need to integrate new markup into your non-React templates, and run a script on page load to initialize."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"how"}},"How?"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," introduces two concepts: ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"rehydrators")," and ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"markup containers"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"When ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," runs, it searches for every markup container on the page, and replace each container's contents with a React version that is equivalent. By default, it will simply replace elements with static React versions - in other words, this markup:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},'<div data-react-from-markup-container>\n  <p class="hello-world">Hello, world!</p>\n</div>\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"would result in:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},'ReactDOM.render(\n  React.createElement("p", { className: "hello-world" }, "Hello, world!"),\n  container\n);\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"This works recursively, so you can use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," on complex DOM trees. It even works with SVGs."),o.a.createElement(r.MDXTag,{name:"p",components:a},"This only becomes useful when using ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"rehydrators"),". Whenever ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-from-markup")," encounters an element with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-rehydratable")," attribute, it will run a rehydrator, which is usually a small bootstrapping function written alongside a React component. Normally, a rehydrator would read some ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-")," attributes from the element, and pass them as props to a React component. Rehydrators can also convert the ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"children")," of an element into React elements, and pass them to the React component."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Each markup container is parsed independently and asynchronously."))}}}]);