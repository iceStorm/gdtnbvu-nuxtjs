<template>
  <div class="highlight-events-mid-autumn">
    <div class="inner-page">

      <div class="highlight-events-mid-autumn-left">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/chùa-quy-sơn.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/lân vàng.png" data-aos="zoom-in-left" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/lân hồng.png" data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/bánh trung thu.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/lồng đèn.png" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="350">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/mây2.png" data-aos="zoom-in-right" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/moonstars.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/moonglow.png" data-aos="fade-in" data-aos-duration="3000">
      </div>

      <div class="highlight-events-mid-autumn-right">
        <img src="/pages/index/events/tách chủ thể chương trình/Trung thu cho em/typo.png" data-aos="zoom-out" data-aos-duration="1000">
        <h4 class="text highlight-events-mid-autumn-right-descriptions">
          <p v-html="meta.descriptions" data-aos="fade-up" data-aos-duration="1000"></p>
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

    background: url('/pages/index/events/tách chủ thể chương trình/Trung thu cho em/vòng tròn trung thu.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.25;
  }

  .inner-page {
    // display: flex;
    // align-items: center;
    // gap: 100px;

    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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
        bottom: 50px;
        // transform: scale(-1);
      }

      // lân hồng
      &:nth-child(3) {
        width: 30%;
        left: -60px;
        bottom: 20px;
      }

      // bánh
      &:nth-child(4) {
        width: 85%;
        left: 50%;
        bottom: 0px;
        margin-left: -45%;
        // transform: translateX(-50%) !important;
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

    text-align: justify;

    h4 {
      font-weight: 300;
    }
  }
}
</style>
