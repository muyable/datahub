"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[652],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7475:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Kafka Metadata",sidebar_label:"Kafka Metadata",slug:"/metadata-ingestion/source_docs/kafka",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/kafka.md"},s="Kafka Metadata",c={unversionedId:"metadata-ingestion/source_docs/kafka",id:"metadata-ingestion/source_docs/kafka",isDocsHomePage:!1,title:"Kafka Metadata",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/kafka.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/kafka",permalink:"/docs/metadata-ingestion/source_docs/kafka",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/kafka.md",tags:[],version:"current",frontMatter:{title:"Kafka Metadata",sidebar_label:"Kafka Metadata",slug:"/metadata-ingestion/source_docs/kafka",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/kafka.md"},sidebar:"overviewSidebar",previous:{title:"Kafka Connect",permalink:"/docs/metadata-ingestion/source_docs/kafka-connect"},next:{title:"LDAP",permalink:"/docs/metadata-ingestion/source_docs/ldap"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[{value:"Connecting to Confluent Cloud",id:"connecting-to-confluent-cloud",children:[],level:3}],level:2},{value:"Custom Schema Registry",id:"custom-schema-registry",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka-metadata"},"Kafka Metadata"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[kafka]'"),"."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Topics from the Kafka broker"),(0,i.kt)("li",{parentName:"ul"},"Schemas associated with each topic from the schema registry")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Capability"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Domains"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/domains"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stateful Ingestion"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"link"))))),(0,i.kt)("p",null,"Stateful Ingestion is available only when a Platform Instance is assigned to this source."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # Coordinates\n    connection:\n      bootstrap: "broker:9092"\n\n      schema_registry_url: http://localhost:8081\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"connecting-to-confluent-cloud"},"Connecting to Confluent Cloud"),(0,i.kt)("p",null,"If using Confluent Cloud you can use a recipe like this. In this ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.password")," are the API credentials that you get (in the Confluent UI) from your cluster -> Data Integration -> API Keys. ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_registry_config.basic.auth.user.info"),"  has API credentials for Confluent schema registry which you get (in Confluent UI) from Schema Registry -> API credentials."),(0,i.kt)("p",null,"When creating API Key for the cluster ensure that the ACLs associated with the key are set like below. This is required for DataHub to read topic metadata from topics in Confluent Cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Topic Name = *\nPermission = ALLOW\nOperation = DESCRIBE\nPattern Type = LITERAL\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: "abc-defg.eu-west-1.aws.confluent.cloud:9092"\n      consumer_config:\n        security.protocol: "SASL_SSL"\n        sasl.mechanism: "PLAIN"\n        sasl.username: "CLUSTER_API_KEY_ID"\n        sasl.password: "CLUSTER_API_KEY_SECRET"\n      schema_registry_url: "https://abc-defgh.us-east-2.aws.confluent.cloud"\n      schema_registry_config:\n        basic.auth.user.info: "REGISTRY_API_KEY_ID:REGISTRY_API_KEY_SECRET"\n\nsink:\n  # sink configs\n')),(0,i.kt)("p",null,"If you are trying to add domains to your topics you can use a configuration like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # ...connection block\n    domain:\n      "urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810":\n        allow:\n          - ".*"\n      "urn:li:domain:d6ec9868-6736-4b1f-8aa6-fee4c5948f17":\n        deny:\n          - ".*"\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"domain")," in config above can be either an ",(0,i.kt)("em",{parentName:"p"},"urn")," or a domain ",(0,i.kt)("em",{parentName:"p"},"id")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810")," or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"13ae4d85-d955-49fc-8474-9004c663a810"),"). The Domain should exist in your DataHub instance before ingesting data into the Domain. To create a Domain on DataHub, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/domains/"},"Domains User Guide"),"."),(0,i.kt)("p",null,"If you are using a non-default subject naming strategy in the schema registry, such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#how-the-naming-strategies-work"},"RecordNameStrategy"),", the mapping for the topic's key and value schemas to the schema registry subject names should be provided via ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_subject_map")," as shown in the configuration below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # ...connection block\n    # Defines the mapping for the key & value schemas associated with a topic & the subject name registered with the\n    # kafka schema registry.\n    topic_subject_map:\n      # Defines both key & value schema for topic \'my_topic_1\'\n      "my_topic_1-key": "io.acryl.Schema1"\n      "my_topic_1-value": "io.acryl.Schema2"\n      # Defines only the value schema for topic \'my_topic_2\' (the topic doesn\'t have a key schema).\n      "my_topic_2-value": "io.acryl.Schema3"\n')),(0,i.kt)("h2",{id:"custom-schema-registry"},"Custom Schema Registry"),(0,i.kt)("p",null,"The Kafka Source uses the schema registry to figure out the schema associated with both ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," for the topic.\nBy default it uses the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"Confluent's Kafka Schema registry"),"\nand supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"AVRO")," schema type."),(0,i.kt)("p",null,"If you're using a custom schema registry, or you are using schema type other than ",(0,i.kt)("inlineCode",{parentName:"p"},"AVRO"),", then you can provide your own\ncustom implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaSchemaRegistryBase")," class, and implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_schema_metadata(topic, platform_urn)")," method that\ngiven a topic name would return object of ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaMetadata")," containing schema for that topic. Please refer\n",(0,i.kt)("inlineCode",{parentName:"p"},"datahub.ingestion.source.confluent_schema_registry::ConfluentSchemaRegistry")," for sample implementation of this class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class KafkaSchemaRegistryBase(ABC):\n    @abstractmethod\n    def get_schema_metadata(\n        self, topic: str, platform_urn: str\n    ) -> Optional[SchemaMetadata]:\n        pass\n")),(0,i.kt)("p",null,"The custom schema registry class can be configured using the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_registry_class")," config param of the ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka")," source as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'source:\n  type: "kafka"\n  config:\n    # Set the custom schema registry implementation class\n    schema_registry_class: "datahub.ingestion.source.confluent_schema_registry.ConfluentSchemaRegistry"\n    # Coordinates\n    connection:\n      bootstrap: "broker:9092"\n      schema_registry_url: http://localhost:8081\n\nsink:\n  # sink configs\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conection.bootstrap")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"localhost:9092"')),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstrap servers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_url")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'http://localhost:8081"')),(0,i.kt)("td",{parentName:"tr",align:null},"Schema registry location.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra schema registry config. These options will be passed into Kafka's SchemaRegistryClient. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.consumer_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra consumer config. These options will be passed into Kafka's DeserializingConsumer. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.producer_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra producer config. These options will be passed into Kafka's SerializingProducer. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#serializingproducer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#serializingproducer")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to include in ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to exclude from ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_patterns.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to set domain_urn domain key. There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for topics to not assign domain_urn. There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain.domain_urn.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.There can be multiple domain key specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_subject_map")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the mapping for the ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," and the ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," schemas of a topic to the corresponding schema registry subject name. Each entry of this map has the form ",(0,i.kt)("inlineCode",{parentName:"td"},"<topic_name>-key"),":",(0,i.kt)("inlineCode",{parentName:"td"},"<schema_registry_subject_name_for_key_schema>")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"<topic_name>-value"),":",(0,i.kt)("inlineCode",{parentName:"td"},"<schema_registry_subject_name_for_value_schema>")," for the key and the value schemas associated with the topic, respectively. This parameter is mandatory when the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#how-the-naming-strategies-work"},"RecordNameStrategy")," is used as the subject naming strategy in the kafka schema registry. NOTE: When provided, this overrides the default subject name resolution even when the ",(0,i.kt)("inlineCode",{parentName:"td"},"TopicNameStrategy")," or the ",(0,i.kt)("inlineCode",{parentName:"td"},"TopicRecordNameStrategy")," are used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema_registry_class")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"datahub.ingestion.source.confluent_schema_registry.ConfluentSchemaRegistry")),(0,i.kt)("td",{parentName:"tr",align:null},"The Kafka schema registry class implementation that would be used for obtaining both the key schema and the value schema of the kafka topic.")))),(0,i.kt)("p",null,"The options in the consumer config and schema registry config are passed to the Kafka DeserializingConsumer and SchemaRegistryClient respectively."),(0,i.kt)("p",null,"For a full example with a number of security options, see this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/recipes/secured_kafka.yml"},"example recipe"),"."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}d.isMDXComponent=!0}}]);