(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1014:function(t,e,n){"use strict";n(671)},1015:function(t,e,n){var r=n(16)(!1);r.push([t.i,".example-wrapper[data-v-d68abb06]:last-child{height:100vh}",""]),t.exports=r},1039:function(t,e,n){"use strict";n.r(e);var r=n(580),o=n(216),l=n(538),c={components:{ExampleWrapper:r.a},data:function(){return{examples:o.b}},mounted:function(){this.$route.hash&&(location.hash=this.$route.hash,Object(l.a)(this.$route.hash,!1))},head:function(){return{title:"vjsf - Examples"}}},d=(n(1014),n(75)),v=n(108),m=n.n(v),h=n(511),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"examples-container"},[t._l(t.examples,(function(e,i){return t._l(e.examples,(function(t,e){return n("example-wrapper",{key:i+"-"+e,attrs:{params:t}})}))}))],2)}),[],!1,null,"d68abb06",null);e.default=component.exports;m()(component,{VContainer:h.a})},509:function(t,e,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("f9b1f27c",content,!0,{sourceMap:!1})},510:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("29691c54",content,!0,{sourceMap:!1})},538:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(26),o=(n(76),n(22),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",document.querySelector(e)||new Promise((function(t,r){if(n>50)return t();setTimeout((function(){t(o(e,++n||1))}),100)})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());function l(t){return c.apply(this,arguments)}function c(){return c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(l.length>1&&void 0!==l[1])||l[1],t.next=3,o(e);case 3:if(r=t.sent){t.next=6;break}return t.abrupt("return");case 6:if(!n||!("scrollBehavior"in document.documentElement.style)){t.next=10;break}return t.abrupt("return",window.scrollTo({top:r.offsetTop,behavior:"smooth"}));case 10:return t.abrupt("return",window.scrollTo(0,r.offsetTop));case 11:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},572:function(t,e,n){"use strict";(function(t){n(8),n(6),n(9),n(11),n(12);var r=n(2),o=n(3),l=(n(542),n(552)),c=(n(555),n(668)),d=n.n(c),v=(n(669),n(577)),m=n(578),h=n(579),f=n(581),y=n(216);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.EasyMDE=d.a,e.a={components:{VJsf:l.a,VJsfTiptap:v.a,VJsfToastUiEditor:m.a,VJsfCropImg:h.a,VJsfTable:f.a},props:{params:{type:Object,required:!0}},data:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.params);return t.options=t.options||{},t.options.idPrefix=t.options.idPrefix||"example-".concat(t.id,"-"),t.schema=JSON.parse(JSON.stringify(t.schema)),t},watch:{model:function(){this.params.model=this.model}},render:function(t){return this.compiledTemplate=this.compiledTemplate||o.a.compile(this.template||y.a),this.compiledTemplate.render.call(this,t)},methods:{logEvent:function(t,e){console.log('vjsf event "'.concat(t,'"'),e)}}}}).call(this,n(109))},573:function(t,e,n){"use strict";n(509)},574:function(t,e,n){var r=n(16)(!1);r.push([t.i,".vjsf-table>.v-input__control>.v-input__slot[data-v-2cd1bb9c]{display:block;padding:50px;width:90%}.vjsf-table[data-v-2cd1bb9c]{padding-top:20px}",""]),t.exports=r},575:function(t,e,n){"use strict";n(510)},576:function(t,e,n){var r=n(16)(!1);r.push([t.i,".example-wrapper pre{white-space:pre-wrap;word-break:break-word}",""]),t.exports=r},580:function(t,e,n){"use strict";var r=n(553),o=n(572),l=n(216),c=n(220),d=n(543)(),v=n(670),m=n(547),h=n(550),f=n(549),y=new m({strict:!1,allErrors:!0,messages:!1});y.addFormat("hexcolor",/^#[0-9A-Fa-f]{6,8}$/),h(y);var _={components:{Example:o.a},props:{params:{type:Object,required:!0,default:null},startActivated:{type:Boolean,default:!1}},data:function(){return{showCode:0,valid:null,validated:!1,dark:!1,activated:!1}},computed:{validate:function(){return y.compile(this.resolvedSchema)},ajvError:function(){return this.validate(this.params.model)?null:(f.en(this.validate.errors),y.errorsText(this.validate.errors,{separator:"\n"}))},resolvedSchema:function(){var t=this.params.options||{},e=t.locale||t.defaultLocale||"en",n=t.defaultLocale||"en";return r.a.resolve(JSON.parse(JSON.stringify(this.params.schema)),{"~$locale~":e===n?e:[e,n]})},prettySchema:function(){return this.$hljs&&this.params.schema?this.$hljs.highlight("json",JSON.stringify(this.params.schema,null,2)).value:null},prettyModel:function(){return this.$hljs&&this.params.model?this.$hljs.highlight("json",JSON.stringify(this.params.model,null,2)).value:null},prettyOptions:function(){return this.$hljs&&this.params.options?this.$hljs.highlight("json",JSON.stringify(this.params.options,null,2)).value:null},prettyDescription:function(){return d.render(this.params.description||"")},prettyTemplate:function(){return this.$hljs&&this.params.template?this.$hljs.highlight("html",this.params.template).value:null},validationColor:function(){return this.valid?"success":this.validated?"error":"light"},validationIcon:function(){return this.validated?"mdi-checkbox-marked-outline":"mdi-checkbox-blank-outline"},codepenParams:function(){var template=this.params.template;return{title:"vjsf - ".concat(this.params.title),description:this.params.description,editors:"101",html:'<v-app id="app">\n  <v-container>\n    <p>valid={{valid}}</p>\n    <v-form ref="form" v-model="valid">\n      '.concat(template||l.a,'\n    </v-form>\n    <v-layout row class="mt-2">\n      <v-spacer></v-spacer>\n      <v-btn color="primary" @click="$refs.form.validate()">Validate</v-btn>\n    </v-layout>\n  </v-container>\n</v-app>'),js:"\nconst model = ".concat(v(this.params.model||{}),"\n\nconst options =  ").concat(v(this.params.options||{}),"\n\nconst schema = ").concat(v(this.params.schema),"\n\nVue.component('VJsf', VJsf.default)\n\nnew Vue({\n  el: '#app',\n  vuetify: new Vuetify(),\n  data: {\n    model,\n    options,\n    schema,\n    valid: null\n  },\n  methods: {\n    logEvent(key, $event) {\n      console.log('vjsf event', key, $event)\n    }\n  }\n})"),css_external:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900;https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css;https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css;https://cdn.jsdelivr.net/npm/@koumoul/vjsf@".concat(c.version,"/dist/main.css"),js_external:"https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js;https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js;https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js;https://cdn.jsdelivr.net/npm/@koumoul/vjsf@".concat(c.version,"/dist/main.js;https://cdn.jsdelivr.net/npm/@koumoul/vjsf@").concat(c.version,"/dist/third-party.js")}}},created:function(){this.activated=this.startActivated},methods:{toggleValidate:function(){this.validated?this.$refs.form.resetValidation():this.$refs.form.validate(),this.validated=!this.validated},hover:function(){this.activated=!0}}},w=(n(575),n(75)),j=n(108),x=n.n(j),S=n(1044),O=n(89),k=n(104),T=n(80),V=n(276),C=n(1030),E=n(107),J=n(202),P=n(275),$=n(63),M=n(213),D=n(440),N=n(441),R=n(442),F=n(210),I=n(74),L=n(209),A=n(211),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"example-wrapper"},[n("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[t.params.title?n("h2",{staticClass:"headline mb-2 pt-2",attrs:{id:t.params.id}},[n("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"examples",hash:"#"+t.params.id}}},[n("v-icon",[t._v("\n          mdi-link\n        ")])],1),t._v(t._s(t.params.title)+"\n    ")],1):t._e(),t._v(" "),t.prettyDescription?n("p",{domProps:{innerHTML:t._s(t.prettyDescription)}}):t._e()]),t._v(" "),n("v-col",{staticClass:"mt-2",attrs:{xs:"12",sm:"12",md:"6"}},[n("v-card",{attrs:{dark:t.dark,outlined:""}},[n("v-toolbar",{attrs:{dark:"",dense:"",flat:""}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",title:"dark mode / light mode"},on:{click:function(e){t.dark=!t.dark}}},[n("v-icon",[t._v("mdi-invert-colors")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",title:"show parameters"},on:{click:function(e){t.showCode=t.showCode?0:1}}},[n("v-icon",[t._v("mdi-code-braces")])],1),t._v(" "),n("form",{attrs:{action:"https://codepen.io/pen/define",method:"POST",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"data"},domProps:{value:JSON.stringify(t.codepenParams)}}),t._v(" "),n("v-btn",{attrs:{icon:"",title:"open example in codepen",type:"submit"}},[n("v-icon",[t._v("mdi-codepen")])],1)],1)],1),t._v(" "),t.ajvError&&t.valid?n("v-alert",{attrs:{color:"error",dark:"",tile:""}},[n("p",[t._v("Warning ! V-jsf considered this form valid while a JSON schema validator dit not. This is not normal and you might consider filing a bug report.")]),t._v(" "),n("pre",[t._v(t._s(t.ajvError))])]):t._e(),t._v(" "),n("client-only",[n("v-card-text",{staticClass:"pb-12",staticStyle:{"min-height":"120px",position:"relative"}},[t.activated?[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("example",{attrs:{params:t.params}})],1),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"10px",right:"10px"}},[n("v-btn",{attrs:{color:t.validationColor,small:"",fab:"",title:(t.validated?"Reset validation":"Validate form")+(t.valid?" (ok)":" (ko)")},on:{click:t.toggleValidate}},[n("v-icon",[t._v(t._s(t.validationIcon))])],1)],1)]:t._e(),t._v(" "),n("v-overlay",{attrs:{absolute:!0,value:!t.activated,opacity:.2}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.activated=!0}}},[n("v-icon",[t._v("mdi-play")])],1)],1)],2),t._v(" "),n("v-window",{attrs:{vertical:""},model:{value:t.showCode,callback:function(e){t.showCode=e},expression:"showCode"}},[n("v-window-item"),t._v(" "),n("v-window-item",[n("v-card",{staticClass:"pa-0",staticStyle:{overflow:"auto"},attrs:{dark:"",tile:"",flat:"","max-height":"350"}},[n("v-tabs",[n("v-tabs-slider"),t._v(" "),t.params.template?n("v-tab",{attrs:{href:"#tab-"+t.params.id+"-template"}},[t._v("\n                  Template\n                ")]):t._e(),t._v(" "),n("v-tab-item",{attrs:{value:"tab-"+t.params.id+"-template"}},[n("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[n("pre",{domProps:{innerHTML:t._s(t.prettyTemplate)}})])],1),t._v(" "),t.params.options?n("v-tab",{attrs:{href:"#tab-"+t.params.id+"-options"}},[t._v("\n                  Options\n                ")]):t._e(),t._v(" "),n("v-tab-item",{attrs:{value:"tab-"+t.params.id+"-options"}},[n("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[n("pre",{domProps:{innerHTML:t._s(t.prettyOptions)}})])],1),t._v(" "),n("v-tab",{attrs:{href:"#tab-"+t.params.id+"-schema"}},[t._v("\n                  Schema\n                ")]),t._v(" "),n("v-tab-item",{attrs:{value:"tab-"+t.params.id+"-schema"}},[n("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[n("pre",{domProps:{innerHTML:t._s(t.prettySchema)}})])],1),t._v(" "),n("v-tab",{attrs:{href:"#tab-"+t.params.id+"-model"}},[t._v("\n                  Model\n                ")]),t._v(" "),n("v-tab-item",{attrs:{value:"tab-"+t.params.id+"-model"}},[n("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[n("pre",{domProps:{innerHTML:t._s(t.prettyModel)}})])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;x()(component,{VAlert:S.a,VBtn:O.a,VCard:k.a,VCardText:T.b,VCol:V.a,VForm:C.a,VIcon:E.a,VOverlay:J.a,VRow:P.a,VSheet:$.a,VSpacer:M.a,VTab:D.a,VTabItem:N.a,VTabs:R.a,VTabsSlider:F.a,VToolbar:I.a,VWindow:L.a,VWindowItem:A.a})},581:function(t,e,n){"use strict";n(91),n(57),n(37),n(67);function r(t,path){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(path.startsWith(e)&&(path=path.substring(1)),path.includes(e)){var n=(path=path.split(e)).splice(0,1);return path=path.join(e),Object.prototype.hasOwnProperty.call(t,n)?r(t[n],path):void console.warn("Undefined: ",n)}return t[path]}var o={props:{value:{type:String,default:""},options:{type:Object,required:!0},schema:{type:Object,required:!0},fullSchema:{type:Object,required:!0},fullKey:{type:String,required:!0},label:{type:String,default:""},htmlDescription:{type:String,default:""},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,required:!0},on:{type:Object,required:!0}},data:function(){return{file:null,tableSrc:null,tableContents:[],headers:[{text:"Property name",align:"start",sortable:!1,value:"name"},{text:"Minimum",value:"min"},{text:"Stock",value:"value"},{text:"Maximum",value:"max"},{text:"Details",value:"details"}],measurementErrors:[],displayTableError:[]}},watch:{file:function(){return null!==this.fullSchema.displayTable&&void 0!==this.fullSchema.displayTable&&Object.prototype.hasOwnProperty.call(this.fullSchema.displayTable,"validation")?null===this.tableSrc?[]:void this.createTableData():[]}},created:function(){this.tableSrc=JSON.parse(this.value),this.createTableData()},methods:{createTableData:function(){var t=[];for(var e in this.displayTableError=[],this.fullSchema.displayTable.validation){var n=this.fullSchema.displayTable.validation[e],o=n.path,l=n.rules.precision;null==l&&(l=5);var c=r(this.tableSrc,o);"number"==typeof c&&(c=c.toFixed(l));try{t.push({name:e,min:n.rules.minimum,max:n.rules.maximum,value:c})}catch(t){this.displayTableError=e+" "+n.path}}this.tableContents=t},change:function(){var t=this;if(this.file){var e=new FileReader;e.onload=function(e){try{t.tableSrc=JSON.parse(e.target.result)}catch(e){t.displayTableError=e.message,t.tableSrc=null}},e.readAsText(this.file),this.displayTableError=null}else this.tableSrc=null},downloadFile:function(t){var e=window.URL.createObjectURL(new Blob([JSON.stringify(this.tableSrc)])),link=document.createElement("a");link.href=e,link.setAttribute("download","report_"+this.fullKey+".json"),document.body.appendChild(link),link.click()},getColor:function(t){return t.value>t.max||t.value<t.min?"red":"#81c784"},shorten:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?t.substring(0,e)+"...":t},viewFile:function(t){window.open("data:text/json,"+encodeURIComponent(JSON.stringify(this.tableSrc)),"_blank").document.close()}}},l=o,c=(n(573),n(75)),d=n(108),v=n.n(d),m=n(445),h=n(511),f=n(1032),y=n(1024),_=n(107),w=n(203),j=n(275),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-input",{staticClass:"vjsf-table",attrs:{value:t.value,name:t.fullKey,label:t.label,disabled:t.disabled,rules:t.rules,required:t.required}},[t.disabled||t.required||!t.value?t._e():n("v-icon",{staticStyle:{position:"absolute",right:"0"},on:{click:function(e){return t.on.input(null)}}},[t._v("\n      mdi-close\n    ")]),t._v(" "),n("v-row",[t.disabled?t._e():n("v-file-input",{staticClass:"pt-2",attrs:{type:"file",accept:"application/json",label:"Upload JSON file","truncate-length":"50"},on:{change:t.change},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),t.tableSrc?n("v-icon",{on:{click:t.downloadFile}},[t._v("\n        mdi-download-outline\n      ")]):t._e(),t._v(" "),t.tableSrc?n("v-icon",{on:{click:t.viewFile}},[t._v("\n        mdi-open-in-new\n      ")]):t._e()],1)],1),t._v(" "),null!==t.displayTableError&&t.displayTableError.length>=1?n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[n("v-chip",{staticStyle:{width:"100%"},attrs:{color:"#9b0000",outlined:""}},[n("v-icon",{attrs:{color:"yellow darken-2"}},[t._v("\n        mdi-alert\n      ")]),t._v(" "),n("span",{staticStyle:{"font-weight":"bold",display:"flex",width:"100%","align-content":"end"}},[t._v("\n        Error parsing: "+t._s(t.shorten(t.displayTableError))+"\n      ")])],1),t._v(" "),n("div",{staticStyle:{width:"80%"}},[t._v("\n      Error parsing: "+t._s(t.displayTableError)+"\n    ")])],1):t._e(),t._v(" "),t.tableSrc?n("v-row",{attrs:{justify:"center"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.tableContents,"items-per-page":-1},scopedSlots:t._u([null===t.fullSchema.validation||void 0===t.fullSchema.validation?{key:"item.value",fn:function(e){var r=e.item;return[n("v-chip",{staticClass:"ma-2",attrs:{color:t.getColor(r),outlined:""}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(r.value))])])]}}:null],null,!0)},[t._v(" --\x3e\n    ")])],1):t._e()],1)}),[],!1,null,"2cd1bb9c",null);e.a=component.exports;v()(component,{VChip:m.a,VContainer:h.a,VDataTable:f.a,VFileInput:y.a,VIcon:_.a,VInput:w.a,VRow:j.a})},671:function(t,e,n){var content=n(1015);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("785f5d92",content,!0,{sourceMap:!1})}}]);