<i18n>
{
  "vi": {
    "about": {
      "generalTitle": "Giới thiệu chung",
      "workingTypeTitle": "Phương hướng hoạt động",
      "benefitTitle": "Quyền lợi của thành viên khi tham gia"
    }
  },
  "en": {
    "about": {
      "generalTitle": "General",
      "workingTypeTitle": "Working type",
      "benefitTitle": "Benefits of members"
    }
  }
}
</i18n>

<template>
  <div class="about-page inner-page">
    <img src="/logo.png" class="about-page-logo animate__animated animate__backInDown">

    <section class="about-page-general">
      <h1 class="title">{{ $t("about.generalTitle") }}</h1>

      <div class="about-page-general-meta">
        <div class="about-page-general-meta-info">

          <div class="about-page-general-meta-info-item animate__animated animate__fadeInUp"
            :style="{ animationDelay: `${ index*100 }ms` }"
            v-for="(item, index) in meta" :key=index>
            <h3 class="about-page-general-meta-info-item-key text">
              {{ item.key[$i18n.locale] }}
            </h3><span class="text">:&nbsp;</span>
            <h3 class="title">{{ item.value[$i18n.locale] }}</h3>
          </div>

        </div>
      </div>
    </section>

    <section class="about-page-working-type">
      <h1 class="title" data-aos="fade-up">{{ $t("about.workingTypeTitle") }}</h1>
      <img src="/pages/about/about-working-type.png">
    </section>

    <section class="about-page-profits">
      <h1 class="title" data-aos="fade-up">{{ $t("about.benefitTitle") }}</h1>
      <img src="/pages/about/about-benefits.png">
    </section>
  </div>
</template>

<script>
import 'animate.css';

export default {
  scrollToTop: false,
  head() {
    return {
      title: 'Giới thiệu',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Giới thiệu Đội Tình nguyện BVU.' },
      ],
      link: [
        // { rel: 'stylesheet', href: '/libs/aos/aos.css' },
      ],
      script: [
        // {
        //   src: '/libs/aos/aos.js',
        //   defer: false,
        //   callback: () => { this.initAOS(); },
        // },
      ],
    };
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
            vi: 'Thành viên',
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
  // align-items: center;
  gap: 75px;

  &-logo {
    margin: auto;
    width: 200px;

    @media (max-width: 360px) {
      margin-bottom: -30px;
    }
  }

  > section {
    h1 {
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }

    @media (max-width: 550px) {
      font-size: 12px;
    }
  }

  &-general {
    &-meta {
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: center;
      gap: 20px;
      width: fit-content;

      @media (max-width: 760px) {
        grid-template-columns: 1fr;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &-item {
          > * {
            display: inline-block;
          }
        }
      }
    }
  }

  &-working-type {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-head {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;

      &-textboxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        // gap: -50px;

        img {
          margin: -50px;
          min-width: 300px;
        }
      }
    }
  }
}
</style>
