_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"8LYH":function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/after",function(){return l("i9Yl")}])},apO0:function(e,t,l){"use strict";var a=l("mXGw"),n=l.n(a),r=l("YbmN"),i=l("5dyF"),o=l.n(i),s=l("OU2W"),u=n.a.createElement,c=function(){var e=Object(a.useState)(!1),t=e[0],l=e[1];return Object(a.useEffect)((function(){document.body.className=t?"dark-mode":"light-mode"}),[t]),u(n.a.Fragment,null,u("label",{className:"dark-mode-toggle","aria-label":t?"Activate light mode":"Activate dark mode",title:t?"Activate light mode":"Activate dark mode"},u("input",{type:"checkbox",checked:!t,onChange:function(){return l(!t)}}),u("div",null)))},d=l("Yh15"),g=n.a.createElement,m=function(e){var t=e.BeforeControls,l=e.FirstControl,r=Object(s.b)(),i=r.statusMessage,o=r.isSaving,u=Object(d.c)().siteName;return g(n.a.Fragment,null,g("header",{id:"header",role:"banner"},g("a",{"aria-current":"page",className:"",href:"/"},g("span",null,u)),i&&g("span",{className:o?"animate-pulse":void 0},i),t&&g(t,null),g("div",{className:"controls"},g(l||a.Fragment,null),g(c,null))))},f=l("gdji"),p=n.a.createElement,b=function(){Object(r.a)().userDisplayName;var e=Object(d.c)(),t=e.authorName,l=e.authorTwitter;return p("footer",{className:"bg-white dark:bg-gray-300 border-t border-gray-500 shadow"},p("div",{className:"container mx-auto flex py-8"},p("div",{className:"w-full mx-auto flex flex-wrap"},p(f.b,{className:"flex w-full lg:w-1/2 "},p(f.b,{className:"px-8"},p(f.c,{level:3,className:"font-bold text-gray-900"},p(o.a,{href:"/about"},p("a",null,"About"))),p(f.d,{className:"py-4 text-gray-600 text-sm"},"By ",t,". Built with ",p(f.a,{href:"https://digitalgardenbuilder.app/"},"Digital Garden Builder")))),p(f.b,{className:"flex w-full lg:w-1/2 lg:justify-end lg:text-right"},p(f.b,{className:"px-8"},p(f.c,{level:3,className:"font-bold text-gray-900"},"Social"),p("ul",{className:"list-reset items-center text-sm pt-3"},p("li",null,p("a",{className:"inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1",href:"https://twitter.com/".concat(l)},"Twitter"))))),p(f.b,{className:"flex w-full lg:justify-end lg:text-right"}))))};t.a=function(e){var t=e.children,l=e.BeforeControls,a=e.pageDisplayTitle,r=e.FirstControl;return p(n.a.Fragment,null,p("div",{className:"layout"},p(n.a.Fragment,null,p(m,{BeforeControls:l,FirstControl:r,pageDisplayTitle:null!==a&&void 0!==a?a:"Digital Gardens"}),p("main",null,t),p(b,null))))}},dAGg:function(e,t,l){e.exports=l("bBV7")},i9Yl:function(e,t,l){"use strict";l.r(t);var a=l("mXGw"),n=l.n(a),r=l("apO0"),i=l("5dyF"),o=l.n(i),s=l("dAGg"),u=l("CiRD"),c=n.a.createElement;t.default=function(){var e=Object(s.useRouter)().query;console.log(2,e);var t=Object(u.a)({token:e.token?e.token:""}).token;return c(r.a,{pageDisplayTitle:"Login"},c("section",null,t?c("div",null,"Logged in with token ",t):c("div",null,"No token, that is bad.")),c("section",null,c("ul",null,c("li",null,c(o.a,{href:"/"},c("a",null,"Notes"))),c("li",null,c(o.a,{href:"/settings"},c("a",null,"Settings"))),c("li",null,c(o.a,{href:"/login/logout"},c("a",null,"Logout"))),c("li",null,c("a",{href:"https://docs.digitalgardenbuilder.app"},"Documentation")))))}}},[["8LYH",0,1,2,4,3]]]);