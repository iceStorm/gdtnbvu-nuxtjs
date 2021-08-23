import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ae7926a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _62d6845e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1b77dce0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3f6a22e0 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _981df652 = () => interopDefault(import('..\\pages\\members.vue' /* webpackChunkName: "pages/members" */))
const _19e43842 = () => interopDefault(import('..\\pages\\news\\p\\_slug.vue' /* webpackChunkName: "pages/news/p/_slug" */))
const _36c538d6 = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5ae7926a,
    name: "about___vi"
  }, {
    path: "/contact",
    component: _62d6845e,
    name: "contact___vi"
  }, {
    path: "/en",
    component: _1b77dce0,
    name: "index___en"
  }, {
    path: "/gallery",
    component: _3f6a22e0,
    name: "gallery___vi"
  }, {
    path: "/members",
    component: _981df652,
    name: "members___vi"
  }, {
    path: "/en/about",
    component: _5ae7926a,
    name: "about___en"
  }, {
    path: "/en/contact",
    component: _62d6845e,
    name: "contact___en"
  }, {
    path: "/en/gallery",
    component: _3f6a22e0,
    name: "gallery___en"
  }, {
    path: "/en/members",
    component: _981df652,
    name: "members___en"
  }, {
    path: "/en/news/p/:slug?",
    component: _19e43842,
    name: "news-p-slug___en"
  }, {
    path: "/en/news/:slug?",
    component: _36c538d6,
    name: "news-slug___en"
  }, {
    path: "/news/p/:slug?",
    component: _19e43842,
    name: "news-p-slug___vi"
  }, {
    path: "/news/:slug?",
    component: _36c538d6,
    name: "news-slug___vi"
  }, {
    path: "/",
    component: _1b77dce0,
    name: "index___vi"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
