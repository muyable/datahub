"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3699],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29256:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:21,title:"Test",sidebar_label:"Test",slug:"/generated/metamodel/entities/test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/test.md"},l="Test",c={unversionedId:"docs/generated/metamodel/entities/test",id:"docs/generated/metamodel/entities/test",isDocsHomePage:!1,title:"Test",description:"A DataHub test",source:"@site/genDocs/docs/generated/metamodel/entities/test.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/test",permalink:"/docs/generated/metamodel/entities/test",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/test.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"Test",sidebar_label:"Test",slug:"/generated/metamodel/entities/test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/test.md"},sidebar:"overviewSidebar",previous:{title:"MlPrimaryKey",permalink:"/docs/generated/metamodel/entities/mlprimarykey"},next:{title:"InviteToken",permalink:"/docs/generated/metamodel/entities/invitetoken"}},d=[{value:"Aspects",id:"aspects",children:[{value:"testInfo",id:"testinfo",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Incoming",id:"incoming",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test"},"Test"),(0,i.kt)("p",null,"A DataHub test"),(0,i.kt)("h2",{id:"aspects"},"Aspects"),(0,i.kt)("h3",{id:"testinfo"},"testInfo"),(0,i.kt)("p",null,"Information about a DataHub Test"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "testInfo"\n  },\n  "name": "TestInfo",\n  "namespace": "com.linkedin.test",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The name of the test"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "type": "string",\n      "name": "category",\n      "doc": "Category of the test"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the test"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "TestDefinition",\n        "namespace": "com.linkedin.test",\n        "fields": [\n          {\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "JSON": "JSON / YAML test def"\n              },\n              "name": "TestDefinitionType",\n              "namespace": "com.linkedin.test",\n              "symbols": [\n                "JSON"\n              ]\n            },\n            "name": "type",\n            "doc": "The Test Definition Type"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "json",\n            "default": null,\n            "doc": "JSON format configuration for the test"\n          }\n        ]\n      },\n      "name": "definition",\n      "doc": "Configuration for the Test"\n    }\n  ],\n  "doc": "Information about a DataHub Test"\n}\n'))),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("h3",{id:"incoming"},"Incoming"),(0,i.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IsFailing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"testResults.failing")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IsPassing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dataset via ",(0,i.kt)("inlineCode",{parentName:"li"},"testResults.passing"))))),(0,i.kt)("h2",{id:"global-metadata-model"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);