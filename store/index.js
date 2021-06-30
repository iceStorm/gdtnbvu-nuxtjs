export const state = () => ({
  meta: {},
  colorMode: {
    current: 'light',
    available: ['light', 'dark'],
  },
});

export const actions = {
  async nuxtServerInit({ commit }, { $wp }) {
    const values = await Promise.all([
      $wp.$get('/meta'),
      // $wp.$get('/articles?per_page=6'),
    ]);

    commit('setMeta', values[0]);
    // commit('setNewsGrid', values[1]);
  },
};

export const mutations = {
  setMeta(state, meta) {
    state.meta = meta;
  },

  changeColorMode(state, colorModeName) {
    state.colorMode.current = colorModeName;
  },
};
