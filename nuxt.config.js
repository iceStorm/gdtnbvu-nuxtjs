export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BVU Volunteer Team',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/base/styles/base.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/wp-api/wp-api' },
    { src: '@/plugins/hrefExtractor' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    'nuxt-i18n',
  ],

  env: process.env.NODE_ENV === 'development' ? {
    // BASE_URL: 'http://localhost/',
  } : {
    // BASE_URL: 'http://lienquan.garena/',
  },

  publicRuntimeConfig: { // for client
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost/' : 'http://localhost/',
  },
  privateRuntimeConfig: { // for server

  },

  loading: { color: '#00d10e', throttle: 0 },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },

  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: 'vi',
        iso: 'vi-VN',
        name: 'Vietnamese',
        flag: '/icons/flags/vi.svg',
        file: 'vi.js',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        flag: '/icons/flags/uk.svg',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'vi',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
