export const state = () => ({
  meta: {},
  colorMode: {
    current: 'light',
    available: ['light', 'dark'],
  },
});

export const mutations = {
  setMeta(state, meta) {
    state.meta = meta;
  },

  changeColorMode(state, colorModeName) {
    state.colorMode.current = colorModeName;
  },
};
