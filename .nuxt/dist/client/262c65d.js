(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1194:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"vi":{"workingArea":{"title":"Lĩnh vực hoạt động","subTitle":"Tổ chức các chương trình thiện nguyện với quy mô từ 400 đến 2000 người","biggestItemTitle":"Thiện nguyện"}},"en":{"workingArea":{"title":"Working areas","subTitle":"Organizing volunteer programs for the scale about 400 to 2000 people","biggestItemTitle":"Giving"}}}'),delete t.options._Ctor}},1211:function(t,e,r){var content=r(1267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(149).default)("98349da4",content,!0,{sourceMap:!1})},1266:function(t,e,r){"use strict";r(1211)},1267:function(t,e,r){var n=r(148)(!1);n.push([t.i,'.working-areas{position:relative}.working-areas:before{background:url(/pages/index/working-areas/bg.jpg);background-size:contain;background-repeat:no-repeat;opacity:.55}.working-areas:after,.working-areas:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}.working-areas:after{background:linear-gradient(0deg,transparent,#fff)}.working-areas>.inner-page{grid-gap:20px;gap:20px}.working-areas-titles,.working-areas>.inner-page{display:flex;flex-direction:column;align-items:center}.working-areas-titles{text-align:center}.working-areas-titles h1{margin-bottom:5px}@media(max-width:430px){.working-areas-titles h3{font-size:12px}}.working-areas-grid{width:100%;display:grid;grid-gap:25px;gap:25px;grid-template-areas:"organizeEvents biggest biggest" "skillsTraining biggest biggest" "exploreYouth conquerEthusiasm conquerPassion"}@media(max-width:580px){.working-areas-grid{grid-template-areas:"biggest biggest biggest" "organizeEvents organizeEvents organizeEvents" "skillsTraining skillsTraining skillsTraining" "exploreYouth exploreYouth exploreYouth" "conquerEthusiasm conquerEthusiasm conquerEthusiasm" "conquerPassion conquerPassion conquerPassion"}}.working-areas-grid-item{position:relative;width:100%;height:150px;border-radius:0;box-shadow:0 6px 24px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.08);box-shadow:0 10px 36px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06);border:1px solid hsla(0,0%,100%,.267)}.working-areas-grid-item:after{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.38824)}.working-areas-grid-item h3{position:absolute;z-index:1;bottom:0;left:50%;transform:translateX(-50%);width:80%;padding:5px;text-align:center;text-transform:uppercase;text-shadow:1px 1px 5px var(--color-primary);text-shadow:2px 2px 20px #000;font-weight:900;color:#fff}.working-areas-grid-item h3[class$=straight],.working-areas-grid-item h3[class^=underline]{background-position-y:bottom}.working-areas-grid-item h3[class$=straight]{border-bottom:1px solid hsla(0,0%,100%,.5)}.working-areas-grid-item h3 h1{color:#fff;margin-bottom:0;letter-spacing:1.5px;text-transform:lowercase}@media(max-width:430px){.working-areas-grid-item h3{font-size:12px}}.working-areas-grid-item img{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.working-areas-grid-item:first-child{grid-area:organizeEvents}.working-areas-grid-item:nth-child(2){grid-area:skillsTraining}.working-areas-grid-item:nth-child(3){grid-area:exploreYouth}.working-areas-grid-item:nth-child(4){grid-area:conquerEthusiasm}.working-areas-grid-item:nth-child(5){grid-area:conquerPassion}.working-areas-grid-item:nth-child(6){grid-area:biggest;height:100%}@media(max-width:580px){.working-areas-grid-item:nth-child(6){height:150px}}',""]),t.exports=n},1268:function(t,e,r){"use strict";var n=r(1194),o=r.n(n);e.default=o.a},1308:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{gridItems:[{image:"https://cms.gdtnbvu.club/wp-content/uploads/2021/07/IMG_3221-scaled.jpg",title:{vi:"bằng cả trái tim",en:"by all heart"}},{image:"/pages/index/working-areas/events.jpg",title:{vi:"Tổ chức sự kiện",en:"Organizing events"}},{image:"/pages/index/working-areas/skills.jpg",title:{vi:"Rèn luyện kỹ năng",en:"Skills training"}},{image:"https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg",title:{vi:"Khám phá tuổi trẻ",en:"Exploring the youth"}},{image:"/pages/index/working-areas/ethuasism.jpg",title:{vi:"Chinh phục nhiệt huyết",en:"Conquering enthusiasm"}},{image:"/pages/index/working-areas/passion.jpg",title:{vi:"Chinh phục đam mê",en:"Conquering passion"}}]}},methods:{getRandomArbitrary:function(t,e){return Math.round(Math.random()*(e-t)+t)},getUnderlineClass:function(t){var e=t>0&&t<5?t:this.getRandomArbitrary(1,5);return"underline-".concat(e)}}},o=(r(1266),r(101)),l=r(1268),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"working-areas"},[r("div",{staticClass:"inner-page"},[r("div",{staticClass:"working-areas-titles"},[r("h1",{staticClass:"title"},[r("strong",[t._v(t._s(t.$t("workingArea.title")))])]),t._v(" "),r("h3",{staticClass:"title"},[t._v(t._s(t.$t("workingArea.subTitle")))])]),t._v(" "),r("div",{staticClass:"working-areas-grid"},[t._l(t.gridItems.slice(1),(function(e,n){return r("div",{key:e.title.en,staticClass:"working-areas-grid-item",attrs:{"data-aos":n<3?"fade-down":"fade-right","data-aos-duration":"750"}},[r("h3",{staticClass:"underline straight"},[t._v(t._s(e.title[t.$i18n.locale]))]),t._v(" "),r("img",{attrs:{src:e.image}})])})),t._v(" "),r("div",{staticClass:"working-areas-grid-item",attrs:{"data-aos":"fade-up","data-aos-duration":"750"}},[r("h3",{staticClass:"underline-4"},[r("h1",[t._v(t._s(t.$t("workingArea.biggestItemTitle")))]),t._v("\n          "+t._s(t.gridItems[0].title[t.$i18n.locale])+"\n        ")]),t._v(" "),r("img",{attrs:{src:t.gridItems[0].image}})])],2)])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports}}]);