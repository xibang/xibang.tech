(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{218:function(t,e,n){},219:function(t,e,n){t.exports=n.p+"img/slide1.89e3809.jpg"},220:function(t,e,n){"use strict";n(218)},221:function(t,e,n){"use strict";var r=n(219),o={props:{img:{type:String,required:!1,default:n.n(r).a},title:{type:String,required:!0,default:""},desc:{type:String,required:!1,default:""}}},c=(n(220),n(11)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page_header",style:{backgroundImage:"url("+t.img+")"}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.desc))])])}),[],!1,null,null,null);e.a=component.exports},222:function(t,e,n){},223:function(t,e,n){"use strict";n(222)},224:function(t,e,n){"use strict";var nav=n(44),r={data:function(){return{nav:nav.a[0].children}}},o=(n(223),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("ul",t._l(t.nav,(function(e){return n("li",{key:e.name},[n("NuxtLink",{staticClass:"pure-button",attrs:{to:e.to}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},227:function(t,e,n){"use strict";e.a={repositories:18,projects:[{name:"xibang.tech",description:"西邦官网 XiBang Website ",url:"https://github.com/xibang/xibang.tech",primaryLanguage:{name:"Vue",color:"#41b883"},stargazers:3,forks:1},{name:"github-trending",description:":octocat: Github Daily Trending Archives",url:"https://github.com/xibang/github-trending",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"github-rank-china",description:":octocat: Github Rank 中国排名每日变化信息记录",url:"https://github.com/xibang/github-rank-china",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:16,forks:3},{name:"github.kaiyuan.fund",description:":octocat: Github Rank China 中国排行榜网站 https://github.kaiyuan.fund",url:"https://github.com/xibang/github.kaiyuan.fund",primaryLanguage:{name:"Vue",color:"#41b883"},stargazers:14,forks:0},{name:"wechat-lottery",description:"微信活动抽奖营销吸粉示例项目",url:"https://github.com/xibang/wechat-lottery",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:3,forks:2},{name:"github-oauth-sdk",description:null,url:"https://github.com/xibang/github-oauth-sdk",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"node-common",description:"Node.js 通用类封装 https://npmjs.org/package/@xibang/node-common",url:"https://github.com/xibang/node-common",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"node-mysql",description:"MySQL 连接优化封装 https://npmjs.org/package/@xibang/mysql",url:"https://github.com/xibang/node-mysql",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"node-redis",description:"Redis 连接优化 https://npmjs.org/package/@xibang/redis",url:"https://github.com/xibang/node-redis",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"about.xibang.tech",description:"关于西邦文档 https://about.xibang.tech",url:"https://github.com/xibang/about.xibang.tech",primaryLanguage:null,stargazers:2,forks:0},{name:"node-appkey",description:"AppKey/AppSecret生成器 https://www.npmjs.com/package/appkey",url:"https://github.com/xibang/node-appkey",primaryLanguage:{name:"JavaScript",color:"#f1e05a"},stargazers:0,forks:0},{name:"docs.xibang.tech",description:"XiBang Docs of Gitbook https://docs.xibang.tech",url:"https://github.com/xibang/docs.xibang.tech",primaryLanguage:null,stargazers:1,forks:0},{name:"log.lu",description:"暂时停放",url:"https://github.com/xibang/log.lu",primaryLanguage:{name:"HTML",color:"#e34c26"},stargazers:0,forks:0}]}},233:function(t,e,n){},247:function(t,e,n){"use strict";n(233)},265:function(t,e,n){"use strict";n.r(e);var title=n(221),r=n(224),o=n(227),c={components:{XTitle:title.a,XAside:r.a},data:function(){return{github:o.a}},head:function(){return{title:"开源项目 | 西邦智能科技",meta:[{hid:"keywords",name:"keywords",content:"关于,开源项目,willin,西邦"}]}}},l=(n(247),n(11)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"about"}},[n("XTitle",{attrs:{title:"开源项目",desc:"GitHub XiBang Opensource",img:"/images/header/about.jpg"}}),t._v(" "),n("div",{staticClass:"text-center container"},[n("div",{staticClass:"content"},[n("h3",[t._v("最新更新")]),t._v(" "),n("table",{staticClass:"pure-table pure-table-horizontal"},[t._m(0),t._v(" "),n("tbody",t._l(t.github.projects,(function(e){return n("tr",{key:e.name},[n("td",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n                "+t._s(e.name)+"\n              ")])]),t._v(" "),n("td",[e.primaryLanguage&&e.primaryLanguage.name?[n("span",{style:{color:e.primaryLanguage.color}},[t._v("♥")]),t._v("  "+t._s(e.primaryLanguage.name)+"\n              ")]:[t._v("\n                -\n              ")]],2),t._v(" "),n("td",[t._v("\n              "+t._s(e.description)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e.stargazers)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e.forks)+"\n            ")])])})),0)]),t._v(" "),n("p",[t._v("\n        总计 "+t._s(t.github.repositories)+" 个项目，详情请访问GitHub： "),n("a",{attrs:{href:"https://github.com/xibang",target:"_blank"}},[t._v("@xibang")]),t._v("。\n      ")]),t._v(" "),n("h4",[t._v("捐赠支持")]),t._v(" "),n("p",[t._v("\n        如果我们的开源项目对您有益，您开源选择成为我们的\n        "),n("NuxtLink",{attrs:{to:"/sponsers"}},[t._v("\n          赞助者\n        ")]),t._v("。\n      ")],1)]),t._v(" "),n("XAside")],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("语言")]),t._v(" "),n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("Stars")]),t._v(" "),n("th",[t._v("Forks")])])])}],!1,null,null,null);e.default=component.exports}}]);