exports.ids = [17];
exports.modules = {

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailMeta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailMeta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailMeta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailMeta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailMeta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#news-detail-content-title-meta{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;grid-gap:30px;gap:30px}@media(max-width:425px){#news-detail-content-title-meta{grid-gap:10px;gap:10px}}#news-detail-content-title-meta>*{display:flex;justify-content:center;align-items:center;grid-gap:7px;gap:7px}@media(max-width:425px){#news-detail-content-title-meta>:first-child{flex-basis:100%;order:3;justify-content:flex-start}}#news-detail-content-title-meta>* span:not([class^=link]){line-height:1;color:var(--color-text)}#news-detail-content-title-meta>:not(:first-child) img{width:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailMeta.vue?vue&type=template&id=1c998170&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"news-detail-content-title-meta"}},[_vm._ssrNode("<div id=\"news-detail-content-title-meta-author\"><img"+(_vm._ssrAttr("src",_vm.post.author_meta.avatar_urls['24']))+" style=\"border-radius: 50%;\"> <span>"+_vm._ssrEscape(_vm._s(_vm.post.author_meta.name))+"</span></div> <div id=\"news-detail-content-title-meta-date\"><img src=\"/icons/ion/outline/calendar-clear-outline.svg\" class=\"ionicon\"> <span>"+_vm._ssrEscape(_vm._s(_vm.getDateString(_vm.post.date)))+"</span></div> "),_vm._ssrNode("<div id=\"news-detail-content-title-meta-category\">","</div>",[_vm._ssrNode("<img src=\"/icons/ion/outline/folder-open-outline.svg\" class=\"ionicon\"> "),_c('nuxt-link',{attrs:{"to":'/news/'+_vm.post.category_meta[0].slug}},[_c('span',{staticClass:"link"},[_vm._v(_vm._s(_vm.post.category_meta[0].name))])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/news/DetailMeta.vue?vue&type=template&id=1c998170&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailMeta.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var DetailMetavue_type_script_lang_js_ = ({
  props: ['post'],
  computed: {},
  methods: {
    getDateString(date) {
      return this.$moment(date).format('DD-MM-YYYY');
    }

  }
});
// CONCATENATED MODULE: ./components/news/DetailMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_DetailMetavue_type_script_lang_js_ = (DetailMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/news/DetailMeta.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_DetailMetavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c0c0f9e"
  
)

/* harmony default export */ var DetailMeta = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("763d8a36", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=news-detail-meta.js.map