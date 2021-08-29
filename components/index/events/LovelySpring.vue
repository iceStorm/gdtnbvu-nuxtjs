<template>
  <div class="highlight-events-lovely-spring">
    <div class="inner-page">

      <div class="highlight-events-lovely-spring-left">
        <div class="highlight-events-lovely-spring-left-images">
          <img src="/pages/index/events/sections/lovely_spring/big-lantern.png" data-aos="zoom-in-down" data-aos-duration="1000">
          <img src="/pages/index/events/sections/lovely_spring/small-lantern.png" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="350">

          <img src="/pages/index/events/sections/lovely_spring/flower-and-accessories.png">
          <img src="/pages/index/events/sections/lovely_spring/swift-bird.png" data-aos="zoom-in-right" data-aos-duration="1000">
          <img src="/pages/index/events/sections/lovely_spring/typo.png" data-aos="zoom-in-right" data-aos-duration="1000">

          <img src="/pages/index/events/sections/lovely_spring/big-flower.png" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/pages/index/events/sections/lovely_spring/big-flower.png" data-aos="zoom-in" data-aos-duration="1000">
        </div>

        <h4 class="title highlight-events-lovely-spring-left-descriptions">
          <div v-html="meta.descriptions" data-aos="fade-up" data-aos-duration="1000"></div>
          <a :href="meta.video_url" target="_blank" class="btn-event-viewmore" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="450" data-aos-offset="20">
            <img src="/pages/index/events/youtube.png">
            <span>Xem video chi tiết</span>
          </a>
        </h4>
      </div>

      <div class="highlight-events-lovely-spring-right">
        <img src="/pages/index/events/sections/lovely_spring/flower-and-accessories-4.png">
        <img src="/pages/index/events/sections/lovely_spring/hoi-truong.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/sections/lovely_spring/cu-gia.png" data-aos="zoom-in-down" data-aos-duration="1000">
        <img src="/pages/index/events/sections/lovely_spring/gift-bags.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/sections/lovely_spring/big-lantern.png" data-aos="zoom-in-down" data-aos-duration="1000">
        <img src="/pages/index/events/sections/lovely_spring/small-lantern.png" data-aos="zoom-in-up" data-aos-duration="1000">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.state.meta.events.filter((event) => event.key === 'lovely_spring')[0];
    },
  },
};
</script>

<style lang="scss">
.highlight-events-lovely-spring {
  position: relative;
  margin-top: 100px;

  &::before {
    content: "";

    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    // background: url('/pages/index/events/sections/Trung thu cho em/vòng tròn trung thu.png');
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
    gap: 35px;

    &-images {
      position: relative;

      img {
        &:not(:nth-child(5)) {
          position: absolute;
        }

        // lồng đén lớn
        &:nth-child(1) {
          width: 20%;
          top: -150px;
          left: -30px;
        }
        // lồng đén nhỏ
        &:nth-child(2) {
          width: 10%;
          top: -50px;
          left: 50px;
        }

        // hoa sau mũi tên
        &:nth-child(3) {
          width: 40%;
          top: -120px;
          right: 70px;
        }

        // chim én
        &:nth-child(4) {
          width: 40px;
          top: -140px;
          right: 70px;
        }

        // mũi tên
        &:nth-child(5) {
        }

        // hoa
        &:nth-child(6) {
          width: 40px;
          bottom: 30px;
          left: 50%;
        }
        // hoa
        &:nth-child(7) {
          width: 20px;
          top: 50px;
          right: 20px;
        }
      }
    }
  }

  &-right {
    position: relative;
    justify-self: end;

    img {
      &:not(:nth-child(2)) {
        position: absolute;
      }

      // hoa sau hội trường
      &:nth-child(1) {
        width: 50%;
        left: -50px;
        top: -50px;
      }

      // hội trường
      &:nth-child(2) {
        position: relative;
        top: -40px;
      }

      // các cụ già
      &:nth-child(3) {
        border: 2px dashed rgba(255, 255, 255, 0.507);
        border-radius: 10px;

        width: 90%;
        left: -60px;
        bottom: 0;

        @media (max-width: 550px) {
          left: 0px;
        }
      }
      // phần quà
      &:nth-child(4) {
        width: 50%;
        right: -20px;
        bottom: -20px;
      }

      // lồng đèn lớn
      &:nth-child(5) {
        width: 20%;
        right: -40px;
        top: -40px;
      }
      // lồng đèn nhỏ
      &:nth-child(6) {
        width: 10%;
        right: 30px;
        top: 30px;
      }
    }
  }
}
</style>
