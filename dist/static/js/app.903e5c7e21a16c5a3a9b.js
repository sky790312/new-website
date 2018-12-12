webpackJsonp([9],{108:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(75),n=o.n(a),r=o(34),i=function(){return o.e(4).then(o.bind(null,159))},s=function(){return o.e(6).then(o.bind(null,158))},l=function(){return o.e(7).then(o.bind(null,157))};t.default={name:"App",components:{EntryView:i,Sidebar:s,Helper:l},data:function(){return{isEntryView:!0}},computed:n()({},o.i(r.a)([])),methods:n()({},o.i(r.b)([]),{handleEntryView:function(e){this.isEntryView=e}}),beforeMount:function(){}}},109:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"app",function(){return u});var a=o(11),n=o(17),r=o(72),i=o(33),s=o(73),l=o.n(s),c=o(71);a.a.mixin({methods:c.a});console.log("%cwelcome to KevinHu's website!","font-size: 20px; background-color: red; font-weight: bold; color: white; text-shadow: 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black; padding: 3px 5%; border: .1em solid rgba(0,0,0,.4); border-radius: 1em;");var u=new a.a({el:"#app",store:i.default,router:r.a,i18n:n.default,template:"<App/>",components:{App:l.a}})},110:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(61),n=o.n(a),r=o(60),i=o.n(r),s={isEntryView:!0},l={isEntryView:function(e){return e.isEntryView}},c={setIsEntryView:function(e,t){var o=this,a=e.commit;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a("SET_IS_ENTRY_VIEW",t);case 1:case"end":return e.stop()}},e,o)}))()}},u={SET_IS_ENTRY_VIEW:function(e,t){e.isEntryView=t}};t.default={state:s,getters:l,actions:c,mutations:u}},111:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(26),n=o.n(a),r=o(61),i=o.n(r),s=o(60),l=o.n(s),c=o(59),u=o.n(c),d=o(90),p=o.n(d),m=o(17),h=o(23),f=[h.DEFAULT_LANGUAGE],v=function(e){return m.default.locale=e,p.a.defaults.headers.common["Accept-Language"]=e,document.documentElement.language=e,e},b=function(e){return m.default.locale!==e?f.includes(e)?u.a.resolve(v(e)):o(152)("./"+e+"/index.js").then(function(t){return m.default.setLocaleMessage(e,t.default),f.push(e),v(e)}):u.a.resolve(e)},w={SET_LANGUAGE:"SET_LANGUAGE"},y={language:h.DEFAULT_LANGUAGE},g={language:function(e){return e.language}},k={setLanguage:function(e){var t=this,o=e.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.DEFAULT_LANGUAGE;return l()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(a);case 2:return o(w.SET_LANGUAGE,a),e.abrupt("return",a);case 4:case"end":return e.stop()}},e,t)}))()}},j=n()({},w.SET_LANGUAGE,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.DEFAULT_LANGUAGE;e.language=t});t.default={state:y,getters:g,actions:k,mutations:j}},112:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(26),r=o.n(n),i={SET_FILTERS:"SET_FILTERS",SET_FILTER_STATE:"SET_FILTER_STATE"},s={filters:{company:{},skills:{}}},l={filters:function(e){return e.filters}},c={setFilters:function(e){var t=e.commit,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{company:{},skills:{}};t(i.SET_FILTERS,o)},setFilterState:function(e){var t=e.commit,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"",item:"",isActive:!1};t(i.SET_FILTER_STATE,o)}},u=(a={},r()(a,i.SET_FILTERS,function(e,t){e.filters=t}),r()(a,i.SET_FILTER_STATE,function(e,t){"skills"===t.type&&(e.filters.skills.react.isActive=!0)}),a);t.default={state:s,getters:l,actions:c,mutations:u}},113:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(26),r=o.n(n),i=o(35),s={SET_SPEECH_BUBBLE:"SET_SPEECH_BUBBLE",SET_SHOULD_SHOW_SPEECH_BUBBLE:"SET_SHOULD_SHOW_SPEECH_BUBBLE"},l={speechBubble:{type:"",text:""},shouldShowSpeechBubble:!1},c={speechBubble:function(e){return e.speechBubble},shouldShowSpeechBubble:function(e){return e.shouldShowSpeechBubble}},u={setSpeechBubble:function(e){var t=e.commit,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"",text:""};t(s.SET_SPEECH_BUBBLE,o)},setShouldShowSpeechBubble:function(e){var t=e.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.i(i.d)("shouldShowSpeechBubble");t(s.SET_SHOULD_SHOW_SPEECH_BUBBLE,a)}},d=(a={},r()(a,s.SET_SPEECH_BUBBLE,function(e,t){e.speechBubble=t}),r()(a,s.SET_SHOULD_SHOW_SPEECH_BUBBLE,function(e,t){e.shouldShowSpeechBubble=t}),a);t.default={state:l,getters:c,actions:u,mutations:d}},141:function(e,t){},142:function(e,t){},148:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.isEntryView?o("entry-view",{on:{shouldShowEntryView:e.handleEntryView}}):[o("transition",{attrs:{name:"sidebar-slide",mode:"out-in",appear:""}},[o("sidebar")],1),o("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[o("keep-alive",[o("router-view",{staticClass:"router-view"})],1)],1),o("transition",{attrs:{name:"helper-slide",mode:"out-in",appear:""}},[o("helper")],1)]],2)},staticRenderFns:[]}},151:function(e,t,o){function a(e){return o(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./en/about.js":49,"./en/experience.js":50,"./en/helper.js":51,"./en/index.js":52,"./en/menus.js":53,"./en/projects.js":21,"./en/skills.js":22,"./index.js":17,"./setting.js":23,"./zh-tw/about.js":54,"./zh-tw/experience.js":55,"./zh-tw/helper.js":56,"./zh-tw/index.js":57,"./zh-tw/menus.js":58,"./zh-tw/projects.js":24,"./zh-tw/skills.js":25};a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=151},152:function(e,t,o){function a(e){var t=n[e];return t?Promise.all(t.slice(1).map(o.e)).then(function(){return o(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"./en/index.js":[52],"./zh-tw/index.js":[57]};a.keys=function(){return Object.keys(n)},e.exports=a,a.id=152},153:function(e,t,o){function a(e){return o(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./entryView.js":110,"./index.js":33,"./language.js":111,"./projects.js":112,"./speechBubble.js":113};a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=153},17:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(23),n=o(11),r=o(147);n.a.use(r.a);var i=o(151),s={};i.keys().forEach(function(e){if(e.includes("index.js")){var t=e.replace(/(\.\/|\.js)/g,""),o=a.LANGUAGE_KEYS.find(function(e){return t.includes(e)});o&&(s[o]=i(e).default)}});var l=new r.a({locale:a.DEFAULT_LANGUAGE,fallbackLocale:a.FALLBACK_LANGUAGE,messages:s,silentTranslationWarn:!0});t.default=l},21:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"PROJECTS_EN",function(){return a}),o.d(t,"MERMER_PROJECTS_EN",function(){return n});var a={status:"Status",active:"active",nonActive:"non-active",goProject:"Check this project"},n={179:"Project 179 is a match mapping for charity, the website is non-active now.",ezCouponTaiwan:"Project ez domestic(Taiwan) coupon's revision handle by me and the other f2e developer together.",dollhouse:"Project 3d dollhouse is a prototype which combined with aframe and 3d.io.",aiteOfficial:"Develop and maintain aite official website by wordpress",oldFurnitureApp:"Maintain the old furniture istaging app by angularjs.",newFurnitureApp:"Develop and test the new furniture istaging app by react-native. Including Navigator, shoutem, native-base, code-push, grid-view..etc.",vrportal:"User in portal can subscribe the service and check the data analytic which using vue, d3 and gapi.",cpcOfficial:"Develop and maintain aite official website by wordpress",vreditorCn:"User in vrmaker editor can login by taobao api and build their virtual tour by aframe which combined with vue.",ezHomepage:"Project ez homepage's revision which involving some f2e developers. I was the f2e project leader to control all f2e relative thing.",lejetbcOfficial:"Develop and maintain lejetbc official website by wordpress.",vreditorSdk:"Vreditor sdk can download by npm and build virtual tour with more easy way by istaging api service.",lejetbc:"Project lejetbc is a offlice rental service, the website is non-active now.",ezUcarApp:"Help develop and maintain project ez ucar app which inside eztravel app.",spotmeDashboard:"User in spotme editor can build your own personal website like aboutme, linkedin..etc.",vrsdkDoc:"vreditor and vrviewer sdk's document website which made by vue and vuepress and markdown.",vrviewer:"Livetour is the virtual tour which using krpano base on webVR, you can browse Livetour by glass and your mobile phone.",spotme:"Spotme is a personal website like aboutme, linkedin..etc. match mapping for person and job.",requestAnimationProfolio:"Practicing requestAnimation and use in my old website.",spotrainer:"Project spotrainer is a match mapping for lecturer and student, the website is non-active now.",ezUcar:"Project ez ucar is a whole new projct which handle by me and the other f2e developer together.",furnitureDashboard:"Maintain the old furniture dashboard by angularjs.",vreditorUs:"User in vrmaker editor can login by fb, google api and build their virtual tour by aframe which combined with vue.",oldWebsite:"My first person website which using es2015, jquery, nodejs in 2015.",vrviewerSdk:"Vrmaker livetour sdk can download by npm and show your virtual tour with more easy way by istaging api service.",tourRing:"TourRing is a live viewing and communicating between client and agent which base on Livetour.",updownrightleftProfolio:"Implement up-down-right-left full page website and use to brief myself."}},22:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"SKILLS_EN",function(){return a}),o.d(t,"MERMER_SKILLS_EN",function(){return n});var a={main:"Main Skills",other:"Other Skills",vue:"Familiar with vue ecosystem and build the pure vue component. Clarify project/common component and using vuepress to build document. This website is the best example.",es2015:"Familiar to use async/await with promise and other features in project. I think it's more easly now to build an application by class and constructor without any framework.",test:"Unit test: using Karma/Jest to test vue. E2e test: using Cypress to test user flow. By combining with CI, I can't accept the project without any testing but I think don't lose yourself to pursue the coverage at the same time.",aframe:"Using aframe to develop from 0.2 version and can seem the post at Aframe weekly post. Aframe is the best of webVR framework. 3dio is the best implement combined with aframe. Last, using aframe can't be separated threejs.",css:"When I learn css, I need to support to ie9. I lay the foundation in the world without flex/grid. I can use less, scss, stylus to develop in project. In one project, there was a requirement of RTL language layout. We fount that we can writing almost no more css to complete. From css preprocessor to css in js even pure css is better than before. Love the way what vue handle it.",d3:"I use d3 v4 version to handle visualizing data in one of the project. D3 has great power to any kind of visualizing. There are many libraries to handle visualizing data, just choose the one you like and meet your demand.",thirdparty:"Third party api like google, facebook, wechat, is part of web application. We offen use google / facebook even wechat to login. Google analytic, google map api is very powerful to let us use in our project.",tools:"Webpack is the first choose for project now. We offen use webpack to develop, use git for version control, use shell script and jenkins for CI/CD.",scrum:"Scrum is one of agile which many company use. Redmine, trello help us to control our project. If your team wanna use scrum, don't let it become waterfall.",nodejs:"Being part of javascript, using nodejs as backend service is very common. Nodejs v8 engine is become very powerful now. In the new era of Frontend Development, you should have more experience and knowledge to face the nodejs application server side.",react:"React ecosystem has more power than vue, it's no doubt. Everyone can use react to develop in different way. I like the react-observable more than others which help me go through rxjs and I really don't like what react handle css. If let me choice, I will use css module. angularjs let everyone take a look at Frontend but let everyone down. People need solace of a kind and react is shown. Anyway, React create lots of job and raise Frontend Developer's position.",reactnative:"React native let us develop native app like develop web which open the new era of Frontend Development. Base on it's ecosystem, it has a place in mobile app now. I wish vue can catch it up. There is still some limit what react native can't do. Sometimes, you still need to focus on ios/android side but there is no one who can familiar with both web and ios/android side. So if you want to use react native, please confirm and access the requirement in you app first.",seo:"There are many ways to help seo, write correct html's structure, server side render, prerender, xml, sitemap..etc. Equitment the ability to use google analytics, search console and adwords is necessary. Seo change every year like using social media, PWA..etc. We must keep focus on it.",baas:"Backend as a Service like leancloud, firebase let us has the ability to handle backend's job which is a good choice to build a simple project. You can use it with your backend service which can reduce backend's loading. But you must know the pro and con first.",pass:"Platform as a Service like GCP, AWS EC2, Azure is very powerful! It can reduce the cost on your service in the early stage. When your service group up, you can enhance your service progressively. But it still has the pro and con, remember to monitor you servive.",jquery:"jQuery is what I use in my early career. I believe every frontend developer for over 3 years can use jquery proficient. A senior frontend developer must use it and structure it very well. It still a goot library, but it's not it's time now. It still very suit for some short time event by it's ecosystem.",angularjs:"In the beginning of the new era of Frontend Development's world, there is full of mvvm library like ember, backbone, knoutout, angularjs..etc. The most famous also the most people use is angularjs. I think it raise up frontend developer's position, let people know that Frontend Development's job is not only html, css, jquery in that time.",mvc:"Backend mvc framework is very common like ruby on rails, java play, even nodejs express..etc. For me, it has the same concept just in different language. Although there are more and more api server structure, mvc structure still can be a choice which combined with frontend's framework appropriately.",database:"I used to write sql in one project that make me understand what relational database is. There are some library let you not write sql directly now. Nosql is another choice of dabase like mongodb, redis..etc. Some baas service is using nosql like fireebase which let me gain some knowledge of nosql.",cms:"Cms system is very helpful and fast to build a official website like wordpress, joomla..etc. I used to build some website by wordpress in some case. It's a very powerful tool."},n={vue:"I have been used vue since 2016..",es2015:"Old era Frentend Development is gone..",test:"Test combined with CI is very important..",aframe:"webVR is part of the new era of Frontend Development..",css:"ie is already gone, mobile world is coming..",d3:"Visualizing data is part of Frontend Developer's job..",thirdparty:"It's very common to use third party api in application..",tools:"It's not the world just writing html, css, js directly..",scrum:"Scrum vs waterfall, which one suit for your team..",nodejs:"nodejs has take its place in the world..",react:"React has already become the most popular framework after angularjs..",reactnative:"I believe one of the reason people choice react is because of react native..",seo:"Seo is part of frontend developer's duty..",baas:"There are more and more baas service appear..",paas:"There are many Paas service which are very powerful..",jquery:"I haven't used jquery for a long time..",angularjs:"Angularjs used to dominatd the world but now..",mvc:"Backend mvc is still one of the most common structure people choice..",database:"Having the knowledge of database is very useful..",cms:"Cms system is very helpful and fast to build a ofiicial website.."}},23:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"LANGUAGE_KEYS",function(){return a}),o.d(t,"DEFAULT_LANGUAGE",function(){return n}),o.d(t,"FALLBACK_LANGUAGE",function(){return r});var a=["en","zh-tw"],n="en",r="en"},24:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"PROJECTS_TW",function(){return a}),o.d(t,"MERMER_PROJECTS_TW",function(){return n});var a={status:"專案狀態",active:"在線運行",nonActive:"已不存在",goProject:"前往該專案"},n={179:"179公益是個線上公益媒合平台, 現在已經沒在運作了.",ezCouponTaiwan:"ezTravel是個主要專注於台灣的線上旅遊業, 國內票券線別改版主要由我與另一位前端開發.",dollhouse:"dollhouse是個結合3d.io與webVR aframe的prototype.",aiteOfficial:"aite官網使用wordpress來開發與維護.",oldFurnitureApp:"維護舊有的istaging web app, 使用angularjs.",newFurnitureApp:"使用react-native開發並測試性新專案新的istaging web app, 包含Navigator, shoutem, native-base, code-push, grid-view等等..",vrportal:"istaging用戶後台, 結合google analytic資料分析, 使用vue, d3, gapi.",cpcOfficial:"cpc官網使用wordpress來開發與維護.",vreditorCn:"Livetour cn版本編輯後台, 可以使用taobao登入. 使用vue結合aframe編輯virtual tour.",ezHomepage:"PezTravel是個主要專注於台灣的線上旅遊業, 主網頁改版由多位前端工程師一起開發. 在當時主導專案中前端大小事務.",lejetbcOfficial:"lejetbc官網使用wordpress來開發與維護",vreditorSdk:"Vreditor sdk讓所有使用者可以透過istaging api service更容易的編輯virtual tour.",lejetbc:"lejetbc主要服務為租借商務場地相關, 現在已經沒在運作了.",ezUcarApp:"協同開發與維護ucar線別在ezTravel app裡. 此專案已停止.",spotmeDashboard:"spotme是一個商務人脈平台如aboutme, linkedin等等..其後台可以編輯個人形象網站.",vrsdkDoc:"Vreditor和vrviewer sdk的主要文件, 使用vue, vuepress與markdown.",vrviewer:"Livetour是virtual tour主要呈現端, 主要使用krpano, 在webVR的支援下, 可以使用手機與眼鏡觀看VR.",spotme:"spotme是一個商務人脈平台如aboutme, linkedin等等..主要包含個人形象網站與機會媒合兩部分. 此專案已停止.",requestAnimationProfolio:"練習requestAnimation並實作在舊版個人網站.",spotrainer:"spotrainer是一個講師平台, 主要包含線上與線下的講課資訊, 此專案已停止.",ezUcar:"ezTravel是個主要專注於台灣的線上旅遊業, ucar全新專案主要由我與另一位前端開發.",furnitureDashboard:"維護舊有的istaging web app, 使用angularjs.",vreditorUs:"Livetour us版本編輯後台, 可以使用fb, google登入. 使用vue結合aframe編輯virtual tour.",oldWebsite:"在2015的時候, 個人網站第一版誕生, 當時嘗試使用es2015結合jquery與nodejs.",vrviewerSdk:"Vrviewer sdk讓所有使用者可以透過istaging api service更容易的呈現virtual tour.",tourRing:"TourRing是一個全新的線上直播帶看服務, 建立在Livetour的基礎下, 經理人與客戶端可以直接在virtour tour上面雙向即時溝通.",updownrightleftProfolio:"實作up-down-right-left full page網站, 並用來自我介紹."}},25:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"SKILLS_TW",function(){return a}),o.d(t,"MERMER_SKILLS_TW",function(){return n});var a={main:"主要技能",other:"其他技能",vue:"熟悉vue生態系, 擅長打造pure vue元件並使用vuepress來產生文件. 在專案中分清楚project/common元件差異, 這個網站就是最好的範例.",es2015:"使用async/await搭配promise已是基本配備, 其他特性也靈活運用中. 個人認為善用class constructor不依靠任何framework已能輕鬆地建立任何一個應用.",test:"Unit test: 使用Karma/Jest測試vue相關生態系. E2e test: 使用cypress為主, 依據user flow撰寫test case. 結合CI, 現在已不太能接受沒有寫任何測試的專案, 但也不應該有覆蓋率的迷失.",aframe:"從0.2版就開始作為主要開發, 更榮登aframe weekly posts. webVR的最佳framework, 3dio.js更是結合aframe的最佳典範. 使用aframe更脫離不了threejs.",css:"早期維護過到ie9, polyfill, 沒有flex/grid時光, 打下了css底基. 從less, scss, stylus都實際在專案中實戰過, 在某一次專案中, 更接觸了RTL語系排版的需求, 過程中專研並實現幾乎不多寫一行css來實現RTL語系排版. 從css preprocessor到css in js甚至是css自身的演化, 都比以前好很多了. 個人最喜愛vue對css的處理方式.",d3:"d3處理視覺化資料上有很大的彈性, 能做到許多其他library做不到的, 非常全面. 曾使用d3 v4版本來處理某個專案過, 視覺化資料有很多library可以選擇, 只要選擇一個喜歡的並符合你需求的即可. ",thirdparty:"串接第三方api是非常常見的, 我們經常會使用fb, google甚至是wechat來作為服務的登入. Google analytic, google map api也是非常常見的, 提供給我們在專案中使用.",tools:"直到現在, Webpack已經幾乎是一統江湖了, 前端開發必備. 版本控管基本上也看不到svn囉, 我們更以shell script, jenkins來做前端自動化. ",scrum:"Scrum是最有名的aglie敏捷開發之一, 另外我們常用Redmine, trello搭配使用做專案管理. 如果你們團隊也試著導入scrum, 千萬不要讓他變成假scrum真waterfall..",nodejs:"使用同樣為javascript的nodejs作為開發, 是非常常見的一個選項. nodejs v8引擎也越來越強大. 在這個大前端時代, 應用端這端也是不可被忽略的. 沒有一點相關的經驗與知識可是不行的.",react:"React的社群非常豐富也非常活躍, 這是vue所沒有的. 在react生態系中, 大家可以用各種方式開發. 個人目前最喜愛react-observable的處理方式, 也讓我間接了解Rxjs. React對於css的處理一直不是很喜歡, 目前覺得css module較為合適. angularjs讓大家看見前端, 讓前端的地位提升, 最後卻讓大家失望. 人們需要一點慰藉, 而react也適時出現了! 結果就如現況, React為前端提升了很大的地位與薪資水平.",reactnative:"在這大前端時代, React native是不可或缺的功成之一, 我們可以用開發web的方式開發一個native app. 依靠著react生態系, react native已經在mobile app佔有一席之地. 希望vue能慢慢迎頭趕上. 使用react native開發還是有許多限制, 很多時候我們還是需要針對ios/android處理, 但是真的精通三方的人幾乎是沒有! 所以如果您也打算導入react native的話, 請一定要好好先評估過您的需求啊.",seo:"Seo有很多提升的方式, 像是撰寫正確的html架構, 使用server side render, prernder, 提交xml, sitemap等等之類. 使用google analytics, search console, adwords 的能力是不可或缺的. Seo每年都會調整, 像是多使用社群的網站, 使用PWA技術等等, 必須要持續關注.",baas:"Backend as a Service讓我們有能力去處理以前backend處理的事, 很適合處理一些小型的project. 也因此能夠減輕backend的loading. 但也不全然只有好處, 在確定要導入之前, 可一定要了解導入後的結果.",paas:"Platform as a Service像是GCP, AWS EC2, Azure都是非常強大的! 在你的產品剛開始的階段, 這些服務可以有效減少server side的成本. 當你的系統越來越茁壯的時候, 你也可以漸進式的增強你的系統. 使用這些服務時, 可不要忘了其優缺點並隨時monitor你的系統啊",jquery:"在我剛成為前端工程師時, jquery可是人人具備的一個工具. 我相信每個超過3年經驗的前端都曾活用過jquery. . 一個資深的前端工程師必能活用並用架構其專案. jquery還是一個很好的工具, 只是現在已經不是jquery的時代. 不過在其豐富的library資源下, 還是很適合拿來做一些活動網站的.",angularjs:"在這大前端時代的開端, 有許多mvvm library的先驅, 像是ember, backbone, knoutout, angularjs等等. 其中最知名且最多人用的就是angularjs! 我認為angularjs讓人們開始重視前端的角色, 並讓人們開始知道前端不只是寫寫html, css, jquery.",mvc:"Backend mvc架構是非常常見的, 如ruby on rails, java play, 甚至nodejs express等等..對我來說, 他們的概念都很相似, 只是不同語言有不同的特性. 雖然現在已經越來越多的api server架構, mvc架構再適當的結合前端framework下扔然是個開發好選擇.",database:"在過去, 我曾經在某個專案中, 直接寫sql來處理資料庫, 這讓我對關聯式資料庫的了解幫助不少. 現在已經蠻多library可以讓我們不用直接寫sql處理資料庫了. 至於nosql的資料庫像是mogodb, redis等等..也是一種選擇. 許多baas的服務都是用nosql的概念去實作像是firebase, 在使用這些服務的過程中也讓我對nosql了解不少.",cms:"cms內容管理系統像是wordpress, joomla等等..用來建立官網是非常有幫助且快速的. 我過去也使用過wordpress建立了不少網站, 甚至接案. 是個非常好用的工具."},n={vue:"我從2016開始, 使用vue作為個人主要開發..",es2015:"前端過去那些亂七八糟的年代已經過去了..",test:"前端的測試結合CI是很重要的..",aframe:"大前端時代, webVR也是不可缺少的一部份..",css:"ie走了, 移動端的世界緊接而來..",d3:"視覺化資料是前端不可或缺的一部份..",thirdparty:"串接第三方api如fb, google是非常常見的..",tools:"現在已經不是直接寫寫html, css, js的世界囉..",scrum:"Scrum vs waterfall, 你的團隊喜歡哪一個..",react:"React是在angularjs之後最後歡迎的framewrok之一..",reactnative:"我相信react native是人們更願意選擇react的原因之一..",seo:"Seo也是前端工程師需具備的一部份..",baas:"Baas服務已經越來越多了..",paas:"Paas服務是非常強大的..",jquery:"已經有好一陣子沒用jquery了..",angularjs:"曾經幾乎一統江湖的angularjs現在..",mvc:"Backend mvc扔是一個業界非常常見的架構之一..",database:"擁有資料庫的相關知識是非常有幫助的..",cms:"使用cms內容管理系統來建立官網是非常有幫助且快速的.."}},33:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"store",function(){return l});var a=o(11),n=o(34),r=o(35);a.a.use(n.c);var i=o(153),s={};i.keys().forEach(function(e){if("./index.js"!==e){var t=o.i(r.c)(e.replace(/(\.\/|\.js)/g,""));s[t]=i(e).default}});var l=new n.c.Store({modules:s,strict:!0});t.default=l},35:function(e,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return i}),o.d(t,"a",function(){return s}),o.d(t,"b",function(){return l});var a=this,n=arguments,r=function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")},i=function e(t){var o=new Error('Required parameter, "'+t+'" is missing.');throw"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,e),o},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=void 0,i=void 0,s=void 0,l=null,c=0;o||(o={});var u=function(){c=!1===o.leading?0:Date.now(),l=null,s=e.apply(r,i),l||(r=i=null)};return function(){var d=Date.now();c||!1!==o.leading||(c=d);var p=t-(d-c);return r=a,i=n,p<=0||p>t?(l&&(clearTimeout(l),l=null),c=d,s=e.apply(r,i),l||(r=i=null)):l||!1===o.trailing||(l=setTimeout(u,p)),s}},l=function(){return window.innerWidth<768?"s":window.innerWidth>=768&&window.innerWidth<1024?"m":"l"}},49:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"ABOUT_EN",function(){return a});var a={newEra:"New era of Frontend Development",brief1:"I'm a creative frontend developer with about 5 years of professional experience, based in Taiwan now.",brief2:"I develop modern, interactive, responsive, multiple-language and cross browser's web application. Always keep in touch to the modern frontend's world and extend my ability to backend's and UIUX's world. Live and learn is why I always passion in my duty.",quote:"Quote",quoteDesc:"A senior frontend developer should always keep in touch to the modern frontend's world. Clearly issue and find the best solution for different situation and has high communication skill with backend , UIUX and PM.",duty:"Duty",special:"Special",speaker:"speaker",tutorPiecework:"Tutor and piecework"}},50:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"EXPERIENCE_EN",function(){return a});var a={sentences:"Attitude determines the outcome and emotions are always key.",fujenUniversity:{title:"Fu Jen University - Bachelor of Computer Science",topic:"Focus on lessons, club and pt-work all.",desc:"Computer Science Bachelor background make me have solid knowledge about computer and web's world. I believe it's why I can get the hang of work quickly. Knowing about Database, Algorithm, Network, Computer, Linux's world. It helps me a lot in future. I always focus on not only school lessons but other side. I used to be the core member of sign language club and dancing club before. Experiences in club are very important to me that complete me make me better. I also have multiple experiences about PT-work. The longest is at the Starbucks about 2 years. Different field have different profession and different difficulties. All of these experiences complete my student time."},aite:{title:"Aite",topic:"Special startup within 10 core member.",desc:"When I was a freshman, I choose startup to join. I think it's a way to get on the track. The on board day also the company's first day. It's very interesting to discuss and build everything that a company need with colleagues and co-founder. Like logo, product, everything. We also participate the hackathon and idea show event. It's very special experience for me. Giving me some different perspective. At that time, I'm a junior freshman and the only frontend developer co-work with all seniors. It's tough at first, but I just survive and win the trust. There are many kinds of trouble my startup face, no one know what will happen. The company even have my boss and me and leading other intern to make project at a certain time. No matter what, I never regret going to Aite. As it turned out, it's very helpful experience to me."},eztravel:{title:"ezTravel",topic:"a large company with about 100 IT employees",desc:"ezTravel is a company focus on tourism and start from web. All the projects need revision, it's why I am here. I want to know what a large company run and co-work with others. There are more than 10 frontend developers here. I have involved in multiple projects and used to  lead the frontend developers in homepage projects. I also joined UED team to communicate with PM and marketing team, try to do the right things and make work flow better. It's a big company and very different form startup. There are many kind of person, some help me in my future, some even don't know who they are. I always happy to teach and share to others, and appreciate to learn form others no matter in job or life."},istaging:{title:"iStaging",topic:"Rapidly changing environments in startup",desc:"iStaging is a multinational corporation focus on AR/VR. Client and User all over the world. Multiple language's product is basic. Everything is fills with wonders and change quickly. It's the reason why I choose to work here. Here face some new thing like webVR, aframe and some new library or framework. I still remember one time to handle the arabic language's ui must revert's special case. There are 2 or 3 frontend developers here, we co-work together. I have a very special experience that participate the Mobile World Congress(MWC) in Barcelona with my colleagues. It help me to broaden my view. I have work many years now. I think the most important thing is keep in touch with the world and always open mind to learn without stop myself."}}},51:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"HELPER_EN",function(){return r});var a=o(22),n=o(21),r={menu:{aboutWebsite:"About new website",oldWebsite:"To old website",messageBoard:"Message board",moreme:"More of me",backEntry:"Back entryVR"},aboutWebsite:{desc:"I always think that every frontend developer should have their own's profolio website. For me, the website is not just for persent, I can do something interesting in this webiste. Combines different thing together and do something out of company like A-frame, threejs, test, storybook, travisCI..etc. Maybe it's not a great UIUX experience, but it still a great experience when I thinking, planning and implementing components and project'sstructure. You can experience webVR if you have something like google cardboard. The old website is still there that I can compare myself before. I think it's a good thing to rebuild your profolio website periodically. It can keep me passion and always enjoy to my job. Everyone has their way to keep going, embrace and face it.",conclusion:"May it be the common wisdom to encourage ourselves. Cheers."},moreme:{intro:"Hello, my name is Kevin, based in Taiwan now.",working:"I'm enthusiastic for my professional field and always keeping up to the latest front-end world. To be professional in my career, it is important always to be positive and diligent. I also like to share my experience to others. I can know more about myself when I teach others. Working time has take a long time in life, if we don't work positively, I think we can't work for so long.",basketball:"My favorite sport is basketball! Being a basketball player is my dream! I still play basketball after work and play the basketball game in holiday. Basketball make me perfect. It's part of my life. I believe I will keep going until I died!",dance:"I love to dance! I used to join the club to dance duration my student time. Dance is the best thing I ever had. I still dance after work or holiday now. Dance can help me to take a break after work.",photo:"Besides of working, I have my personal habbits when I have free time. Take photo let me to enjoy the world. I love to graph the great moments and beautiful landscapes when I'm traveling or even just from the street of my district. It is one of the best things in my life. I have a dream that having my personal photography exhibition one day.",instrument:"I love music. I can play some instruments like piano, jazz drum..etc. I learn it when I was a child. I haven't play instrument for a long time. A shame to keep playing instrument. Maybe I will go back to learn it again one day.",family:"I have a brother, living with my parents. There are always dogs company with my life and there is a cat join my family now. Pet are part of family that can walk around and sleep with us in my home. We take both dog and cat to the park every day. My parents are open mind. They always respect my decision, and giving support to me. I am very lucky to have a happy family that completed me and make me better."},mermer:{skills:a.MERMER_SKILLS_EN,projects:n.MERMER_PROJECTS_EN}}},52:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(53),n=o(50),r=o(49),i=o(22),s=o(21),l=o(51),c={menus:a.MENUS_EN,about:r.ABOUT_EN,skills:i.SKILLS_EN,experience:n.EXPERIENCE_EN,projects:s.PROJECTS_EN,helper:l.HELPER_EN};t.default=c},53:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"MENUS_EN",function(){return a});var a={about:"About",skills:"Skills",experience:"Experience",projects:"Projects"}},54:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"ABOUT_TW",function(){return a});var a={newEra:"大前端時代",brief1:"身為一個超過五年的開發經驗的前端工程師, 期許自己能夠符合專業這兩個字, 目前在台灣發展.",brief2:"我善於開發modern, interactive, responsive, multiple-language and cross browser的web application. 持續追尋整個前端生態精進自己並慢慢擴展個人的backend技能與uiux思考能力. 活到老學到老, 一直是我喜歡並選擇前端的原因之一.",quote:"引述",quoteDesc:"我深信身為一個資深的前端工程師, 應該要持續的追尋前端生態精進自己, 快速並準確的確認issue, 找出其最適合當下情況的解決方法. 不管是在與後端, UIUX還是PM溝通時. 都能展現高度的溝通能力.",duty:"職責",special:"特殊經歷",speaker:"講者",tutorPiecework:"家教與接案"}},55:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"EXPERIENCE_TW",function(){return a});var a={sentences:"情緒管控是關鍵而態度決定一切",fujenUniversity:{title:"輔仁大學-資訊工程系",topic:"學業, 社團, 打工充實我的學生生活",desc:"資訊工程系的相關課程讓我對於web能輕易理解, 課程中不乏計算機概論, 演算法, 資料結構, 資料庫, 作業系統..等等. 對於我日後工作上幫助很多! 學生時期的我, 也熱烈地在參與社團, 擔任幹部, 為社團而努力. 之間也一直都有在打工, 最長的一段是在星巴克待了2年直到畢業. 社團, 打工的經驗讓我能快速的適應社會, 並有效的與他人溝通. 這些經驗都是非常難能可貴的, 充實我的學生生活."},aite:{title:"艾特網路",topic:"小而精實不到10人的的網創圈新創公司",desc:"大學畢業找尋選擇第一份工作時, 心中就已鎖定要找新創公司了. 當時認為那是一個能讓我快速成長的環境. 事實證明, 我的選擇沒有錯! 我也很感激在這裡的一切! 艾特網路很特別, 上班的第一天就是公司正式開始的第一天, 公司的一點一滴, 從logo, 活動到產品的發想, 幾乎都是大家一起努力出來的結果. 公司也積極參與活動, 像是hackthon, 新北idea show等等.. 對我來說那段時間真的成長很多, 擴展不同的眼界. 在公司只有我是junior且是唯一一個負責前端大小事務, 什麼都不太行, 吃了不少苦頭, 但漸漸的我步上軌道, 成為能獨當一面的一份子! 每天, 對於一間新創公司都是一個挑戰, 沒有人知道下一秒會發生什麼事, 遇到什麼困難. 曾經, 公司就剩下老闆與我, 帶著實習生一起做產品的另類時光, 那又是另一個故事了. 不論如何, 我從不後悔進入艾特網路, 在這裡所學到的東西, 都讓我在未來打下基礎."},eztravel:{title:"易遊網",topic:"資訊部門100多人的中大型網路起家旅遊業",desc:"易遊網是一間網路起家的公司, 在當時算是領先市場的起家, 但是卻在2008年網站就沒在更新過了! 因此決定從回電商本業, 把所有專案逐一改版! 因此, 我決定進來幫助公司, 看看不同的人, 不同的做法, 看看中大型公司多人合作的情況, 避免成為井底之蛙. 在這邊是以線別分團隊專案制, 全部的前端大概有10多個. 先後曾做過票券專案, ucar專案, 並在首頁改版專案中擔任主要統整, 分配前端大小事務. 中間也曾進入UED team與行銷, PM單位溝通如何讓產品與工作流程更好. 我想大公司與新創公司最大的不同是, 人越多溝通的成本越高且有大公司的負擔, 但也相對穩定, 一切沒有好壞之分, 端看個人適合與否. 在這得到很多前輩與同事的幫忙, 而我自身也熱於幫助他人解決問題, 分享不同的東西. 期望自己能夠不要停滯, 持續朝自己的路前進!"},istaging:{title:"宅妝股份有限公司",topic:"變化快速走在尖端的新創公司",desc:"宅妝是一間專注於AR/VR領域的一間跨國公司, 客戶來自世界各地, 產品多國語系為基本. 在這邊一切都很新奇, 這也是我最後選擇來宅妝的主要原因之一. 使用webVR如aframe等等較為創新的技術, 處理過各種特殊事情, 像是阿拉伯文版面與排版必須要整個相反等等.. 變化相當快速. 前端配置為2-3人, 組織較為扁平, 自己為自己負責. 期間也代表一同前往巴賽隆納參加MWC(世界行動通訊大會)擴展視野. 是一個非常難得的經歷! 工作一陣子後, 我想最重要的還是保持自己那顆不斷學習的心與瞭解趨勢, 才不會停滯."}}},56:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"HELPER_TW",function(){return r});var a=o(25),n=o(24),r={menu:{aboutWebsite:"關於新網站",oldWebsite:"前往舊網站",messageBoard:"留言板",moreme:"更多的我",backEntry:"回首頁VR"},aboutWebsite:{desc:"一直以來, 我都覺得每一個前端工程師都應該要擁有一個自己的網站, 這樣的一個網站不僅僅是為了呈現自己, 還可以實現各種有趣的想法(做side project也是一樣的道理). 這次結合了一些有趣的東西或工作上沒做到的部分像是A-frame, threejs, test, storybook, travisCI等等..雖然我每次都天馬行空的做一些有的沒的然後沒有顧好許多design使用者體驗, 但在我思考, 規劃, 實作整個專案的元件與架構的過程中, 這些經驗都是非常難能可貴的! 如果你有google cardboard之類的裝置的話, 你可以戴起來體驗webVR. 至於舊網站我還是會保留著, 讓我可以去比較現在與當時想法的差異. 我覺得每隔一段時間都來重新打造一次自己的個人網站非常有趣! 這讓我可以持續的保持熱情在這塊領域上. 每個人的做法都不同, 就看你如何持續精進自己. 勇於接受未來的任何挑戰.",conclusion:"一起試試吧! 做一個自己的個人網站並分享給大家, 共勉之!"},moreme:{intro:"您好, 我是胡哲維, 目前居住在台灣.",working:"工作上, 我每天都保持著學習的熱誠來面對每天的挑戰. 身為一個前端工程師, 必須要不斷的學習與接觸新的東西, 才不會被時代的潮流淘汰, 我覺得有著一個正確的心態很重要, 這對我來說反而是一種吸引, 反而讓我更是喜歡自己的工作. 我也很熱於教導他人, 有著以前社團的經驗, 我非常善於循循善誘引導並給予建議! 畢竟教學相長, 教別人的同時也能讓我自己更加清楚, 何樂而不為呢. 我覺得工作上的同事與私底下的朋友並沒有什麼不同, 工作的同時也是在交朋友, 畢竟工作, 佔了我們一生中大部分的時間, 唯有用正確的態度來面對才是長久之道!",basketball:"我最喜歡的運動就是籃球, 我從國中開始接觸籃球, 就離不開它了! 現在每個禮拜至少都會打一次, 假日不時的會有比賽, 可以享受比賽的樂趣. 打籃球的過程中也能學習到不少, 籃球是我的生命, 我想我會一直就這樣的打下去吧!",dance:"高中大學時期有在玩社團, 接觸了跳舞, 跳舞是一件很快樂的事! 社團的大家一起為社團努力對我來說是一段很珍貴的回憶, 現在我也是每個禮拜會去舞蹈教室動動身體. 有時候工作累了動一動, 還蠻放鬆的.",photo:"我玩攝影, 拍照是一種態度! 每張照片都是獨一無二的, 不論是捕捉生活中一些不經意的畫面或者是世界上不可多得的美景都是一件很幸福的事! 我的夢想之一就是辦個攝影展找個空間讓大家欣賞我拍的照片. (希望真的有那一天) 有時候放下腳步, 靜下心, 看一看, 你會發現這世界是多麽的美妙!",instrument:"音樂陶冶我的生活, 我想沒有一個人會說自己不喜歡音樂吧! 我曾經碰過爵士鼓, 學過鋼琴, 玩音樂真的是很有趣! 讓我的人生增色不少. 雖然已經很久很久沒有再碰樂器了, 也許有一天我會回去繼續學重新開始吧.",family:"我很幸運, 有一個健康的家庭. 家裡還有一狗一貓. 從我出身到現在, 我的身旁都有著狗的陪伴, 他們就像我的家人一樣, 跟著我們一起吃, 一起玩, 一起睡. 我們每天都會出門溜貓跟狗, 帶他們散步! 不帶他們出去還會哭呢! 我的父母非常開明, 他們一向都很尊重我的想法並且支持著我, 這真的是很難能可貴的一件事! 我愛我的家人, 能擁有這樣一個完整的家庭, 真的很幸運!"},mermer:{skills:a.MERMER_SKILLS_TW,projects:n.MERMER_PROJECTS_TW}}},57:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(58),n=o(55),r=o(54),i=o(25),s=o(24),l=o(56),c={menus:a.MENUS_TW,about:r.ABOUT_TW,skills:i.SKILLS_TW,experience:n.EXPERIENCE_TW,projects:s.PROJECTS_TW,helper:l.HELPER_TW};t.default=c},58:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"MENUS_TW",function(){return a});var a={about:"簡介",skills:"技能",experience:"經歷",projects:"作品集"}},71:function(e,t,o){"use strict";var a={isMobileOrTablet:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}};t.a=a},72:function(e,t,o){"use strict";var a=o(11),n=o(149);a.a.use(n.a);var r=function(){return o.e(5).then(o.bind(null,161))},i=function(){return o.e(0).then(o.bind(null,156))},s=function(){return o.e(2).then(o.bind(null,160))},l=function(){return o.e(3).then(o.bind(null,163))},c=function(){return o.e(1).then(o.bind(null,162))},u=[{path:"/",name:"home",component:r},{path:"/about",name:"about",component:i},{path:"/skills",name:"skills",component:l},{path:"/experience",name:"experience",component:s},{path:"/projects",name:"projects",component:c}],d=new n.a({routes:u,mode:"history",linkActiveClass:"active"});t.a=d},73:function(e,t,o){function a(e){o(141),o(142)}var n=o(74)(o(108),o(148),a,"data-v-6e7b7717",null);e.exports=n.exports}},[109]);
//# sourceMappingURL=app.903e5c7e21a16c5a3a9b.js.map