<template>
  <div class="highlight-events-children-spring">
    <div class="inner-page">

      <div class="highlight-events-children-spring-left">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/xe đạp-heart.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/hai chàng trai.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/nhóm gói quà-circle.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/balo.png" data-aos="zoom-in" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/bãi cỏ cô bé.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/hình cô bé.png" data-aos="zoom-in-down" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/bãi cỏ cậu bé.png" data-aos="zoom-in-up" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/hình cậu bé.png" data-aos="zoom-in-down" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/mây.png" data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/mây.png" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="350">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/mây.png" data-aos="zoom-in-left" data-aos-duration="1000">
      </div>

      <div class="highlight-events-children-spring-right">
        <img src="/pages/index/events/tách chủ thể chương trình/Tết thiếu nhi/typo.png" data-aos="zoom-out" data-aos-duration="1000">
        <h4 class="text highlight-events-children-spring-right-descriptions" data-aos="fade-up" data-aos-duration="1000">
          <p>"Tết thiếu nhi - Ước mơ cho em" là một chương trình cũng diễn ra hàng năm nhưng theo một mô-tuýp mới là thực hiện ước mơ cho một hoàn cảnh khó khăn nào đó trên địa bàn tỉnh Bà Rịa - Vũng Tàu.</p>
          <p>Trong năm 2021 - khi mà dịch bệnh Covid-19 vẫn đang hoành hành, Đội Tình nguyện BVU đã tổ chức bán những chiếc khẩu trang nho nhỏ nhằm gây quỹ mua quà tặng cho các em nhỏ có hoàn cảnh khó khăn. Đặc biệt là phần quà cho em Thảo với một chiếc xe đạp, một chiếc balo cùng dụng cụ học tập mới, một chiếc phong bì để em và gia đình trang trải thêm cho việc học tập.</p>
          <p>Cùng với đó, Đội cũng trao 40 phần quà cho các em thiếu nhi có hoàn cảnh khó khăn trên địa bàn Phường 5, giúp mang lại niềm vui - động lực cho các em trong mùa dịch khó khăn.</p>
        </h4>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
.highlight-events-children-spring {
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

      // xe đạp
      &:nth-child(1) {
        filter: drop-shadow(0 0 0.75rem rgba(97, 168, 255, 0.664));
      }

      // hai chàng trai
      &:nth-child(2) {
        width: 40%;
        right: 0px;
        bottom: 50px;
        filter: drop-shadow(0 0 0.75rem rgba(97, 168, 255, 0.664));
      }

      // nhóm gói quà
      &:nth-child(3) {
        width: 50%;
        left: -15px;
        bottom: 0px;
        filter: drop-shadow(0 0 0.75rem rgba(97, 168, 255, 0.664));
      }

      // balo
      &:nth-child(4) {
        width: 30px;
        left: 47px;
        bottom: 0px;
      }

      // bãi cỏ cô bé
      &:nth-child(5) {
        width: 25%;
        right: -30px;
        bottom: 30px;
      }
      // cô bé
      &:nth-child(6) {
        width: 15%;
        right: -10px;
        bottom: 40px;
      }

      // bãi cỏ cậu bé
      &:nth-child(7) {
        width: 25%;
        left: -30px;
        bottom: -30px;
      }
      // cậu bé
      &:nth-child(8) {
        width: 15%;
        left: -30px;
        bottom: -20px;
      }

      // mây trái
      &:nth-child(9) {
        width: 70px;
        left: -30px;
        top: -20px;
      }
      // mây trái
      &:nth-child(10) {
        width: 40px;
        left: 30px;
        top: -30px;
      }
      // mây phải
      &:nth-child(11) {
        width: 15%;
        right: -30px;
        top: -40px;
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
