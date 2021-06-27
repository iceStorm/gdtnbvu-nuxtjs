<template>
  <div id="colormode-switcher">
    <select name="" id="" @change="onColorModeChanged($event.target.value)">
      <option v-for="mode in colorModes" :key="mode" :value="mode">{{ mode }}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    colorModes() {
      return this.$store.state.colorMode.available;
    },
  },
  methods: {
    onColorModeChanged(value) {
      this.$store.commit('changeColorMode', value);
    },
  },
};
</script>

<style lang="scss">

</style>
