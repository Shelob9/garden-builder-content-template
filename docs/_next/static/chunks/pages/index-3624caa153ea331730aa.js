_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n);var o=t("mXGw"),u=t.n(o),a=t("PZKW"),r=t("1XCU"),c=t("YbmN"),i=u.a.createElement;n.default=function(){var e=Object(c.a)().isLoggedIn;return i(u.a.Fragment,null,i(u.a.Fragment,null,i(r.a,{noteSlug:"digital-garden-builder"},i(a.a,{isLoggedIn:e}))))}},PZKW:function(e,n,t){"use strict";var o=t("mXGw"),u=t.n(o),a=t("apO0"),r=t("Q+kv"),c=t("Yh15"),i=t("1XCU"),g=t("nOHt"),l=u.a.createElement;n.a=function(e){var n=e.noteOneSlug,t=e.noteTwoSlug,s=e.noteThreeSlug,w=e.isLoggedIn,d=Object(g.useRouter)(),f=Object(i.b)(),b=f.currentNotes,h=f.toggleBox,p=f.isNoteOpen,m=f.hasNote,O=f.addNote,N=Object(c.b)().notes;return Object(o.useEffect)((function(){n&&O("one",n),t&&O("two",t),s&&O("three",s)}),[]),Object(o.useEffect)((function(){var e="/notes/".concat(b.one.noteSlug);b.two&&(e="".concat(e,"?noteTwo=").concat(b.two.noteSlug)),b.three&&(e="".concat(e,"&noteThree=").concat(b.three.noteSlug)),d.push(e)}),[b]),l(u.a.Fragment,null,l(a.a,null,l("div",{className:"note-columns-scrolling-container"},l("div",{className:"note-columns-container"},N?l(u.a.Fragment,null,l(r.b,{isLoggedIn:w,slug:b.one.noteSlug,isOpen:p("one"),toggleBox:function(){return h("one")},position:"one"}),m("two")&&l(r.b,{isLoggedIn:w,slug:b.two.noteSlug,isOpen:p("two"),toggleBox:function(){return h("two")},position:"two"}),m("three")&&l(r.b,{isLoggedIn:w,slug:b.three.noteSlug,isOpen:p("three"),toggleBox:function(){return h("three")},position:"three"})):l("div",null,"Loading")))))}}},[["/EDR",0,1,2,3,4,5]]]);