<i18n>
{
  "vi": {
    "workingArea": {
      "title": "Lĩnh vực hoạt động",
      "subTitle": "Tổ chức các chương trình thiện nguyện với quy mô từ 400 đến 2000 người"
    }
  },
  "en": {
    "workingArea": {
      "title": "Working areas",
      "subTitle": "Organizing volunteer programs for the scale about 400 to 2000 people"
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
        <div class="working-areas-grid-item" v-for="(item, index) in gridItems" :key="item.title.en" :data-aos="index < 3 ?'fade-down':'fade-right'">
          <h3>{{ item.title[$i18n.locale] }}</h3>
          <img :src="item.image">
        </div>
        <!-- bigest item  -->
        <div class="working-areas-grid-item" data-aos="fade-up">
          <h3>{{ gridItems[0].title[$i18n.locale] }}</h3>
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
        {
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg',
          title: {
            vi: 'Tổ chức sự kiện',
            en: 'Organizing events',
          },
        },
        {
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg',
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
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg',
          title: {
            vi: 'Chinh phục nhiệt huyết',
            en: 'Conquering enthusiasm',
          },
        },
        {
          image: 'https://cms.gdtnbvu.club/wp-content/uploads/2021/07/2019.jpg',
          title: {
            vi: 'Chinh phục đam mê',
            en: 'Conquering passion',
          },
        },
      ],
    };
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

    background: url('/pages/index/hands.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.35;
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

    h1 {
      margin-bottom: 5px;
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

    &-item {
      position: relative;
      width: 100%;
      height: 150px;

      border-radius: 0px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

      &::after {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #00000088;
      }

      h3 {
        position: absolute;
        z-index: 1;
        bottom: 10px;
        left: 0;

        width: 100%;
        padding: 0 20px;

        text-align: center;
        font-weight: 900;
        color: white;
      }

      img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

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
      }
    }
  }
}
</style>
