"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8201],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,b=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89683:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"Demo",sidebar_label:"Demo",slug:"/demo",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/demo.md"},u="DataHub Demo Environment",l={unversionedId:"docs/demo",id:"docs/demo",isDocsHomePage:!1,title:"Demo",description:"We have a hosted demo environment available, kindly provided by Acryl Data.",source:"@site/genDocs/docs/demo.md",sourceDirName:"docs",slug:"/demo",permalink:"/docs/demo",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/demo.md",tags:[],version:"current",frontMatter:{title:"Demo",sidebar_label:"Demo",slug:"/demo",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/demo.md"},sidebar:"overviewSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"SaaS",permalink:"/docs/saas"}},s=[],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datahub-demo-environment"},"DataHub Demo Environment"),(0,a.kt)("p",null,"We have a hosted demo environment available, kindly provided by ",(0,a.kt)("a",{parentName:"p",href:"https://acryl.io/"},"Acryl Data"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{className:"button button--primary button--lg",href:"https://demo.datahubproject.io/"},"Check out the demo")),(0,a.kt)("p",null,"The demo environment contains a number of sample datasets from BigQuery's public data project. We also added lineage and ownership information to showcase the full power of DataHub."))}m.isMDXComponent=!0}}]);