webpackJsonp([6],{158:function(n,e,a){function t(n){a(399)}var i=a(74)(a(267),a(476),t,"data-v-69f4b8b1",null);n.exports=i.exports},267:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a(75),i=a.n(t),A=a(279),o=a(34);e.default={name:"Sidebar",data:function(){return{shouldShowSubMenu:!1,sidebarMenus:A.a,settingLanguages:A.b,socials:A.c}},computed:i()({},a.i(o.a)(["language"])),methods:i()({},a.i(o.b)(["setLanguage"]),{onMobileMenuBarsClick:function(){this.shouldShowSubMenu=!0},closeSubMemu:function(){this.shouldShowSubMenu=!1},onMobileViewClick:function(n){n.clientX<=180||this.closeSubMemu()},onSettingLanguageClick:function(n){n!==this.language&&this.setLanguage(n)}})}},279:function(n,e,a){"use strict";a.d(e,"a",function(){return t}),a.d(e,"b",function(){return i}),a.d(e,"c",function(){return A});var t=[{name:"about",text:"menus.about",icon:"fa-address-card-o",routeConfig:{name:"about"}},{name:"skills",text:"menus.skills",icon:"fa-bar-chart-o",routeConfig:{name:"skills"}},{name:"experience",text:"menus.experience",icon:"fa-file-text-o",routeConfig:{name:"experience"}},{name:"projects",text:"menus.projects",icon:"fa-list-ol",routeConfig:{name:"projects"}}],i=[{name:"zh-tw",text:"中文"},{name:"en",text:"English"}],A=[{name:"github",icon:"fa-github",linkUrl:"https://github.com/sky790312"},{name:"medium",icon:"fa-medium",linkUrl:"https://medium.com/@sky790312"},{name:"linkedin",icon:"fa-linkedin",linkUrl:"https://www.linkedin.com/in/sky790312"}]},319:function(n,e,a){e=n.exports=a(154)(!0),e.push([n.i,'.flex-center[data-v-69f4b8b1]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.absolute-center[data-v-69f4b8b1]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}#sidebar[data-v-69f4b8b1]{background-color:#000;height:85px}@media screen and (min-width:768px){#sidebar[data-v-69f4b8b1]{width:180px;height:auto;border-right:1px groove #fff}}#sidebar .main .router-link[data-v-69f4b8b1]{display:block;width:180px;margin:auto;color:#fff;text-align:center}#sidebar .main .name[data-v-69f4b8b1]{margin-bottom:0}#sidebar .main .title[data-v-69f4b8b1]{font-size:12px;margin-top:0;color:#bbb}#sidebar .sidebar-content-container[data-v-69f4b8b1]{position:fixed;top:0;left:-100vw;height:100%;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:1;background:rgba(0,0,0,.8);padding:20px;-webkit-transition:left .3s;transition:left .3s}@media screen and (min-width:768px){#sidebar .sidebar-content-container[data-v-69f4b8b1]{position:relative;left:0;height:calc(100% - 85px);padding:0 20px}}#sidebar .sidebar-content-container[data-v-69f4b8b1]:after{display:block;content:"";position:absolute;top:0;left:180px;height:100%;width:calc(100vw - 180px);background-color:rgba(0,0,0,.7)}@media screen and (min-width:768px){#sidebar .sidebar-content-container[data-v-69f4b8b1]:after{display:none}}#sidebar .sidebar-content-container.mobile-view[data-v-69f4b8b1]{left:0;width:180px;border-right:1px groove #fff}#sidebar .sidebar-content .menu[data-v-69f4b8b1]{padding:10px 15px}#sidebar .sidebar-content .router-link[data-v-69f4b8b1]{position:relative;color:#fff}#sidebar .sidebar-content .router-link.active[data-v-69f4b8b1]{cursor:default;font-weight:700}#sidebar .sidebar-content .router-link[data-v-69f4b8b1]:not(.active):after{content:"";position:absolute;bottom:-2px;left:0;width:0;height:1px;background-color:#fff;-webkit-transition:width .3s ease;transition:width .3s ease}#sidebar .sidebar-content .router-link[data-v-69f4b8b1]:not(.active):hover:after{width:100%}#sidebar .sidebar-footer[data-v-69f4b8b1]{margin:auto 0 10px;text-align:center}#sidebar .sidebar-footer .fa[data-v-69f4b8b1]{padding:0 5px}#sidebar .social[data-v-69f4b8b1]{color:#fff;opacity:1}#sidebar .social[data-v-69f4b8b1]:hover{opacity:.8}#sidebar .language-container[data-v-69f4b8b1]{margin:10px 0;padding-top:10px;border-top:1px solid #fff}#sidebar .language-container .language[data-v-69f4b8b1]{opacity:.4}#sidebar .language-container .language.active[data-v-69f4b8b1],#sidebar .language-container .language[data-v-69f4b8b1]:hover{opacity:1}#sidebar .language-container .language[data-v-69f4b8b1]:not(:last-child):after{content:"|";opacity:1}#sidebar .mobile-menu-bars[data-v-69f4b8b1]{position:absolute;top:25px;left:20px;z-index:1;color:#fff;cursor:pointer}@media screen and (min-width:768px){#sidebar .mobile-menu-bars[data-v-69f4b8b1]{display:none}}',"",{version:3,sources:["/Users/kevin.hu/Documents/github/new-website/src/views/AppCommon/Sidebar/index.vue"],names:[],mappings:"AACA,8BACE,oBAAqB,AACrB,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,kCACE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,WAAa,CACd,AACD,0BACE,sBAAuB,AACvB,WAAa,CACd,AACD,oCACA,0BACI,YAAa,AACb,YAAa,AACb,4BAA8B,CACjC,CACA,AACD,6CACE,cAAe,AACf,YAAa,AACb,YAAa,AACb,WAAY,AACZ,iBAAmB,CACpB,AACD,sCACE,eAAiB,CAClB,AACD,uCACE,eAAgB,AAChB,aAAc,AACd,UAAY,CACb,AACD,qDACE,eAAgB,AAChB,MAAO,AACP,YAAa,AACb,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,UAAW,AACX,0BAA4B,AAC5B,aAAc,AACd,4BAA8B,AAC9B,mBAAsB,CACvB,AACD,oCACA,qDACI,kBAAmB,AACnB,OAAQ,AACR,yBAA0B,AAC1B,cAAgB,CACnB,CACA,AACD,2DACE,cAAe,AACf,WAAY,AACZ,kBAAmB,AACnB,MAAO,AACP,WAAY,AACZ,YAAa,AACb,0BAA2B,AAC3B,+BAAkC,CACnC,AACD,oCACA,2DACI,YAAc,CACjB,CACA,AACD,iEACE,OAAQ,AACR,YAAa,AACb,4BAA8B,CAC/B,AACD,iDACE,iBAAmB,CACpB,AACD,wDACE,kBAAmB,AACnB,UAAY,CACb,AACD,+DACE,eAAgB,AAChB,eAAkB,CACnB,AACD,2EACE,WAAY,AACZ,kBAAmB,AACnB,YAAa,AACb,OAAQ,AACR,QAAS,AACT,WAAY,AACZ,sBAAuB,AACvB,kCAAoC,AACpC,yBAA4B,CAC7B,AACD,iFACE,UAAY,CACb,AACD,0CACE,mBAAsB,AACtB,iBAAmB,CACpB,AACD,8CACE,aAAe,CAChB,AACD,kCACE,WAAY,AACZ,SAAW,CACZ,AACD,wCACE,UAAa,CACd,AACD,8CACE,cAAe,AACf,iBAAkB,AAClB,yBAA2B,CAC5B,AACD,wDACE,UAAa,CACd,AACD,6HAEE,SAAW,CACZ,AACD,+EACE,YAAa,AACb,SAAW,CACZ,AACD,4CACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,UAAW,AACX,WAAY,AACZ,cAAgB,CACjB,AACD,oCACA,4CACI,YAAc,CACjB,CACA",file:"index.vue",sourcesContent:["\n.flex-center[data-v-69f4b8b1] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.absolute-center[data-v-69f4b8b1] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n#sidebar[data-v-69f4b8b1] {\n  background-color: #000;\n  height: 85px;\n}\n@media screen and (min-width: 768px) {\n#sidebar[data-v-69f4b8b1] {\n    width: 180px;\n    height: auto;\n    border-right: 1px groove #fff;\n}\n}\n#sidebar .main .router-link[data-v-69f4b8b1] {\n  display: block;\n  width: 180px;\n  margin: auto;\n  color: #fff;\n  text-align: center;\n}\n#sidebar .main .name[data-v-69f4b8b1] {\n  margin-bottom: 0;\n}\n#sidebar .main .title[data-v-69f4b8b1] {\n  font-size: 12px;\n  margin-top: 0;\n  color: #bbb;\n}\n#sidebar .sidebar-content-container[data-v-69f4b8b1] {\n  position: fixed;\n  top: 0;\n  left: -100vw;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 1;\n  background: rgba(0,0,0,0.8);\n  padding: 20px;\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n@media screen and (min-width: 768px) {\n#sidebar .sidebar-content-container[data-v-69f4b8b1] {\n    position: relative;\n    left: 0;\n    height: calc(100% - 85px);\n    padding: 0 20px;\n}\n}\n#sidebar .sidebar-content-container[data-v-69f4b8b1]::after {\n  display: block;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 180px;\n  height: 100%;\n  width: calc(100vw - 180px);\n  background-color: rgba(0,0,0,0.7);\n}\n@media screen and (min-width: 768px) {\n#sidebar .sidebar-content-container[data-v-69f4b8b1]::after {\n    display: none;\n}\n}\n#sidebar .sidebar-content-container.mobile-view[data-v-69f4b8b1] {\n  left: 0;\n  width: 180px;\n  border-right: 1px groove #fff;\n}\n#sidebar .sidebar-content .menu[data-v-69f4b8b1] {\n  padding: 10px 15px;\n}\n#sidebar .sidebar-content .router-link[data-v-69f4b8b1] {\n  position: relative;\n  color: #fff;\n}\n#sidebar .sidebar-content .router-link.active[data-v-69f4b8b1] {\n  cursor: default;\n  font-weight: bold;\n}\n#sidebar .sidebar-content .router-link[data-v-69f4b8b1]:not(.active)::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background-color: #fff;\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n}\n#sidebar .sidebar-content .router-link[data-v-69f4b8b1]:not(.active):hover::after {\n  width: 100%;\n}\n#sidebar .sidebar-footer[data-v-69f4b8b1] {\n  margin: auto 0 10px 0;\n  text-align: center;\n}\n#sidebar .sidebar-footer .fa[data-v-69f4b8b1] {\n  padding: 0 5px;\n}\n#sidebar .social[data-v-69f4b8b1] {\n  color: #fff;\n  opacity: 1;\n}\n#sidebar .social[data-v-69f4b8b1]:hover {\n  opacity: 0.8;\n}\n#sidebar .language-container[data-v-69f4b8b1] {\n  margin: 10px 0;\n  padding-top: 10px;\n  border-top: 1px solid #fff;\n}\n#sidebar .language-container .language[data-v-69f4b8b1] {\n  opacity: 0.4;\n}\n#sidebar .language-container .language[data-v-69f4b8b1]:hover,\n#sidebar .language-container .language.active[data-v-69f4b8b1] {\n  opacity: 1;\n}\n#sidebar .language-container .language[data-v-69f4b8b1]:not(:last-child):after {\n  content: '|';\n  opacity: 1;\n}\n#sidebar .mobile-menu-bars[data-v-69f4b8b1] {\n  position: absolute;\n  top: 25px;\n  left: 20px;\n  z-index: 1;\n  color: #fff;\n  cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n#sidebar .mobile-menu-bars[data-v-69f4b8b1] {\n    display: none;\n}\n}"],sourceRoot:""}])},399:function(n,e,a){var t=a(319);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);a(155)("12812245",t,!0)},476:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("div",{staticClass:"main"},[a("i",{staticClass:"mobile-menu-bars fa fa-2x fa-bars",on:{click:function(e){return e.stopPropagation(),n.onMobileMenuBarsClick(e)}}}),a("router-link",{staticClass:"router-link",attrs:{to:{name:"home"}}},[a("h1",{staticClass:"name"},[n._v("\n        Kevin Hu\n      ")]),a("h4",{staticClass:"title"},[n._v("\n        Frontend Developer\n      ")])])],1),a("div",{class:["sidebar-content-container",{"mobile-view":n.shouldShowSubMenu}],on:{click:function(e){return e.target!==e.currentTarget?null:n.onMobileViewClick(e)}}},[a("nav",{staticClass:"sidebar-content"},[a("ul",n._l(n.sidebarMenus,function(e){return a("li",{key:e.name,staticClass:"menu"},[a("router-link",{staticClass:"router-link",attrs:{to:e.routeConfig},nativeOn:{click:function(e){return n.closeSubMemu(e)}}},[a("i",{class:["fa",e.icon],attrs:{"aria-hidden":"true"}}),n._v("\n            "+n._s(n.$t(e.text))+"\n          ")])],1)}))]),a("div",{staticClass:"sidebar-footer"},[a("div",n._l(n.socials,function(n){return a("a",{key:n.name,staticClass:"social",attrs:{href:n.linkUrl,target:"_blank"}},[a("i",{class:["fa fa-2x",n.icon]})])})),a("div",{staticClass:"language-container"},n._l(n.settingLanguages,function(e){return a("a",{key:e.name,class:["language",{active:n.language===e.name}],on:{click:function(a){n.onSettingLanguageClick(e.name)}}},[n._v("\n          "+n._s(e.text)+"\n        ")])}))])])])},staticRenderFns:[]}}});
//# sourceMappingURL=6.34ffb7da938befe10013.js.map