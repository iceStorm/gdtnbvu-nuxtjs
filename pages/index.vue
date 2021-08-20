<template>
  <div class="index-page">
    <IndexNewsGrid />
    <IndexWorkingAreas />

    <img src="/pages/index/events/events.jpg">
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  head() {
    return {
      title: 'Gia Đình Tình nguyện BVU - Trường Đại học Bà Rịa - Vũng Tàu',
      meta: [
        { hid: 'description', name: 'description', content: 'Tuổi trẻ - Nhiệt huyết - Đam mê.' },
      ],
      link: [
        { hid: 'aos-css', rel: 'stylesheet', href: '/libs/aos/aos.css' },
      ],
      script: [
        {
          hid: 'aos-js',
          src: '/libs/aos/aos.js',
          defer: true,
          callback: () => { this.initAOS(); },
        },
      ],
    };
  },
  methods: {
    initAOS() {
      console.log('initializing AOS [index]...');
      AOS.init({
        once: true,
      });
    },
  },
};
</script>

<style>
.index-page {
  display: flex;
  flex-direction: column;
}
</style>
