<template>
  <div id="index">
    <news-grid></news-grid>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  scrollToTop: false,
  head() {
    return {
      title: 'BVU Volunteer Team',
      meta: [
        { hid: 'description', name: 'description', content: 'Gia Đình Tình nguyện BVU - Trường Đại học Bà Rịa - Vũng Tàu.' },
      ],
      link: [
        { rel: 'stylesheet', href: '/libs/aos/aos.css' },
      ],
      script: [
        {
          src: '/libs/aos/aos.js',
          defer: false,
          callback: () => { this.initAOS(); },
        },
      ],
    };
  },
  methods: {
    initAOS() {
      AOS.init({
        once: true,
      });
    },
  },
});
</script>

<style>

</style>
