<template>
  <div class="index-page">
    <IndexNewsGrid />
    <IndexWorkingAreas />

    <div class="index-page-events">
      <div class="inner-page">
        <img src="/pages/index/events/events.jpg">
      </div>
    </div>
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

<style lang="scss">
.index-page {
  display: flex;
  flex-direction: column;

  &-events {
    background: #000;
  }
}
</style>
