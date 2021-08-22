<template>
  <div class="highlight-events-night-porridge">
    <div class="inner-page">

      <div class="highlight-events-night-porridge-left">
        <div class="highlight-events-night-porridge-left-images">
          <img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/moon.svg" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/stars.png" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="450">

          <img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/typo - cháo đêm ấm lòng.png" data-aos="zoom-in-down" data-aos-duration="1000">
          <img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/sản phẩm hộp cháo 2.png" data-aos="zoom-in-up" data-aos-duration="1000">
        </div>

        <h4 class="title highlight-events-night-porridge-left-descriptions">
          <div v-html="meta.descriptions" data-aos="fade-up" data-aos-duration="1000"></div>
          <a :href="meta.video_url" target="_blank" class="btn-event-viewmore" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="450" data-aos-offset="20">
            <img src="/pages/index/events/youtube.png">
            <span>Xem video chi tiết</span>
          </a>
        </h4>
      </div>

      <div class="highlight-events-night-porridge-right">
          <div><img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/nồi cháo trên bếp lửa-circle.png" data-aos="zoom-in-down" data-aos-duration="1000"></div>
          <div><img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/khuấy chào-circle.png" data-aos="zoom-in-right" data-aos-duration="1000"></div>
          <div><img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/múc cháo-circle.png" data-aos="zoom-in-left" data-aos-duration="1000"></div>
          <div><img src="/pages/index/events/tách chủ thể chương trình/Cháo đêm ấm lòng/tặng cháo-circle.png" data-aos="zoom-in-up" data-aos-duration="1000"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.state.meta.events.filter((event) => event.key === 'night_porridge')[0];
    },
  },
};
</script>

<style lang="scss">
.highlight-events-night-porridge {
  position: relative;
  // margin-top: 100px;

  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    // background: url('/pages/index/events/tách chủ thể chương trình/Trung thu cho em/vòng tròn trung thu.png');
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
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-images {
      position: relative;

      img {
        &:not(:nth-child(3)) {
          position: absolute;
        }

        // moon
        &:nth-child(1) {
          width: 120px;
          top: 20px;
          right: 70px;
        }
        // star
        &:nth-child(2) {
          width: 30px;
          top: 70px;
          right: 90px;
        }

        // typo
        &:nth-child(3) {
        }

        // cháo
        &:nth-child(4) {
          width: 120px;
          bottom: 70px;
          left: 120px;
        }
      }
    }
  }

  &-right {
    position: relative;
    justify-self: end;
    width: 100%;

    div {
      position: absolute;
      // filter: drop-shadow(0 0 0.75rem rgba(255, 192, 97, 0.664));

      border: 1px dashed rgba(233, 233, 233, 0.664);
      border-radius: 50%;
      background: rgba(224, 224, 224, 0.452);
      backdrop-filter: blur(5px);

      &:not(:first-child) {
        background: rgba(255, 251, 231, 0.781);
      }

      // bếp
      &:nth-child(1) {
        width: 300px;
        left: calc(50% / 2.5);
        top: 20%;
        background: rgba(0, 0, 0, 0.973);
      }

      // khuấy
      &:nth-child(2) {
        width: 250px;
        right: 50px;
        top: 130px;
      }

      // múc
      &:nth-child(3) {
        // width: 100px;
        left: 0px;
        top: 180px;
      }

      // tặng
      &:nth-child(4) {
        width: 50%;
        left: 30%;
        top: 300px;
      }
    }
  }
}
</style>
