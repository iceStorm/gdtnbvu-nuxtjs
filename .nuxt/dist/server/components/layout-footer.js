exports.ids = [10,1,8];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColorModeSwitcher.vue?vue&type=template&id=c89184be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"colormode-switcher"}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.currentColorMode.icon))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ColorModeSwitcher.vue?vue&type=template&id=c89184be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColorModeSwitcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ColorModeSwitchervue_type_script_lang_js_ = ({
  computed: {
    currentColorMode() {
      return this.$store.getters.currentColorMode;
    }

  },
  methods: {
    toggleColorMode() {
      this.$store.dispatch('toggleColorMode');
    }

  }
});
// CONCATENATED MODULE: ./components/ColorModeSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColorModeSwitchervue_type_script_lang_js_ = (ColorModeSwitchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ColorModeSwitcher.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ColorModeSwitchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b53cf79"
  
)

/* harmony default export */ var ColorModeSwitcher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#footer{position:relative;z-index:1}#footer.mobile{padding-bottom:70px}#footer-mail-register{position:relative;overflow:hidden}#footer-mail-register:before{content:\"\";background:url(/footer-bg.jpg) no-repeat;background-size:cover;height:100%;width:100%}#footer-mail-register:after,#footer-mail-register:before{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0}#footer-mail-register:after{background:rgba(0,0,0,.171)}#footer-mail-register .inner-page{padding:50px 0;display:flex;justify-content:space-between;align-items:center}@media(max-width:800px){#footer-mail-register .inner-page{flex-direction:column;align-items:flex-start;grid-gap:50px;gap:50px}}#footer-mail-register .inner-page *{outline:none;border:none}#footer-mail-register .inner-page * h1{line-height:1;margin-bottom:10px}#footer-mail-register .inner-page .btn{border-radius:0;cursor:pointer}#footer-mail-register .inner-page .btn,#footer-mail-register .inner-page form{box-shadow:0 48px 100px 0 rgba(17,12,46,.15)}#footer-mail-register .inner-page form{display:flex;justify-content:flex-start;align-items:stretch;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#footer-mail-register .inner-page form input[type=email]{padding:10px 15px;background:#fff}@media(max-width:360px){#footer-mail-register .inner-page form input[type=email]{width:180px}}#footer-main .inner-page{padding:40px 0;display:grid;grid-template-areas:\"first second third\";justify-items:center;grid-gap:35px;gap:35px}@media(max-width:556px){#footer-main .inner-page{justify-items:normal;grid-template-areas:\"first first\" \"second third\"}}#footer-main .inner-page .footer-main-section:first-child{grid-area:first;justify-self:flex-start}#footer-main .inner-page .footer-main-section:nth-child(2){grid-area:second}#footer-main .inner-page .footer-main-section:nth-child(3){grid-area:third}#footer-main .inner-page .footer-main-section-title{text-transform:capitalize;font-weight:900;margin-bottom:0;padding-bottom:5px}#footer-main .inner-page .footer-main-section-content{font-weight:500}#footer-main .inner-page .footer-main-section-content li{list-style:none}#footer-main .inner-page .footer-main-section-content li a{display:block;padding:3px 0}#footer-main .inner-page .footer-main-section.contact .contact-default{display:flex;flex-direction:column;grid-gap:10px;gap:10px}#footer-main .inner-page .footer-main-section.contact .contact-default a:last-child{text-decoration:underline}#footer-main .inner-page .footer-main-section.contact .contact-social-content{display:flex;grid-gap:10px;gap:10px}#footer-copyright{background:var(--color-primary);color:#000}#footer-copyright .inner-page{padding:6px 0;display:flex;justify-content:space-between;align-items:center;grid-gap:20px;gap:20px}@media(max-width:1192px){#footer-copyright .inner-page{padding-left:25px;padding-right:25px}}#footer-copyright .inner-page>*{align-self:center}@media(max-width:960px){#footer-copyright .inner-page>:first-child{grid-column:1/span 3}}@media(max-width:376px){#footer-copyright .inner-page>:first-child{font-size:11px}}#footer-copyright .inner-page #footer-config-buttons{display:flex;justify-content:space-between;align-items:center;grid-gap:20px;gap:20px}@media(max-width:576px){#footer-copyright .inner-page #footer-config-buttons{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/Footer.vue?vue&type=template&id=4fa7443d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:{ mobile: _vm.$store.state.menu.mobile },attrs:{"id":"footer"}},[_vm._ssrNode("<div id=\"footer-mail-register\"><div class=\"inner-page\">"+((false)?(undefined):"<!---->")+" <div><h1>"+_vm._ssrEscape(_vm._s(_vm.$t('footer.memberRegister.caption')))+"</h1> <a target=\"_blank\""+(_vm._ssrAttr("href",_vm.$store.state.meta.contact.register_form))+" class=\"btn\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('footer.memberRegister.registerButtonTitle'))+"\n        ")+"</a></div></div></div> "),_vm._ssrNode("<div id=\"footer-main\">","</div>",[_vm._ssrNode("<div class=\"inner-page\">","</div>",[_vm._ssrNode("<section class=\"footer-main-section contact\"><h4 class=\"footer-main-section-title\">"+_vm._ssrEscape(_vm._s(_vm.$t('footer.mainTitles[0]')))+"</h4> <div class=\"footer-main-section-content\"><div class=\"contact-default\">"+(_vm._ssrList((_vm.contactItems),function(item){return ("<div class=\"contact-item\"><span class=\"text\">"+_vm._ssrEscape(_vm._s(item.caption[_vm.$i18n.locale])+":")+"</span> <a target=\"_blank\""+(_vm._ssrAttr("href",_vm.hrefConvert(item.href)))+">"+_vm._ssrEscape("\n                "+_vm._s(item.title)+"\n              ")+"</a></div>")}))+"</div> <div class=\"contact-social\" style=\"padding-top: 35px;\"><h4 class=\"footer-main-section-title\">"+_vm._ssrEscape(_vm._s(_vm.$t('footer.mainTitles[1]')))+"</h4> <div class=\"contact-social-content\">"+(_vm._ssrList((_vm.$store.state.meta.social_media_links),function(item){return ("<a"+(_vm._ssrAttr("href",_vm.hrefConvert(item.social_link)))+" target=\"_blank\">"+_vm._ssrEscape("\n                "+_vm._s(item.social_name)+"\n              ")+"</a>")}))+"</div></div></div></section> "),_vm._ssrNode("<section class=\"footer-main-section links\">","</section>",[_vm._ssrNode("<h4 class=\"footer-main-section-title\">"+_vm._ssrEscape(_vm._s(_vm.$t('footer.mainTitles[2]')))+"</h4> "),_vm._ssrNode("<ul class=\"footer-main-section-content\">","</ul>",_vm._l((_vm.$store.state.menu.items),function(item){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":item.href}},[_vm._v(_vm._s(item.title[_vm.$i18n.locale]))])],1)}),0)],2),_vm._ssrNode(" <section class=\"footer-main-section legals\"><h4 class=\"footer-main-section-title\">"+_vm._ssrEscape(_vm._s(_vm.$t('footer.mainTitles[3]')))+"</h4> <ul class=\"footer-main-section-content\">"+(_vm._ssrList((_vm.otherLinks),function(item){return ("<li><a"+(_vm._ssrAttr("href",item.href))+" target=\"_blank\">"+_vm._ssrEscape("\n              "+_vm._s(item.title[_vm.$i18n.locale])+"\n            ")+"</a></li>")}))+"</ul></section>")],2)]),_vm._ssrNode(" "),(!_vm.$store.state.menu.mobile)?_vm._ssrNode("<div id=\"footer-copyright\">","</div>",[_vm._ssrNode("<div class=\"inner-page\">","</div>",[_vm._ssrNode("<span>"+_vm._ssrEscape("Copyright © 2021 - "+_vm._s(_vm.$t('title')))+"</span> "),_vm._ssrNode("<div id=\"footer-config-buttons\">","</div>",[_c('color-mode-switcher')],1)],2)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/Footer.vue?vue&type=template&id=4fa7443d&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/ColorModeSwitcher.vue + 4 modules
var ColorModeSwitcher = __webpack_require__(105);

