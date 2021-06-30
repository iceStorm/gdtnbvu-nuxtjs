<template>
  <ul id="mobile-menu">
    <li v-for="(item) in menuItems" :key="item.href" :class="{ active: item.href == menu.activeHref }">
      <nuxt-link :to="item.href">
        <img :src="item.href == menu.activeHref ? item.icon.filled : item.icon.outline">
        <span>{{ item.title }}</span>
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
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0;
  background: #fff;
  // border-top: 2px solid #eee;
  box-shadow: 0 -1px 24px 0 rgba(223, 223, 223, 0.521);

  display: flex;
  justify-content: stretch;
  align-items: center;

  overflow-x: auto;
  white-space: nowrap;

  &::after {
    content: '';
    position: fixed;

    right: 0;
    bottom: 0;

    height: 78px;
    width: 50px;

    background: linear-gradient(to left, white, transparent);
  }

  > li {
    flex: 1 1 0;
    list-style: none;

    a {
      text-align: center;
      display: block;
      padding: 15px;

      color: var(--text);
      font-weight: 600;

      @media (max-width: 425px) {
        span {
          font-size: 12px;
        }
      }

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      transition: all .45s ease-in-out;

      &:active {
        background: rgba(0, 0, 0, 0.137);
      }

      @media (max-width: 768px) {
        flex-direction: column;
        font-size: 14px;
      }

      img {
        width: 20px;
      }
    }
  }
}
</style>
