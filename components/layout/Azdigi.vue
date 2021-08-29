<template>
  <a href="https://azdigi.com" target="_blank" rel="dofollow"
    data-tippy-content="Web Hosting tốc độ cao"
    :class="['azdigi-link', { rounded: rounded }]">
    <img src="https://azdigi.com/wp-content/uploads/2019/11/logo-ngang.png" />
     hân hạnh đồng hành cùng Gia Đình Tình Nguyện BVU.
  </a>
</template>

<script>
import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default {
  props: [
    'rounded',
  ],
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
.azdigi-link {
  img {
    // width: 90px;
    max-height: 15px;
  }

  color: black !important;

  &:hover {
    color: red !important;
  }

  &.rounded {
    background: rgb(221, 234, 252);
    border-radius: 998px;
    padding: 5px 10px;
    font-weight: 600;
  }
}
</style>
