<template>
  <div id="colormode-switcher" title="Color mode">
    <img :src="currentColorMode.icon" @click="toggleColorMode">
  </div>
</template>

<script>
export default {
  computed: {
    currentColorMode() {
      return this.$store.getters.currentColorMode;
    },
  },
  methods: {
    toggleColorMode() {
      this.$store.dispatch('toggleColorMode');
    },
  },
};
</script>

<style lang="scss">
#colormode-switcher {
  padding: 8px;
  background: rgb(238, 238, 238);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
    width: 15px;
    filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.15));
  }
}
</style>
