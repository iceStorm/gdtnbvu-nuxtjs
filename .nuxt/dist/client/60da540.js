(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1175:function(t,e,n){var content=n(1178);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(149).default)("f2d4863a",content,!0,{sourceMap:!1})},1177:function(t,e,n){"use strict";n(1175)},1178:function(t,e,n){var c=n(148)(!1);c.push([t.i,"#language-switcher .language-switcher-item{display:flex;justify-content:space-between;align-items:center;grid-gap:10px;gap:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:3px 10px 3px 8px;border-radius:20px;border:none;background:rgba(0,0,0,.151);color:#000}#language-switcher .language-switcher-item img{width:15px}",""]),t.exports=c},1180:function(t,e,n){"use strict";n.r(e);n(50);var c={computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},methods:{switchLocale:function(t){}},mounted:function(){}},o=(n(1177),n(101)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"language-switcher"}},t._l(t.availableLocales,(function(e){return n("nuxt-link",{key:e.code,staticClass:"language-switcher-item",attrs:{to:t.switchLocalePath(e.code)}},[n("img",{attrs:{src:e.flag}}),t._v(" "),n("span",[t._v(t._s(e.name))])])})),1)}),[],!1,null,null,null);e.default=component.exports}}]);