<template>
  <div class="highlight-events-lovely-spring">
    <div class="inner-page">

      <div class="highlight-events-lovely-spring-left">
        <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/typo xuân yêu thương.png" data-aos="zoom-in-right" data-aos-duration="1000">

        <!-- <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/lồng đèn lớn.png" data-aos="zoom-in-left" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/lồng đèn nhỏ.png" data-aos="zoom-in-right" data-aos-duration="1000"> -->

        <h4 class="title highlight-events-lovely-spring-left-descriptions" data-aos="fade-up" data-aos-duration="1000">
          <p>
            Tiết trời đã trở lạnh, không khí Tết đến gần, nhà nhà người người đều dang sắm sửa chuẩn bị chào đón một năm mới tràn đầy hi vọng. Trong không khí rộng ràng ấy vẫn còn có những mảnh đời bất hạnh không có nhà để về, không người thân bên cạnh, phải lam lũ làm việc vất vả.
          </p>
          <p>
            Với mong muốn mang đến niềm vui nho nhỏ cho những người có hoàn cảnh khó khăn, Đội Tình nguyện BVU đã lên kế hoạch tổ chức chương trình "Xuân yêu thương" hàng năm nhằm quyên góp và gửi tặng những phần quà ý nghĩa đến với những người còn khó khăn trong dịp Tết về.
          </p>
        </h4>
      </div>

      <div class="highlight-events-lovely-spring-right">
        <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/hoa và phụ kiện 4.png" data-aos="zoom-out" data-aos-duration="1000">
        <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/hoi-truong.png" data-aos="zoom-in-up" data-aos-duration="1000">

        <img src="/pages/index/events/tách chủ thể chương trình/Xuân yêu thương/cu-gia.png" data-aos="zoom-in-down" data-aos-duration="1000">
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
.highlight-events-lovely-spring {
  position: relative;
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
    gap: 25px;

    text-align: justify;

    h4 {
      font-weight: 300;
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
        width: 90%;
        left: -60px;
        bottom: 0;
      }
    }
  }
}
</style>
