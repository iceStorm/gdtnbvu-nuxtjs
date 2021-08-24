<template>
  <div id="header-buttons-alternate"
    v-if="menu.alternateHeader.visible"
    :class="{ show: menu.alternateHeader.show }">
    <div class="inner-page">
      <color-mode-switcher />
      <!-- <language-switcher /> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  },
};
</script>

<style lang="scss">
#header-buttons-alternate {
  background: #fff;
  border-bottom: 1px solid #eee;

  position: fixed;
  z-index: 2;
  top: -80px;
  left: 0;
  right: 0;

  transition: all .45s ease-in-out;
  &.show {
    top: 70px;

    @media (max-width: 424px) {
      top: 60px;
    }
  }

  .inner-page {
    padding: 25px;
    padding-left: 30px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
  }
}
</style>
