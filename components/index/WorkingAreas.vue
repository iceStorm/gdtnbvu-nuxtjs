<i18n>
{
  "vi": {
    "workingArea": {
      "title": "Lĩnh vực hoạt động",
      "subTitle": "Tổ chức các chương trình thiện nguyện với quy mô từ 400 đến 2000 người",
      "biggestItemTitle": "Thiện nguyện"
    }
  },
  "en": {
    "workingArea": {
      "title": "Working areas",
      "subTitle": "Organizing volunteer programs for the scale about 400 to 2000 people",
      "biggestItemTitle": "Giving"
    }
  }
}
</i18n>

<template>
  <div class="working-areas">
    <div class="inner-page">

      <div class="working-areas-titles">
        <h1 class="title"><strong>{{ $t('workingArea.title') }}</strong></h1>
        <h3 class="title">{{ $t('workingArea.subTitle') }}</h3>
      </div>

      <div class="working-areas-grid">
        <div class="working-areas-grid-item" v-for="(item, index) in gridItems.slice(1)" :key="item.title.en"
          :data-aos="index < 3 ?'fade-down':'fade-right'" data-aos-duration="750">
          <h3 class="underline straight">{{ item.title[$i18n.locale] }}</h3>
          <img :src="item.image">
        </div>
        <!-- bigest item  -->
        <div class="working-areas-grid-item" data-aos="fade-up" data-aos-duration="750">
          <h3 class="underline-4">
            <h1>{{ $t('workingArea.biggestItemTitle') }}</h1>
            {{ gridItems[0].title[$i18n.locale] }}
          </h3>
          <img :src="gridItems[0].image">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridItems: [
        // biggest item
        {
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/IMG_3221-scaled.jpg',
          title: {
            vi: 'bằng cả trái tim',
            en: 'by all heart',
          },
        },

        {
          image: '/pages/index/working-areas/events.jpg',
          title: {
            vi: 'Tổ chức sự kiện',
            en: 'Organizing events',
          },
        },
        {
          image: '/pages/index/working-areas/skills.jpg',
          title: {
            vi: 'Rèn luyện kỹ năng',
            en: 'Skills training',
          },
        },
        {
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg',
          title: {
            vi: 'Khám phá tuổi trẻ',
            en: 'Exploring the youth',
          },
        },
        {
          image: '/pages/index/working-areas/ethuasism.jpg',
          title: {
            vi: 'Chinh phục nhiệt huyết',
            en: 'Conquering enthusiasm',
          },
        },
        {
          image: '/pages/index/working-areas/passion.jpg',
          title: {
            vi: 'Chinh phục đam mê',
            en: 'Conquering passion',
          },
        },
      ],
    };
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    getUnderlineClass(index) {
      const theIndex = (index > 0 && index < 5) ? index : this.getRandomArbitrary(1, 5);
      // console.log('theIndex:', theIndex);

      return `underline-${theIndex}`;
    },
  },
};
</script>

<style lang="scss">
.working-areas {
  position: relative;
  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('/pages/index/working-areas/bg.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.55;
  }
  &::after {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(to top, transparent, white);
    // opacity: 0.15;
  }

  > .inner-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &-titles {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    h1 {
      margin-bottom: 5px;
    }
    h3 {
      @media (max-width: 430px) {
        font-size: 12px;
      }
    }
  }

  &-grid {
    width: 100%;
    display: grid;
    gap: 25px;
    grid-template-areas:
    "organizeEvents biggest biggest"
    "skillsTraining biggest biggest"
    "exploreYouth conquerEthusiasm conquerPassion";

    @media (max-width: 580px) {
      grid-template-areas:
      "biggest biggest biggest"
      "organizeEvents organizeEvents organizeEvents"
      "skillsTraining skillsTraining skillsTraining"
      "exploreYouth exploreYouth exploreYouth"
      "conquerEthusiasm conquerEthusiasm conquerEthusiasm"
      "conquerPassion conquerPassion conquerPassion";
    }

    &-item {
      position: relative;
      width: 100%;
      height: 150px;

      border-radius: 0px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

      border: 1px solid rgba(255, 255, 255, 0.267);

      &::after {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #00000063;
        // background: #006c7a73;
      }

      h3 {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 80%;
        padding: 5px;

        text-align: center;
        text-transform: uppercase;
        text-shadow: 1px 1px 5px var(--color-primary);
        text-shadow: 2px 2px 20px black;
        font-weight: 900;
        color: white;

        &[class$=straight], &[class^=underline] {
          // background: red;
          background-position-y: bottom;
        }
        &[class$=straight] {
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }

        h1 {
          color: white;
          margin-bottom: 0;
          letter-spacing: 1.5px;
          text-transform: lowercase;
        }

        @media (max-width: 430px) {
          font-size: 12px;
        }
      }

      img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:nth-child(1) {
        grid-area: organizeEvents;
      }
      &:nth-child(2) {
        grid-area: skillsTraining;
      }
      &:nth-child(3) {
        grid-area: exploreYouth;
      }
      &:nth-child(4) {
        grid-area: conquerEthusiasm;
      }
      &:nth-child(5) {
        grid-area: conquerPassion;
      }
      &:nth-child(6) {
        grid-area: biggest;
        height: 100%;

        @media (max-width: 580px) {
          height: 150px;
        }
      }
    }
  }
}
</style>
