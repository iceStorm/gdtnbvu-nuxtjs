module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // '@nuxtjs/eslint-config-typescript',
    // 'plugin:nuxt/recommended',

    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'linebreak-style': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
  },
};
