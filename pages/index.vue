<template>
  <div id="index">
    <news-grid></news-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import NewsGrid from '~/components/NewsGrid.vue';

export default Vue.extend({
  components: { NewsGrid },
  head() {
    return {
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
