(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1215:function(e,t,n){var content=n(1278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(149).default)("d3c0477e",content,!0,{sourceMap:!1})},1277:function(e,t,n){"use strict";n(1215)},1278:function(e,t,n){var r=n(148)(!1);r.push([e.i,'.related-news{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;gap:30px}.related-news-item{list-style:none;background:red;height:200px;overflow:hidden;position:relative;border-radius:0;box-shadow:0 6px 24px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.08)}@media(max-width:425px){.related-news-item{height:130px}}.related-news-item-link{position:relative;z-index:1;display:block;height:100%}.related-news-item-link:after{content:"";position:absolute;z-index:0;top:0;bottom:0;left:0;right:0;background:transparent;transition:all .25s ease-in-out}.related-news-item-link:hover p{color:var(--color-primary)}.related-news-item-link:hover:after{background:rgba(0,0,0,.25)}.related-news-item-link>img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.related-news-item-link>h3{font-size:14px;position:absolute;z-index:1;bottom:0;left:0;right:0;padding:75px 15px 10px;margin-bottom:0;background:linear-gradient(0deg,#000,transparent)}.related-news-item-link>h3 p{color:#fff;font-weight:500;text-transform:uppercase;text-shadow:2px 2px 5px grey;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:20px;max-height:40px;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media(max-width:425px){.related-news-item-link>h3 p{line-height:17px;max-height:32px;font-size:10px}}',""]),e.exports=r},1312:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(54),{data:function(){return{posts:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$wp.$get("/articles?per_page=3");case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}),l=(n(1277),n(101)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"related-news"},e._l(e.posts,(function(t){return n("li",{key:t.id,staticClass:"related-news-item"},[n("nuxt-link",{staticClass:"related-news-item-link",attrs:{to:"/news/p/"+t.slug}},[n("img",{staticClass:"related-news-item-thumbnail",attrs:{src:t.meta.thumbnail}}),e._v(" "),n("h3",{staticClass:"related-news-item-title"},[n("p",{domProps:{innerHTML:e._s(t.title.rendered)}})])])],1)})),0)}),[],!1,null,null,null);t.default=component.exports}}]);