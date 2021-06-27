<template>
  <a id="scrollTopBtn" href="#header">
    <a-icon type="arrow-up" />
  </a>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      const ypos = window.pageYOffset;
      const hasVisible = document.getElementById('scrollTopBtn').classList.contains('visible');

      if (ypos >= 500) {
        if (!hasVisible) {
          document.getElementById('scrollTopBtn').classList.add('visible');
        }
      } else if (hasVisible) {
        document.getElementById('scrollTopBtn').classList.remove('visible');
      }
    });
  },
};
</script>

<style lang="scss">
#scrollTopBtn {
  position: fixed;
  z-index: 9;

  right: 20px;
  bottom: 20px;

  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: white;
  // border-radius: 4px;
  background: var(--primary-color);

  opacity: 0;
  visibility: hidden;
  transition: all .35s ease-in-out;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
}
</style>
