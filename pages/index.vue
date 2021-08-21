<i18n>
{
  "vi": {
    "index": {
      "eventsTitle": "Các chương trình nổi bật trong năm"
    }
  },
  "en": {
    "index": {
      "eventsTitle": "Outstanding events in a year"
    }
  }
}
</i18n>

<template>
  <div class="index-page" id="fullpage">
    <IndexNewsGrid />
    <IndexWorkingAreas />

    <!-- events -->
    <div class="index-page-highlight-events">
      <div class="index-page-highlight-events-title inner-page">
        <h1 class="title">
          <span v-for="(word, index) in $t('index.eventsTitle').split(' ')" :key="word"
            data-aos="zoom-out" :data-aos-delay="index*100">
            {{ word }}
          </span>
        </h1>
      </div>

      <div class="index-page-highlight-events-sections">
        <IndexEventsMidAutumn />
        <IndexEventsLovelySpring />
        <IndexEventsChildrenSpring />
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
        once: false,
      });
    },
  },
};
</script>

<style lang="scss">
.index-page {
  display: flex;
  flex-direction: column;

  &-highlight-events {
    // background: #182029;
    position: relative;
    min-height: 600px;

    &::before {
      content: "";

      position: absolute;
      top: -200px;
      left: 0;
      right: 0;

      height: 200px;
      background: linear-gradient(to bottom, transparent, #f8f9fa);
    }

    &::after {
      content: "";
      background: url('/patterns/wave.svg');

      background-size: 101%;
      background-repeat: no-repeat;
      background-position: bottom;
      display: block;
      height: 100%;
      position: absolute;
      bottom: 5px;
      left: -1px;
      right: 0px;
      z-index: 0;

      transform: rotate(180deg);
    }

    &-title h1 {
      font-weight: 900;
      text-align: center;
      padding-top: 100px;
      line-height: 1.3;

      @media (max-width: 768px) {
        padding-top: 50px;
      }
      @media (max-width: 430px) {
        padding-top: 20px;
      }
    }

    &-sections {
      display: flex;
      flex-direction: column;
      gap: 100px;

      padding-bottom: 50px;
    }
  }
}
</style>
