<i18n>
{
  "vi": {
    "about": {
      "generalTitle": "Giới thiệu chung"
    }
  },
  "en": {
    "about": {
      "generalTitle": "General"
    }
  }
}
</i18n>

<template>
  <div class="about-page">

    <section class="about-page-general">

      <div class="about-page-general-meta">
        <img src="/logo.png" class="about-page-general-meta-logo animate_animated animate__heartBeat animate__slower">
        <div class="about-page-general-meta-info">

          <h1 class="title">{{ $t("about.generalTitle") }}</h1>
          <div class="about-page-general-meta-info-item" v-for="item in meta" :key=item.key>
            <h3 class="about-page-general-meta-info-item-key text">{{ item.key[$i18n.locale] }}</h3>:&nbsp;
            <h3 class="title">{{ item.value[$i18n.locale] }}</h3>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  scrollToTop: false,
  head: {
    title: 'Giới thiệu',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Giới thiệu Đội Tình nguyện BVU.' },
    ],
    link: [
      { rel: 'stylesheet', href: '/libs/aos/aos.css' },
      { rel: 'stylesheet', href: '/libs/animate.min.css' },
    ],
    script: [
      {
        src: '/libs/aos/aos.js',
        defer: false,
        callback: () => { this.initAOS(); },
      },
    ],
  },

  data() {
    return {
      meta: [
        {
          key: {
            vi: 'Tên đầy đủ',
            en: 'Full name',
          },
          value: {
            vi: 'Đội Tình nguyện Trường Đại học Bà Rịa - Vũng Tàu',
            en: 'BVU Volunteer Team',
          },
        },
        {
          key: {
            vi: 'Slogan',
            en: 'Slogan',
          },
          value: {
            vi: 'Tuổi trẻ - Nhiệt huyết - Đam mê',
            en: 'Youth - Enthusiasm - Passion',
          },
        },
        {
          key: {
            vi: 'Số lượng',
            en: 'Members',
          },
          value: {
            vi: '500 người',
            en: '500 people',
          },
        },
        {
          key: {
            vi: 'Các sự kiện',
            en: 'Events',
          },
          value: {
            vi: 'Hơn 50 chương trình lớn nhỏ/năm',
            en: 'Over 50 events a year',
          },
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
};
</script>

<style lang="scss">
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  &-general {

    &-meta {
      display: grid;
      grid-template-columns: 1fr 3fr;
      align-items: end;
      gap: 20px;

      &-logo {

      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h1 {
          // text-transform: uppercase;
          // font-weight: bolder;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
        }

        &-item {
          display: flex;
        }
      }
    }
  }
}
</style>
