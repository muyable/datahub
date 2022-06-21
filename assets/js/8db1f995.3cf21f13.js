"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5601],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=l,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96686:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md"},s="Policies Guide",p={unversionedId:"docs/policies",id:"docs/policies",isDocsHomePage:!1,title:"Policies Guide",description:"Introduction",source:"@site/genDocs/docs/policies.md",sourceDirName:"docs",slug:"/policies",permalink:"/docs/policies",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md",tags:[],version:"current",frontMatter:{title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md"},sidebar:"overviewSidebar",previous:{title:"Developing an Action",permalink:"/docs/actions/guides/developing-an-action"},next:{title:"Domains Guide",permalink:"/docs/domains"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What is a Policy?",id:"what-is-a-policy",children:[{value:"Platform Policies",id:"platform-policies",children:[],level:3},{value:"Metadata Policies",id:"metadata-policies",children:[{value:"Actors",id:"actors",children:[],level:4},{value:"Privileges",id:"privileges",children:[],level:4},{value:"Resources",id:"resources",children:[],level:4}],level:3}],level:2},{value:"Managing Policies",id:"managing-policies",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Coming Soon",id:"coming-soon",children:[],level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",children:[],level:2}],c={toc:d};function u(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"policies-guide"},"Policies Guide"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"DataHub provides the ability to declare fine-grained access control Policies via the UI & GraphQL API.\nAccess policies in DataHub define ",(0,r.kt)("em",{parentName:"p"},"who")," can ",(0,r.kt)("em",{parentName:"p"},"do what")," to ",(0,r.kt)("em",{parentName:"p"},"which resources"),". A few policies in plain English include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags. "),(0,r.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,r.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of."),(0,r.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves.")),(0,r.kt)("p",null,"In this document, we'll take a deeper look at DataHub Policies & how to use them effectively. "),(0,r.kt)("h2",{id:"what-is-a-policy"},"What is a Policy?"),(0,r.kt)("p",null,"There are 2 types of Policy within DataHub:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Platform Policies"),(0,r.kt)("li",{parentName:"ol"},"Metadata Policies")),(0,r.kt)("p",null,"We'll briefly describe each. "),(0,r.kt)("h3",{id:"platform-policies"},"Platform Policies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Platform")," policies determine who has platform-level privileges on DataHub. These privileges include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,r.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,r.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,r.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Actors"),": Who the policy applies to (Users or Groups)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")')),(0,r.kt)("p",null,'Note that platform policies do not include a specific "target resource" against which the Policies apply. Instead,\nthey simply serve to assign specific privileges to DataHub users and groups.'),(0,r.kt)("h3",{id:"metadata-policies"},"Metadata Policies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,r.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,r.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,r.kt)("p",null,"and so on. "),(0,r.kt)("p",null,"A Metadata Policy can be broken down into 3 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups that the policy applies to."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a policy, e.g. \"Add Tags\"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the policy applies to, e.g. \"All Datasets\".")),(0,r.kt)("h4",{id:"actors"},"Actors"),(0,r.kt)("p",null,"We currently support 3 ways to define the set of actors the policy applies to: a) list of users b) list of groups, and\nc) owners of the entity. You also have the option to apply the policy to all users."),(0,r.kt)("h4",{id:"privileges"},"Privileges"),(0,r.kt)("p",null,"Check out the list of\nprivileges ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-utils/src/main/java/com/linkedin/metadata/authorization/PoliciesConfig.java"},"here"),"\n. Note, the privileges are semantic by nature, and does not tie in 1-to-1 with the aspect model."),(0,r.kt)("p",null,"All edits on the UI are covered by a privilege, to make sure we have the ability to restrict write access."),(0,r.kt)("p",null,"We currently support the following:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Platform-level")," privileges for DataHub operators to access & manage the administrative functionality of the system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform Privileges"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Policies"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove access control policies. Be careful - Actors with this privilege are effectively super users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Metadata Ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update Metadata Ingestion sources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create & remove secrets stored inside DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Users & Groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update users and groups on DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage All Access Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and list access tokens for all users on DataHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Domains"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove Asset Domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Analytics"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor access to the DataHub analytics dashboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Generate Personal Access Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate access tokens for personal use with DataHub APIs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage User Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate invite links for new native DataHub users, and password reset links for existing native users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage Glossaries"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, move, and delete Glossary Terms and Term Groups")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Common metadata privileges")," to view & modify any entity within DataHub."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Common Privileges"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Entity Page"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access the entity page for the resource in the UI. If not granted, it will redirect them to an unauthorized page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove tags to an asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Glossary Terms"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove glossary terms to an asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Owners"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove owners of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the description (documentation) of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Links"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit links associated with an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the status of an entity (soft deleted or not).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Domain of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Deprecation"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Deprecation status of an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove assertions from an entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit All"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit any information about an entity. Super user privileges.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specific entity-level privileges")," that are not generalizable."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entity"),(0,r.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) tags associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Glossary Terms"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) glossary terms associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) descriptions associated with a dataset schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"View Dataset Usage"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access usage metadata about a dataset both in the UI and in the GraphQL API. This includes example queries, number of queries, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"View Dataset Profile"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to access a dataset's profile both in the UI and in the GraphQL API. This   includes snapshot statistics like #rows, #columns, null percentage per field, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Tag Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the color of a Tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Group Members"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove members to a group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit User Profile"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the user's profile including display name, bio, title, profile image, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User + Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit Contact Information"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow actor to change the contact information such as email & chat handles.")))),(0,r.kt)("h4",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Resource filter defines the set of resources that the policy applies to is defined using a list of criteria. Each\ncriterion defines a field type (like resource_type, resource_urn, domain), a list of field values to compare, and a\ncondition (like EQUALS). It essentially checks whether the field of a certain resource matches any of the input values.\nNote, that if there are no criteria or resource is not set, policy is applied to ALL resources."),(0,r.kt)("p",null,"For example, the following resource filter will apply the policy to datasets, charts, and dashboards under domain 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": {\n    "criteria": [\n      {\n        "field": "resource_type",\n        "values": [\n          "dataset",\n          "chart",\n          "dashboard"\n        ],\n        "condition": "EQUALS"\n      },\n      {\n        "field": "domain",\n        "values": [\n          "urn:li:domain:domain1"\n        ],\n        "condition": "EQUALS"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Supported fields are as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"dataset, chart, dataJob")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_urn"),(0,r.kt)("td",{parentName:"tr",align:null},"Urn of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Domain of the resource"),(0,r.kt)("td",{parentName:"tr",align:null},"urn:li:domain:domainX")))),(0,r.kt)("h2",{id:"managing-policies"},"Managing Policies"),(0,r.kt)("p",null,"Policies can be managed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/policies")," page, or accessed via the top navigation bar. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Policies")," tab will only\nbe visible to those users having the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Policies")," privilege."),(0,r.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. The set of default policies are created at deploy\ntime and can be found inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"policies.json")," file within ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata-service/war/src/main/resources/boot"),". This set of policies serves the\nfollowing purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,r.kt)("li",{parentName:"ol"},"Assigns all Platform privileges for all Users by default (Editable)")),(0,r.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing policies without friction.\nNote that these privilege ",(0,r.kt)("em",{parentName:"p"},"can")," and likely ",(0,r.kt)("em",{parentName:"p"},"should")," be altered inside the ",(0,r.kt)("strong",{parentName:"p"},"Policies")," page of the UI."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pro-Tip: To login using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," account, simply navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-datahub-domain>/login")," and enter ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),". Note that the password can be customized for your\ndeployment by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file within the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," module. Notice that JaaS authentication must be enabled. ")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"By default, the Policies feature is ",(0,r.kt)("em",{parentName:"p"},"enabled"),". This means that the deployment will support creating, editing, removing, and\nmost importantly enforcing fine-grained access policies."),(0,r.kt)("p",null,"In some cases, these capabilities are not desirable. For example, if your company's users are already used to having free reign, you\nmay want to keep it that way. Or perhaps it is only your Data Platform team who actively uses DataHub, in which case Policies may be overkill."),(0,r.kt)("p",null,"For these scenarios, we've provided a back door to disable Policies in your deployment of DataHub. This will completely hide\nthe policies management UI and by default will allow all actions on the platform. It will be as though\neach user has ",(0,r.kt)("em",{parentName:"p"},"all")," privileges, both of the ",(0,r.kt)("strong",{parentName:"p"},"Platform")," & ",(0,r.kt)("strong",{parentName:"p"},"Metadata")," flavor."),(0,r.kt)("p",null,"To disable Policies, you can simply set the ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_POLICIES_ENABLED")," environment variable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms")," service container\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". For example in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/datahub-gms/docker.env"),", you'd place"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AUTH_POLICIES_ENABLED=false\n")),(0,r.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,r.kt)("p",null,"The DataHub team is hard at work trying to improve the Policies feature. We are planning on building out the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hide edit action buttons on Entity pages to reflect user privileges")),(0,r.kt)("p",null,"Under consideration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ability to define Metadata Policies against multiple reosurces scoped to particular "Containers" (e.g. A "schema", "database", or "collection")')),(0,r.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,r.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"))}u.isMDXComponent=!0}}]);