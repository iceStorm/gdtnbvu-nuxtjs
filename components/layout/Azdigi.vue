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

  color: black;

  &:hover {
    color: red;
  }

  &.rounded {
    background: rgb(241, 247, 255);
    border-radius: 998px;
    padding: 5px 10px;
    font-weight: 600;
    text-align: center;
    display: inline-block;

    color: dodgerblue;

    @media (max-width: 500px) {
      border-radius: 0;
      margin-bottom: 25px;
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style>