// EXTERNAL MODULE: ./components/LanguageSwitcher.vue + 4 modules
var LanguageSwitcher = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/Footer.vue?vue&type=script&lang=ts&



/* harmony default export */ var Footervue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    LanguageSwitcher: LanguageSwitcher["default"],
    ColorModeSwitcher: ColorModeSwitcher["default"]
  },

  data() {
    return {
      contactItems: [{
        caption: {
          vi: 'Địa chỉ',
          en: 'Address'
        },
        title: this.$store.state.meta.contact.address,
        href: 'https://goo.gl/maps/3UhndXsNeJo5mzqE6'
      }, {
        caption: {
          vi: 'Số điện thoại',
          en: 'Phone number'
        },
        title: this.$store.state.meta.contact.phone,
        href: this.$store.state.meta.contact.phone
      }, {
        caption: {
          vi: 'E-mail',
          en: 'E-mail'
        },
        title: this.$store.state.meta.contact.email,
        href: this.$store.state.meta.contact.email
      }]
    };
  },

  computed: {
    otherLinks() {
      return [{
        title: {
          vi: 'Gia nhập Đội',
          en: 'Join the Team'
        },
        href: this.$store.state.meta.contact.register_form
      }];
    }

  },
  methods: {
    registerNeletter() {
      console.log('clicked');
    },

    openMemberRegisterForm() {}

  }
}));
// CONCATENATED MODULE: ./components/layout/Footer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layout_Footervue_type_script_lang_ts_ = (Footervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// EXTERNAL MODULE: ./components/layout/Footer.vue?vue&type=custom&index=0&blockType=i18n
var Footervue_type_custom_index_0_blockType_i18n = __webpack_require__(142);

