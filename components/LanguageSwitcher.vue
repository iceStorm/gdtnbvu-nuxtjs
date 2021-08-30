<template>
  <div id="language-switcher">
    <nuxt-link
      class="language-switcher-item"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      <img :src="locale.flag">
      <span>{{ locale.name }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
  .language-switcher-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: fit-content;

    padding: 3px 10px 3px 8px;
    border-radius: 4px;
    border: none;
    background: rgb(238, 238, 238);
    color: black;

    img {
      width: 15px;
    }
  }
}

</style>
