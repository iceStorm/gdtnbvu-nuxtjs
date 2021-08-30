<template>
  <div id="colormode-switcher" title="Color mode" :class="{ rounded: rounded }" @click="toggleColorMode">
    <img :src="currentColorMode.icon">
  </div>
</template>

<script>
export default {
  props: [
    'rounded',
  ],
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
  cursor: pointer;
  padding: 8px;
  background: #eeeeee;

  &.rounded {
    border-radius: 50%;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15px;
    filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.15));
  }
}
</style>
