(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1185:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"vi":{"members":{"boardsTitle":"Các thành viên Ban Quản Trị","starsTitle":"Các thành viên nổi bật"}},"en":{"members":{"boardsTitle":"Board Members","starsTitle":"Stars"}}}'),delete e.options._Ctor}},1201:function(e,t,r){var content=r(1235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(149).default)("a2bddb66",content,!0,{sourceMap:!1})},1234:function(e,t,r){"use strict";r(1201)},1235:function(e,t,r){var o=r(148)(!1);o.push([e.i,'.members-page{position:relative}.members-page:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:url(/pages/members/5655510.jpg);background-size:cover;background-repeat:no-repeat;opacity:.25}.members-page .inner-page{display:flex;flex-direction:column;align-items:center;grid-gap:50px;gap:50px;position:relative;z-index:1}.members-page-boards .title{padding-bottom:20px;margin-bottom:30px;text-align:center;position:relative;z-index:2}.members-page-boards .title:before{content:"*";position:absolute;z-index:1;top:70%;left:calc(50% - 10px)}.members-page-boards .title:after{content:"";position:absolute;bottom:0;left:0;right:0;height:1px;transform:scale(0);transform-origin:center;background:hsla(0,0%,60.4%,.35);-webkit-animation:spanWidth 2s forwards;animation:spanWidth 2s forwards}@-webkit-keyframes spanWidth{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes spanWidth{0%{transform:scale(0)}to{transform:scale(1)}}.members-page-boards-members{display:flex;flex-direction:column;grid-gap:35px;gap:35px}.members-page-boards-members-item{display:flex;flex-direction:column;width:200px}.members-page-boards-members-item img{width:150px;height:150px;margin:auto auto 10px;-o-object-fit:cover;object-fit:cover;border-radius:50%;box-shadow:0 6px 24px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.08)}.members-page-boards-members-item h3{text-align:center;font-size:13px;margin-bottom:0}.members-page-boards-members-item h3:last-child{font-weight:bolder}.members-page-boards-members-head{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:30px;gap:30px;justify-items:center;grid-template-areas:"ngocmai ngocmai ngoctai ngoctai duydat duydat" "thutrinh thutrinh congdi congdi quoccuong quoccuong"}.members-page-boards-members-head>div[class$=item]:first-child{grid-area:ngoctai}.members-page-boards-members-head>div[class$=item]:nth-child(2){grid-area:ngocmai}.members-page-boards-members-head>div[class$=item]:nth-child(3){grid-area:duydat}.members-page-boards-members-head>div[class$=item]:last-child{grid-area:quoccuong}.members-page-boards-members-head>div[class$=item]:nth-last-child(2){grid-area:congdi}.members-page-boards-members-head>div[class$=item]:nth-last-child(3){grid-area:thutrinh}@media(max-width:650px){.members-page-boards-members-head{grid-template-areas:"ngoctai ngoctai ngoctai ngocmai ngocmai ngocmai" "duydat duydat duydat thutrinh thutrinh thutrinh" "congdi congdi congdi quoccuong quoccuong quoccuong"}}@media(max-width:430px){.members-page-boards-members-head{grid-template-areas:"ngoctai ngoctai ngoctai ngoctai ngoctai ngoctai" "ngocmai ngocmai ngocmai ngocmai ngocmai ngocmai" "duydat duydat duydat duydat duydat duydat" "thutrinh thutrinh thutrinh thutrinh thutrinh thutrinh" "congdi congdi congdi congdi congdi congdi" "quoccuong quoccuong quoccuong quoccuong quoccuong quoccuong"}}.members-page-boards-members-others{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-gap:30px;gap:30px;justify-items:center;padding-top:35px;border-top:1px solid hsla(0,0%,60.4%,.35)}',""]),e.exports=o},1236:function(e,t,r){"use strict";var o=r(1185),n=r.n(o);t.default=n.a},1299:function(e,t,r){"use strict";r.r(t);var o=r(15),n=(r(56),r(74),r(50),r(339),r(57),r(47),r(64),r(79),r(51),{scrollToTop:!1,head:function(){var e=this;return{title:"Các thành viên Ban Quản Trị",meta:[{charset:"utf-8"},{hid:"description",name:"description",content:"Các thành viên Ban Quản trị và thành viên nổi bật."}],link:[{hid:"aos-css-member",rel:"stylesheet",href:"/libs/aos/aos.css"}],script:[{hid:"aos-js-member",src:"/libs/aos/aos.js",defer:!0,callback:function(){e.initAOS()}}]}},data:function(){return{boardMembers:[]}},computed:{getBoardHeadMembers:function(){var e=Object.values(this.getBoardMembers()).filter((function(e){return 32===e.roleId||35===e.roleId||36===e.roleId||37===e.roleId})).map((function(e){return e.members}));return e=[].concat.apply([],e)},getBoardOtherMembers:function(){var e=Object.values(this.getBoardMembers()).filter((function(e){return 32!==e.roleId&&35!==e.roleId&&36!==e.roleId&&37!==e.roleId})).map((function(e){return e.members}));return e=[].concat.apply([],e)}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$wp,t.next=3,r.$get("/members?per_page=100");case 3:return o=t.sent,t.abrupt("return",{boardMembers:o});case 5:case"end":return t.stop()}}),t)})))()},methods:{initAOS:function(){console.log("initializing AOS [members]..."),AOS.init({once:!0})},getMemberRoles:function(e){var t={};return e.forEach((function(e){2===e.member_roles[0]||Object.keys(t).includes(e.member_roles[0])||(t[e.member_roles[0]]={roleId:e.member_roles[0],roleName:e.meta.role})})),t},getBoardMembers:function(){var e=this.getMemberRoles(this.boardMembers),t=Object.keys(e).map((function(e){return parseInt(e,10)}));return this.boardMembers.forEach((function(r){t.includes(r.member_roles[0])&&(e[r.member_roles[0]].members||(e[r.member_roles[0]].members=[]),e[r.member_roles[0]].members.push(r))})),e}}}),m=(r(1234),r(101)),d=r(1236),component=Object(m.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"members-page"},[r("div",{staticClass:"inner-page"},[r("div",{staticClass:"members-page-boards"},[r("h1",{staticClass:"title"},[e._v(e._s(e.$t("members.boardsTitle")))]),e._v(" "),r("div",{staticClass:"members-page-boards-members"},[r("div",{staticClass:"members-page-boards-members-head"},e._l(e.getBoardHeadMembers,(function(t){return r("div",{key:t.id,staticClass:"members-page-boards-members-item"},[r("img",{attrs:{src:t.meta.avatar}}),e._v(" "),r("h3",{staticClass:"text"},[e._v(e._s(t.meta.role))]),e._v(" "),r("h3",{staticClass:"text"},[e._v(e._s(t.title.rendered))])])})),0),e._v(" "),r("div",{staticClass:"members-page-boards-members-others"},e._l(e.getBoardOtherMembers,(function(t,o){return r("div",{key:t.id,staticClass:"members-page-boards-members-item",attrs:{"data-aos":o<3?"":"zoom-out"}},[r("img",{attrs:{src:t.meta.avatar}}),e._v(" "),r("h3",{staticClass:"text"},[e._v(e._s(t.meta.role))]),e._v(" "),r("h3",{staticClass:"text"},[e._v(e._s(t.title.rendered))])])})),0)])]),e._v(" "),e._e()])])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports}}]);