<template>
  <a id="scrollTopBtn" href="#lobby" :class="{ mobile: $store.state.menu.mobile }">
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

  @media (max-width: 360px) {
    right: 10px;
    bottom: 10px;
  }

  &.mobile {
    bottom: 90px;
  }

  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: white;
  border-radius: 4px;
  background: var(--primary-color);
  box-shadow: 0 0 20px 0 rgba(139, 139, 139, 0.178);

  opacity: 0;
  visibility: hidden;
  transition: all .35s ease-in-out;

  &.visible {
    opacity: 0.85;
    visibility: visible;
  }
}
</style>
