exports.ids = [18];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d3c0477e", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRelated_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRelated_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRelated_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRelated_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRelated_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".related-news{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;gap:30px}.related-news-item{list-style:none;background:red;height:200px;overflow:hidden;position:relative;border-radius:0;box-shadow:0 6px 24px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.08)}@media(max-width:425px){.related-news-item{height:130px}}.related-news-item-link{position:relative;z-index:1;display:block;height:100%}.related-news-item-link:after{content:\"\";position:absolute;z-index:0;top:0;bottom:0;left:0;right:0;background:transparent;transition:all .25s ease-in-out}.related-news-item-link:hover p{color:var(--color-primary)}.related-news-item-link:hover:after{background:rgba(0,0,0,.25)}.related-news-item-link>img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.related-news-item-link>h3{font-size:14px;position:absolute;z-index:1;bottom:0;left:0;right:0;padding:75px 15px 10px;margin-bottom:0;background:linear-gradient(0deg,#000,transparent)}.related-news-item-link>h3 p{color:#fff;font-weight:500;text-transform:uppercase;text-shadow:2px 2px 5px grey;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:20px;max-height:40px;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media(max-width:425px){.related-news-item-link>h3 p{line-height:17px;max-height:32px;font-size:10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailRelated.vue?vue&type=template&id=d1873216&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"related-news"},_vm._l((_vm.posts),function(post){return _vm._ssrNode("<li class=\"related-news-item\">","</li>",[_c('nuxt-link',{staticClass:"related-news-item-link",attrs:{"to":'/news/p/' + post.slug}},[_c('img',{staticClass:"related-news-item-thumbnail",attrs:{"src":post.meta.thumbnail}}),_vm._v(" "),_c('h3',{staticClass:"related-news-item-title"},[_c('p',{domProps:{"innerHTML":_vm._s(post.title.rendered)}})])])],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/news/DetailRelated.vue?vue&type=template&id=d1873216&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/news/DetailRelated.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DetailRelatedvue_type_script_lang_js_ = ({
  data() {
    return {
      posts: []
    };
  },

  async fetch() {
    this.posts = await this.$wp.$get('/articles?per_page=3'); // console.log(this.posts);
  }

});
// CONCATENATED MODULE: ./components/news/DetailRelated.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_DetailRelatedvue_type_script_lang_js_ = (DetailRelatedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/news/DetailRelated.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_DetailRelatedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "410f42a2"
  
)

/* harmony default export */ var DetailRelated = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=news-detail-related.js.map