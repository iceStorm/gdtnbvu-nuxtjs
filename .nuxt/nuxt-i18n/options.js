

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: true,
  locales: [{"code":"vi","iso":"vi-VN","name":"Vietnamese","flag":"/icons/flags/vi.svg","file":"vi.js"},{"code":"en","iso":"en-US","name":"English","flag":"/icons/flags/uk.svg","file":"en.js"}],
  defaultLocale: "vi",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\anhtu\\Desktop\\gdtnbvu-nuxtjs\\locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"vi","iso":"vi-VN","name":"Vietnamese","flag":"/icons/flags/vi.svg","file":"vi.js"},{"code":"en","iso":"en-US","name":"English","flag":"/icons/flags/uk.svg","file":"en.js"}],
  localeCodes: ["vi","en"],
}

export const localeMessages = {
  'vi.js': () => import('../..\\locales\\vi.js' /* webpackChunkName: "lang-vi.js" */),
  'en.js': () => import('../..\\locales\\en.js' /* webpackChunkName: "lang-en.js" */),
}
