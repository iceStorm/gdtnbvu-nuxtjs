import Vue from 'vue';

const HrefConverter = {
  install(Vue, options) {
    Vue.prototype.hrefConvert = (oldHref) => (
      String(oldHref).match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm) ? `mailto:${oldHref}` : oldHref
    );
  },
};

Vue.use(HrefConverter);
