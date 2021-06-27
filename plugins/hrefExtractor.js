import Vue from 'vue';

const HrefExtractor = {
  install(Vue, options) {
    Vue.prototype.hrefExtract = (oldHref) => (oldHref.includes('@') ? `mailto:${oldHref}` : oldHref);
  },
};

Vue.use(HrefExtractor);
