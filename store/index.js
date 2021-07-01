export const state = () => ({
  meta: {},
  colorMode: {
    current: 'light',
    available: [
      {
        type: 'light',
        icon: '/icons/ion/filled/moon.svg',
      },
      {
        type: 'dark',
        icon: '/icons/ion/filled/sunny.svg',
      },
    ],
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

  toggleColorMode: ({ commit, state }) => {
    const { current } = state.colorMode;
    const next = state.colorMode.available.filter((mode) => mode.type !== current)[0];

    // console.log('next', next);
    commit('changeColorMode', next.type);
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

export const getters = {
  currentColorMode: (state) => state.colorMode.available.filter(
    (mode) => mode.type === state.colorMode.current,
  )[0],
};
