<template>
  <div id="language-switcher" :class="{ rounded: rounded }">
    <a
      class="language-switcher-item"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent="() => $i18n.setLocale(locale.code)"
      >
      <img :src="locale.flag">
      <span v-if="showLocaleName">{{ locale.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'showLocaleName',
    'rounded',
  ],
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    switchLocale(e) {
      // console.log(e);
    },
  },
  mounted() {
    // console.log(this.$i18n.localeProperties.name);
  },
};
</script>

<style lang="scss">
#language-switcher {
  overflow: hidden;

  .language-switcher-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: fit-content;

    padding: 10px;

    &.rounded {
      padding: 3px 10px 3px 8px;
      border-radius: 4px;
    }

    border: none;
    background: rgb(238, 238, 238);
    color: black;

    img {
      width: 15px;
    }
  }
}

</style>
