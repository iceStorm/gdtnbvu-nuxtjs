<template>
  <div class="highlight-events-mid-autumn">
    <div class="inner-page">

      <div class="highlight-events-mid-autumn-left">
        <img src="/pages/index/events/sections/mid_autumn/quy-son-temple.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/sections/mid_autumn/yellow-unicorn.png" data-aos="zoom-in-left" data-aos-duration="1000">
        <img src="/pages/index/events/sections/mid_autumn/pink-unicorn.png" data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="/pages/index/events/sections/mid_autumn/moon-cake.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/sections/mid_autumn/lanterns.png" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="350">
        <img src="/pages/index/events/sections/mid_autumn/left-to-right-cloud.png" data-aos="zoom-in-right" data-aos-duration="1000">

        <img src="/pages/index/events/sections/mid_autumn/moonstars.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/sections/mid_autumn/moonglow.png" data-aos="fade-in" data-aos-duration="3000">
      </div>

      <div class="highlight-events-mid-autumn-right">
        <img src="/pages/index/events/sections/mid_autumn/typo.png" data-aos="zoom-out" data-aos-duration="1000">
        <h4 class="text highlight-events-mid-autumn-right-descriptions">
          <div v-html="meta.descriptions" data-aos="fade-up" data-aos-duration="1000"></div>
          <a :href="meta.video_url" target="_blank" class="btn-event-viewmore" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="450" data-aos-offset="20">
            <img src="/pages/index/events/youtube.png">
            <span>Xem video chi tiết</span>
          </a>
        </h4>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.state.meta.events.filter((event) => event.key === 'mid_autumn')[0];
    },
  },
};
</script>

<style lang="scss">
.highlight-events-mid-autumn {
  position: relative;
  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('/pages/index/events/sections/mid_autumn/bg-pattern.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.25;
  }

  .inner-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 100px;

    @media (max-width: 768px) {
      grid-template-columns: unset;
    }
  }

  &-left {
    position: relative;

    img {
      &:not(:first-child) {
        position: absolute;
      }

      // chùa
      &:nth-child(1) {
      }

      // lân vàng
      &:nth-child(2) {
        width: 30%;
        right: -50px;
        bottom: 0px;
        // transform: scale(-1);
      }

      // lân hồng
      &:nth-child(3) {
        width: 30%;
        left: -60px;
        bottom: 0px;
      }

      // bánh
      &:nth-child(4) {
        width: 85%;
        left: 50%;
        bottom: -30px;
        margin-left: -45%;
      }

      // lồng đèn
      &:nth-child(5) {
        width: 15%;
        left: -30px;
        top: -30px;
      }
      // mây2 (left-to-right)
      &:nth-child(6) {
        width: 35%;
        left: -70px;
        top: -50px;
      }

      // mây (right-to-left)
      &:nth-child(7) {
        width: 200px;
        right: -50px;
        top: -20px;

        filter: drop-shadow(0 0 0.75rem rgba(255, 218, 97, 0.89));
      }
    }
  }

  &-right {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}
</style>
