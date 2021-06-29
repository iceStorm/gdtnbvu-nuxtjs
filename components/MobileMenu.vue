<template>
  <ul id="mobile-menu">
    <li v-for="(item) in menuItems" :key="item.href">
      <nuxt-link :to="item.href">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    mobileMenuVisibility() {
      return this.$store.state.menu.mobileMenuVisible;
    },
    menuItems() {
      return this.$store.state.menu.items;
    },
    social() {
      return this.$store.state.meta.social_media_links;
    },
  },
};
</script>

<style lang="scss">
#mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background: #fff;
  border-top: 1px solid #eee;
}
</style>
