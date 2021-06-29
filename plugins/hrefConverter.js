import Vue from 'vue';

const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gm;
const mailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm

const HrefConverter = {
  install(Vue, options) {
    Vue.prototype.hrefConvert = (oldHref) => (
      oldHref.match(mailRegex) ? `mailto:${oldHref}` : 
      oldHref.match(phoneRegex) ? `tel:${oldHref}` : oldHref
    );
  },
};

Vue.use(HrefConverter);
