<template>
  <div class="side-floating-buttons" id="side-floating-buttons">
    <!-- <LanguageSwitcher style="border-radius: 6px;" /> -->
    <ColorModeSwitcher style="border-radius: 6px;" />
    <LayoutScrollTopButton />
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      const ypos = window.pageYOffset;
      const hasVisible = document.getElementById('side-floating-buttons').classList.contains('visible');

      if (ypos >= 500) {
        if (!hasVisible) {
          document.getElementById('side-floating-buttons').classList.add('visible');
        }
      } else if (hasVisible) {
        document.getElementById('side-floating-buttons').classList.remove('visible');
      }
    });
  },
};
</script>

<style lang="scss">
.side-floating-buttons {
  opacity: 0;
  visibility: hidden;
  transition: all .35s ease-in-out;

  &.visible {
    opacity: 0.85;
    visibility: visible;
  }

  > *:not(:last-child) {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  position: fixed;
  z-index: 9;
  left: 20px;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