// CONCATENATED MODULE: ./components/layout/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_Footervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "143f5f9f"
  
)

/* custom blocks */

if (typeof Footervue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Footervue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ColorModeSwitcher: function () { return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 105)).then(function(m) { return m['default'] || m }) }})


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f2d4863a", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00c6f49e", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#language-switcher .language-switcher-item{display:flex;justify-content:space-between;align-items:center;grid-gap:10px;gap:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:3px 10px 3px 8px;border-radius:20px;border:none;background:rgba(0,0,0,.151);color:#000}#language-switcher .language-switcher-item img{width:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LanguageSwitcher.vue?vue&type=template&id=5f893b8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"language-switcher"}},_vm._l((_vm.availableLocales),function(locale){return _c('nuxt-link',{key:locale.code,staticClass:"language-switcher-item",attrs:{"to":_vm.switchLocalePath(locale.code)}},[_c('img',{attrs:{"src":locale.flag}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(locale.name))])])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LanguageSwitcher.vue?vue&type=template&id=5f893b8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LanguageSwitcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LanguageSwitchervue_type_script_lang_js_ = ({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }

  },
  methods: {
    switchLocale(e) {// console.log(e);
    }

  },

  mounted() {// console.log(this.$i18n.localeProperties.name);
  }

});
// CONCATENATED MODULE: ./components/LanguageSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LanguageSwitchervue_type_script_lang_js_ = (LanguageSwitchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/LanguageSwitcher.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LanguageSwitchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "036cb577"
  
)

/* harmony default export */ var LanguageSwitcher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorModeSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorModeSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorModeSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorModeSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorModeSwitcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#colormode-switcher img{cursor:pointer;width:20px;filter:drop-shadow(0 0 7px rgba(0,0,0,.15))}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"vi":{"footer":{"mailRegister":{"caption":"Nhận bài đăng mới qua email.","inputPlaceholder":"Nhập địa chỉ email","registerButtonTitle":"Đăng ký"},"memberRegister":{"caption":"Chưa tham gia đội tình nguyện ?","registerButtonTitle":"Đăng ký gia nhập"},"mainTitles":["Đội Tình nguyện BVU","Mạng xã hội","Điều hướng","Liên kết"]}},"en":{"footer":{"mailRegister":{"caption":"Interested in our articles ?","inputPlaceholder":"Enter your email","registerButtonTitle":"Receive Newsletters"},"memberRegister":{"caption":"Not joined the team yet ?","registerButtonTitle":"Register member"},"mainTitles":["BVU Volunteer Team","Social networks","Navigation","Links"]}}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f6fc2e4", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=layout-footer.js.map