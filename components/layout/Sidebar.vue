<template>
  <!-- <aside id="sidebar" class="sidebar">
    <h1>Sidebar</h1>
  </aside> -->

  <a-drawer class="sidebar" title="Menu" placement="left" :visible="$store.state.menu.sidebar" @close="onDrawerClose">
    <ul class="sidebar-menu">
      <li v-for="(item) in menuItems" :key="item.href" :class="['sidebar-menu-item', { active: item.href == menu.activeHref }]">
        <nuxt-link :to="item.href">
          <!-- <img :src="item.href == menu.activeHref ? item.icon.filled : item.icon.outline"> -->
          <span>{{ item.title[$i18n.locale] }}</span>
        </nuxt-link>
      </li>
    </ul>

    <div class="sidebar-footer">
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </div>
  </a-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      group: null,
    };
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    menuItems() {
      return this.$store.state.menu.items;
    },
  },
  methods: {
    onDrawerClose() {
      this.$store.state.menu.sidebar = false;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  .ant-drawer-content-wrapper {
    // background: var(--color-body);
  }
  .ant-drawer-content {
    background: var(--color-body);
  }
  .ant-drawer-title {
    font-weight: 600;
  }
  .ant-drawer-body {
    padding: 10px;
  }

  &-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    &-item {
      list-style: none;

      a {
        display: block;
        padding: 5px 14px;
        font-weight: 600;

        &:hover {
          background: rgb(247, 247, 247);
          border-radius: 6px;
        }
      }

      &.active {
        a {
          color: var(--color-link-hover);
        }
      }
    }
  } // sidebar-menu

  &-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(250, 250, 250);
    border-top: 1px solid #eee;
    padding: 10px 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
