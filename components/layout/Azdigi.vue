<template>
  <a href="https://azdigi.com" data-tippy-content="Web Hosting tốc độ cao" target="_blank" rel="dofollow" id="azdigi-link">
    <img src="https://azdigi.com/wp-content/uploads/2019/11/logo-ngang.png" />
     hân hạnh đồng hành cùng Gia Đình Tình Nguyện BVU.
  </a>
</template>

<script>
import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default {
  mounted() {
    tippy('[data-tippy-content]', {
      theme: 'light',
      followCursor: true,
      plugins: [followCursor],
    });
  },
};
</script>

<style lang="scss">
#azdigi-link {
  img {
    // width: 90px;
    max-height: 15px;
  }

  color: black !important;

  &:hover {
    color: red !important;
  }
}
</style>
