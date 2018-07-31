const tw = {
  entryView: {
    entryTitle: `歡迎來到KevinHu的工作室`,
    entryDesc: `請拖曳至該區塊並點擊進入我的網站！`
  },
  homePage: {
    welcome: `歡迎來到我的工作室，有任何問題歡迎聯絡我！`
  },
  menus: {
    profile: `簡介`,
    skill: `技能`,
    experience: `經歷`,
    projects: `作品集`
  },
  skills: {
    vue: `熟悉vue生態系, 並擅長打造pure vue元件, 分清楚project/common 元件差異, 這個網站就是最好的範例.`,
    es2015: `使用async/await搭配promise已是基本配備, 其他特性也靈活運用中. 個人認為善用class constructor不依靠任何framework已能輕鬆地建立任何一個應用.`,
    test: `Unit test: 使用Karma/Jest測試vue相關生態系. E2e test: 使用cypress為主, 依據user flow撰寫test case. 結合CI, 現在已不太能接受沒有寫任何測試的專案, 但也不應該有覆蓋率的迷失.`,
    aframe: `從0.2版就開始作為主要開發, 更榮登aframe weekly posts. webVR的最佳framework, 3dio.js更是結合aframe的最佳典範. 使用aframe更脫離不了threejs.`,
    css: `早期維護過到ie9, polyfill, 沒有flex/grid時光, 打下了css底基. 從less, scss, stylus都實際在專案中實戰過, 在某一次專案中, 更接觸了RTL語系排版的需求, 過程中專研並實現幾乎不多寫一行css來實現RTL語系排版. 從css preprocessor到css in js甚至是css自身的演化, 都比以前好很多了. 個人最喜愛vue對css的處理方式.`,
    d3: `d3處理視覺化資料上有很大的彈性, 能做到許多其他library做不到的, 非常全面. 曾使用d3 v4版本來處理某個專案過, 視覺化資料有很多library可以選擇, 只要選擇一個喜歡的並符合你需求的即可. `,
    thirdparty: `串接第三方api是非常常見的, 我們經常會使用fb, google甚至是wechat來作為服務的登入. Google analytic, google map api也是非常常見的, 提供給我們在專案中使用.`,
    tools: `直到現在, Webpack已經幾乎是一統江湖了, 前端開發必備. 版本控管基本上也看不到svn囉, 我們更以shell script, jenkins來做前端自動化. `,
    scrum: `Scrum是最有名的aglie敏捷開發之一, 另外我們常用Redmine, trello搭配使用做專案管理. 如果你們團隊也試著導入scrum, 千萬不要讓他變成假scrum真waterfall..`,
    nodejs: `使用同樣為javascript的nodejs作為開發, 是非常常見的一個選項. nodejs v8引擎也越來越強大. 在這個大前端時代, 應用端這端也是不可被忽略的. 沒有一點相關的經驗與知識可是不行的.`,
    react: `React的社群非常豐富也非常活躍, 這是vue所沒有的. 在react生態系中, 大家可以用各種方式開發. 個人目前最喜愛react-observable的處理方式, 也讓我間接了解Rxjs. React對於css的處理一直不是很喜歡, 目前覺得css module較為合適. angularjs讓大家看見前端, 讓前端的地位提升, 最後卻讓大家失望. 人們需要一點慰藉, 而react也適時出現了! 結果就如現況, React為前端提升了很大的地位與薪資水平.`,
    reactnative: `在這大前端時代, React native是不可或缺的功成之一, 我們可以用開發web的方式開發一個native app. 依靠著react生態系, react native已經在mobile app佔有一席之地. 希望vue能慢慢迎頭趕上. 使用react native開發還是有許多限制, 很多時候我們還是需要針對ios/android處理, 但是真的精通三方的人幾乎是沒有! 所以如果您也打算導入react native的話, 請一定要好好先評估過您的需求啊.`,
    seo: `Seo有很多提升的方式, 像是撰寫正確的html架構, 使用server side render, prernder, 提交xml, sitemap等等之類. 使用google analytics, search console, adwords 的能力是不可或缺的. Seo每年都會調整, 像是多使用社群的網站, 使用PWA技術等等, 必須要持續關注.`,
    baas: `Backend as a Service讓我們有能力去處理以前backend處理的事, 很適合處理一些小型的project. 也因此能夠減輕backend的loading. 但也不全然只有好處, 在確定要導入之前, 可一定要了解導入後的結果.`,
    pass: `Platform as a Service像是GCP, AWS EC2, Azure都是非常強大的! 在你的產品剛開始的階段, 這些服務可以有效減少server side的成本. 當你的系統越來越茁壯的時候, 你也可以漸進式的增強你的系統. 使用這些服務時, 可不要忘了其優缺點並隨時monitor你的系統啊`,
    jquery: `在我剛成為前端工程師時, jquery可是人人具備的一個工具. 我相信每個超過3年經驗的前端都曾活用過jquery. . 一個資深的前端工程師必能活用並用架構其專案. jquery還是一個很好的工具, 只是現在已經不是jquery的時代. 不過在其豐富的library資源下, 還是很適合拿來做一些活動網站的.`,
    angularjs: `在這大前端時代的開端, 有許多mvvm library的先驅, 像是ember, backbone, knoutout, angularjs等等. 其中最知名且最多人用的就是angularjs! 我認為angularjs讓人們開始重視前端的角色, 並讓人們開始知道前端不只是寫寫html, css, jquery.`,
    mvc: `Backend mvc架構是非常常見的, 如ruby on rails, java play, 甚至nodejs express等等..對我來說, 他們的概念都很相似, 只是不同語言有不同的特性. 雖然現在已經越來越多的api server架構, mvc架構再適當的結合前端framework下扔然是個開發好選擇.`,
    database: `在過去, 我曾經在某個專案中, 直接寫sql來處理資料庫, 這讓我對關聯式資料庫的了解幫助不少. 現在已經蠻多library可以讓我們不用直接寫sql處理資料庫了. 至於nosql的資料庫像是mogodb, redis等等..也是一種選擇. 許多baas的服務都是用nosql的概念去實作像是firebase, 在使用這些服務的過程中也讓我對nosql了解不少.`,
    cms: `cms內容管理系統像是wordpress, joomla等等..用來建立官網是非常有幫助且快速的. 我過去也使用過wordpress建立了不少網站, 甚至接案. 是個非常好用的工具.`
  },
  mermer: {
    vue: '使用vue作為主要開發已超過2年..',
    es2015: `前端過去那些亂七八糟的年代已經過去了..`,
    test: `前端的測試結合CI是很重要的..`,
    aframe: `大前端時代, webVR也是不可缺少的一部份..`,
    css: `ie走了, 移動端的世界緊接而來..`,
    d3: `視覺化資料是前端不可或缺的一部份..`,
    thirdparty: `串接第三方api如fb, google是非常常見的..`,
    tools: `現在已經不是直接寫寫html, css, js的世界囉..`,
    scrum: `Scrum vs waterfall, 你的團隊喜歡哪一個..`,
    react: `React是在angularjs之後最後歡迎的framewrok之一..`,
    reactnative: `我相信react native是人們更願意選擇react的原因之一..`,
    seo: `Seo也是前端工程師需具備的一部份..`,
    baas: `Baas服務已經越來越多了..`,
    paas: `Paas服務是非常強大的..`,
    jquery: `已經有好一陣子沒用jquery了..`,
    angularjs: `曾經幾乎一統江湖的angularjs現在..`,
    mvc: `Backend mvc扔是一個業界非常常見的架構之一..`,
    database: `擁有資料庫的相關知識是非常有幫助的..`,
    cms: `使用cms內容管理系統來建立官網是非常有幫助且快速的..`
  }
  // jobTitle: 'Frontend Developer'
}

export default tw
