const tw = {
  entryView: {
    entryTitle: `歡迎來到KevinHu的工作室`,
    entryDesc: `請拖曳至該區塊並點擊進入我的網站！`
  },
  homePage: {
    welcome: `歡迎來到我的工作室，有任何問題歡迎聯絡我！`
  },
  menus: {
    about: `簡介`,
    skills: `技能`,
    experience: `經歷`,
    projects: `作品集`
  },
  about: {
    newEra: `大前端時代`,
    brief1: `在開發經驗邁入第五年的同時, 成為一資深前端工程師, 目前在台灣發展`,
    brief2: `我善於開發modern, interactive, responsive, multiple-language and cross browser的web application. 持續追尋整個前端生態精進自己並且慢慢擴展個人的backend技能與uiux思考能力`,
    quote: `引述`,
    quoteDesc: `A senior frontend developer should always clearly issue and find the best solution for different situation. Has hide communication skill with backend and UIUX even with PM.`,
    duty: `職責`,
    special: `特殊經歷`,
    speaker: `講者`,
    tutorPiecework: `家教與接案`
  },
  skills: {
    vue: `熟悉vue生態系, 擅長打造pure vue元件並使用vuepress來產生文件. 在專案中分清楚project/common元件差異, 這個網站就是最好的範例.`,
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
    paas: `Platform as a Service像是GCP, AWS EC2, Azure都是非常強大的! 在你的產品剛開始的階段, 這些服務可以有效減少server side的成本. 當你的系統越來越茁壯的時候, 你也可以漸進式的增強你的系統. 使用這些服務時, 可不要忘了其優缺點並隨時monitor你的系統啊`,
    jquery: `在我剛成為前端工程師時, jquery可是人人具備的一個工具. 我相信每個超過3年經驗的前端都曾活用過jquery. . 一個資深的前端工程師必能活用並用架構其專案. jquery還是一個很好的工具, 只是現在已經不是jquery的時代. 不過在其豐富的library資源下, 還是很適合拿來做一些活動網站的.`,
    angularjs: `在這大前端時代的開端, 有許多mvvm library的先驅, 像是ember, backbone, knoutout, angularjs等等. 其中最知名且最多人用的就是angularjs! 我認為angularjs讓人們開始重視前端的角色, 並讓人們開始知道前端不只是寫寫html, css, jquery.`,
    mvc: `Backend mvc架構是非常常見的, 如ruby on rails, java play, 甚至nodejs express等等..對我來說, 他們的概念都很相似, 只是不同語言有不同的特性. 雖然現在已經越來越多的api server架構, mvc架構再適當的結合前端framework下扔然是個開發好選擇.`,
    database: `在過去, 我曾經在某個專案中, 直接寫sql來處理資料庫, 這讓我對關聯式資料庫的了解幫助不少. 現在已經蠻多library可以讓我們不用直接寫sql處理資料庫了. 至於nosql的資料庫像是mogodb, redis等等..也是一種選擇. 許多baas的服務都是用nosql的概念去實作像是firebase, 在使用這些服務的過程中也讓我對nosql了解不少.`,
    cms: `cms內容管理系統像是wordpress, joomla等等..用來建立官網是非常有幫助且快速的. 我過去也使用過wordpress建立了不少網站, 甚至接案. 是個非常好用的工具.`
  },
  experience: {
    sentences: `情緒管控是關鍵而態度決定一切`,
    fujenUniversity: {
      title: `輔仁大學-資訊工程系`,
      topic: `學業, 社團, 打工充實我的學生生活`,
      desc: `資訊工程系的相關課程讓我對於web能輕易理解, 課程中不乏計算機概論, 演算法, 資料結構, 資料庫, 作業系統..等等. 對於我日後工作上幫助很多! 學生時期的我, 也熱烈地在參與社團, 擔任幹部, 為社團而努力. 之間也一直都有在打工, 最長的一段是在星巴克待了2年直到畢業. 社團, 打工的經驗讓我能快速的適應社會, 並有效的與他人溝通. 這些經驗都是非常難能可貴的, 充實我的學生生活.`
    },
    aite: {
      title: `艾特網路`,
      topic: `小而精實不到10人的的網創圈新創公司`,
      desc: `大學畢業找尋選擇第一份工作時, 心中就已鎖定要找新創公司了. 當時認為那是一個能讓我快速成長的環境. 事實證明, 我的選擇沒有錯! 我也很感激在這裡的一切! 艾特網路很特別, 上班的第一天就是公司正式開始的第一天, 公司的一點一滴, 從logo, 活動到產品的發想, 幾乎都是大家一起努力出來的結果. 公司也積極參與活動, 像是hackthon, 新北idea show等等.. 對我來說那段時間真的成長很多, 擴展不同的眼界. 在公司只有我是junior且是唯一一個負責前端大小事務, 什麼都不太行, 吃了不少苦頭, 但漸漸的我步上軌道, 成為能獨當一面的一份子! 每天, 對於一間新創公司都是一個挑戰, 沒有人知道下一秒會發生什麼事, 遇到什麼困難. 曾經, 公司就剩下老闆與我, 帶著實習生一起做產品的另類時光, 那又是另一個故事了. 不論如何, 我從不後悔進入艾特網路, 在這裡所學到的東西, 都讓我在未來打下基礎.`
    },
    eztravel: {
      title: `易遊網`,
      topic: `資訊部門100多人的中大型網路起家旅遊業`,
      desc: `易遊網是一間網路起家的公司, 在當時算是領先市場的起家, 但是卻在2008年網站就沒在更新過了! 因此決定從回電商本業, 把所有專案逐一改版! 因此, 我決定進來幫助公司, 看看不同的人, 不同的做法, 看看中大型公司多人合作的情況, 避免成為井底之蛙. 在這邊是以線別分團隊專案制, 全部的前端大概有10多個. 先後曾做過票券專案, ucar專案, 並在首頁改版專案中擔任主要統整, 分配前端大小事務. 中間也曾進入UED team與行銷, PM單位溝通如何讓產品與工作流程更好. 我想大公司與新創公司最大的不同是, 人越多溝通的成本越高且有大公司的負擔, 但也相對穩定, 一切沒有好壞之分, 端看個人適合與否. 在這得到很多前輩與同事的幫忙, 而我自身也熱於幫助他人解決問題, 分享不同的東西. 期望自己能夠不要停滯, 持續朝自己的路前進!`
    },
    istaging: {
      title: `宅妝股份有限公司`,
      topic: `變化快速走在尖端的新創公司`,
      desc: `宅妝是一間專注於AR/VR領域的一間跨國公司, 客戶來自世界各地, 產品多國語系為基本. 在這邊一切都很新奇, 這也是我最後選擇來宅妝的主要原因之一. 使用webVR如aframe等等較為創新的技術, 處理過各種特殊事情, 像是阿拉伯文版面與排版必須要整個相反等等.. 變化相當快速. 前端配置為2-3人, 組織較為扁平, 自己為自己負責. 期間也代表一同前往巴賽隆納參加MWC(世界行動通訊大會)擴展視野. 是一個非常難得的經歷! 工作一陣子後, 我想最重要的還是保持自己那顆不斷學習的心與瞭解趨勢, 才不會停滯.`
    }
  },
  projects: {
    nonActive: `已不存在`
  },
  helper: {
    menu: {
      aboutWebsite: `關於新網站`,
      oldWebsite: `前往舊網站`,
      messageBoard: `留言板`
    },
    mermer: {
      skills: {
        vue: '我從2016開始, 使用vue作為個人主要開發..',
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
      },
      projects: {
        179: `179公益是個線上公益媒合平台, 現在已經沒在運作了.`,
        ezCouponTaiwan: `ezTravel是個主要專注於台灣的線上旅遊業, 國內票券線別改版主要由我與另一位前端開發.`,
        dollhouse: `dollhouse是個結合3d.io與webVR aframe的prototype.`,
        aiteOfficial: `aite官網使用wordpress來開發與維護.`,
        oldFurnitureApp: `維護舊有的istaging web app, 使用angularjs.`,
        newFurnitureApp: `開發並測試性新專案新的istaging web app, 使用react-native.`,
        vrportal: `istaging用戶後台, 結合google analytic資料分析, 使用vue, d3, gapi.`,
        cpcOfficial: `cpc官網使用wordpress來開發與維護.`,
        vreditorCn: `Livetour cn版本編輯後台, 可以使用taobao登入. 使用vue結合aframe編輯virtual tour.`,
        ezHomepage: `PezTravel是個主要專注於台灣的線上旅遊業, 主網頁改版由多位前端工程師一起開發. 在當時主導專案中前端大小事務.`,
        lejetbcOfficial: `lejetbc官網使用wordpress來開發與維護`,
        vreditorSdk: `Vreditor sdk讓所有使用者可以透過istaging api service更容易的編輯virtual tour.`,
        lejetbc: `lejetbc主要服務為租借商務場地相關, 現在已經沒在運作了.`,
        ezUcarApp: `協同開發與維護ucar線別在ezTravel app裡. 此專案已停止.`,
        spotmeDashboard: `spotme是一個商務人脈平台如aboutme, linkedin等等..其後台可以編輯個人形象網站.`,
        vrsdkDoc: `Vreditor和vrviewer sdk的主要文件, 使用vue, vuepress與markdown.`,
        vrviewer: `Livetour是virtual tour主要呈現端, 主要使用krpano, 在webVR的支援下, 可以使用手機與眼鏡觀看VR.`,
        spotme: `spotme是一個商務人脈平台如aboutme, linkedin等等..主要包含個人形象網站與機會媒合兩部分. 此專案已停止.`,
        requestAnimationProfolio: `練習requestAnimation並實作在舊版個人網站.`,
        spotrainer: `spotrainer是一個講師平台, 主要包含線上與線下的講課資訊, 此專案已停止.`,
        ezUcar: `ezTravel是個主要專注於台灣的線上旅遊業, ucar全新專案主要由我與另一位前端開發.`,
        furnitureDashboard: `維護舊有的istaging web app, 使用angularjs.`,
        vreditorUs: `Livetour us版本編輯後台, 可以使用fb, google登入. 使用vue結合aframe編輯virtual tour.`,
        oldWebsite: `在2015的時候, 個人網站第一版誕生, 當時嘗試使用es2015結合jquery與nodejs.`,
        vrviewerSdk: `Vrviewer sdk讓所有使用者可以透過istaging api service更容易的呈現virtual tour.`,
        tourRing: `TourRing是一個全新的線上直播帶看服務, 建立在Livetour的基礎下, 經理人與客戶端可以直接在virtour tour上面雙向即時溝通.`,
        updownrightleftProfolio: `實作up-down-right-left full page網站, 並用來自我介紹.`
      }
    }
  }
  // jobTitle: 'Frontend Developer'
}

export default tw
