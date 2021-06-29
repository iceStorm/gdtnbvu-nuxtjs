<i18n>
{
  "vi": {
    "lobby": {
      "scrollDownTitle": "Cuộn xuống để khám phá"
    }
  },
  "en": {
    "lobby": {
      "scrollDownTitle": "Scroll down to discover"
    }
  }
}
</i18n>

<template>
  <header id="header">
    <!-- navigation menu -->
    <div id="header-nav" ref="header-nav">
      <!-- top most bar for contact, social icons -->
      <Topmost />

      <!--the actual navigation bar -->
      <div id="nav" ref="actual-nav" :class="$store.state.menu.mobile ? 'mobile': ''">
        <div id="nav-mobile"
          v-show="$store.state.menu.mobile"
          :class="$store.state.menu.mobileMenuVisible ? 'show': ''">
          <div
            id="nav-mobile-overlay"
            @click="$store.commit('menu/setMobileMenuVisible', false)"
            :class="{ show: $store.state.menu.mobileMenuVisible }" />
          <ul>
            <li v-for="(item) in menuItems" :key="item.href">
              <nuxt-link :to="item.href">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>

          <div id="topmost-right-socials">
            <a v-for="item in social" :key="item.social_link"
              :href="hrefConvert(item.social_link)" target="_blank"
              :data-tippy-content="item.social_name">
              <img :src="item.social_icon">
            </a>
          </div>
        </div>

        <div class="inner-page" v-if="!menu.mobile">
          <div class="nav-menu left">
            <ul>
              <li v-for="(item) in menuItems.slice(0, 3)" :key="item.href">
                <nuxt-link :to="item.href">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <a id="logo" href="/">
            <img src="../static/logo.png" alt="" srcset="">
          </a>

          <div class="nav-menu right">
            <ul>
              <li v-for="(item) in menuItems.slice(-3)" :key="item.href">
                <nuxt-link :to="item.href">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- lobby -->
    <Lobby />
  </header>
</template>

<script>
import { Icon } from 'ant-design-vue';

export default {
  components: {
    'a-icon': Icon,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    mobileMenuVisibility() {
      return this.$store.state.menu.mobileMenuVisible;
    },
    menuItems() {
      return this.$store.state.menu.items;
    },
    social() {
      return this.$store.state.meta.social_media_links;
    },
  },
  mounted() {
    let prevPos = 0;

    // handling scroll event
    window.onscroll = (e) => {
      const currentPos = window.pageYOffset;
      const classes = this.$refs['header-nav'].classList;

      // hiding the header nav when scroll down
      if (currentPos > prevPos) {
        if (!classes.contains('hidden')) {
          this.$refs['header-nav'].classList.add('hidden');
        }
      } else if (classes.contains('hidden')) {
        this.$refs['header-nav'].classList.remove('hidden');
      }

      // changing the actual navbar when scroll over a position
      const actualNavClasses = this.$refs['actual-nav'].classList;
      if (currentPos > 100) {
        if (!actualNavClasses.contains('away')) {
          this.$refs['actual-nav'].classList.add('away');
        }
      } else if (actualNavClasses.contains('away')) {
        this.$refs['actual-nav'].classList.remove('away');
      }

      prevPos = currentPos;
    };

    // handling resize event
    window.onload = () => this.toggleMainNav();
    window.onresize = () => this.toggleMainNav();
  },
  methods: {
    toggleMainNav() {
      // hide the horizontal nav menu
      if (window.innerWidth >= 950) {
        if (this.menu.mobile) {
          this.$store.commit('menu/toggleMobileMode', false);
          this.$store.commit('menu/setMobileMenuVisible', false);
        }
      }
      else if (!this.menu.mobile) {
        this.$store.commit('menu/toggleMobileMode', true);
      }
    },
  },
  watch: {
    mobileMenuVisibility: function(val) {
      if (val) {
        const body = document.getElementsByTagName('body')[0];
        if (!body.classList.contains('mobile')) {
          body.classList.add('mobile');
        }
      } else {
        const body = document.getElementsByTagName('body')[0];
        if (body.classList.contains('mobile')) {
          body.classList.remove('mobile');
        }
      }
    },
  },
};
</script>

<style lang="scss">
#header {
  &-nav {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    transition: all .45s ease-in-out;

    #nav {
      padding: 10px 0;
      transition: all 0.95s;

      &-mobile {
        // border-right: 1px solid #eee;
        box-shadow: 2px 0px 20px 0 rgba(0,0,0,0.25);
        position: fixed;
        z-index: 98;
        top: 50px;
        left: -400px;
        bottom: 0;

        width: 300px;
        height: 100vh;

        @media (max-width: 360px) {
          width: 250px !important;
        }

        transition: all .75s ease-in-out;

        &-overlay {
          position: fixed;
          z-index: -1;
          top: 50px;
          left: 0;
          bottom: 0;
          right: 0;
          height: 100vh;

          transition: all .5s ease-in-out;
          background: rgba(0,0,0,0.5);
          animation: fadeIn .75s ease-in-out;
          opacity: 0;
          visibility: hidden;

          &.show {
            opacity: 1;
            visibility: visible;
          }
        }

        &.show {
          left: 0;
        }

        ul {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;

          width: 100%;
          height: 100vh;
          background: #fff;

          li {
            list-style: none;
            @for $i from 1 through 10 {
              &:nth-child(#{$i}) {
                opacity: 0;

                animation: fadeInLeft;
                animation-duration: 1.725s;
                animation-delay: #{750 + $i*100}ms;
                animation-fill-mode: forwards;
              }
            }

            a {
              display: block;
              padding: 10px 20px;
              font-weight: 500;
            }

            &:nth-child(1) a {
              padding-top: 20px;
            }
          }
        }
      }

      .inner-page {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 50px;
        position: relative;

        #logo {
          img {
            transition: all .35s ease-in-out;
            max-width: 70px;
          }
        }

        .nav-menu {
          > ul {
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 10px;
            padding-left: 0;
            margin: 0;

            > li {
              list-style: none;

              a {
                position: relative;
                display: flex;
                padding: 5px 0;

                @media (max-width: 1192px) {
                  padding-left: 25px;
                  padding-right: 25px;
                }

                font-weight: bold;
                text-transform: uppercase;
                font-size: 14px;

                color: #fff;
                border-bottom: 2px solid transparent;
                transition: all .35s;

                &:hover {
                  color: var(--link-hover-color);
                }
              }

              @media (min-width: 1193px) {
                &:not(:last-child) {
                  a {
                    padding-right: 28px;
                  }
                }
              }

            }
          }

          &.left > ul > li {
            @for $i from 1 through 5 {
              &:nth-child(#{$i}) {
                opacity: 0;

                animation: fadeInRight;
                animation-duration: 1.275s;
                animation-delay: #{300 + $i*100}ms;
                animation-fill-mode: forwards;
              }
            }
          }

          &.right > ul > li {
            @for $i from 1 through 5 {
              &:nth-child(#{$i}) {
                opacity: 0;

                animation: fadeInLeft;
                animation-duration: 1.275s;
                animation-delay: #{300 + $i*100}ms;
                animation-fill-mode: forwards;
              }
            }
          }
        } // .nav-menu
      } // .inner-page

      // when the page is far away from the top
      &.away {
        &.mobile {
          padding: 0;
          border-bottom: none;
        }

        background: rgba(255, 255, 255, 1);
        border-bottom: 1px solid #eee;
        box-shadow: rgba(17, 12, 46, 0.05) 0px 48px 100px 0px;

        .inner-page {
          align-items: center;
        }

        #logo img {
          max-width: 70px;
          margin-top: -55%;
        }

        .nav-menu a {
          padding-top: 5px;
          padding-bottom: 5px;
          color: black !important;

          &:hover {
            color: var(--link-hover-color) !important;
          }
        }
      }
    } // .nav

    &.hidden {
      margin-top: -150px;
    }
  } // #header-nav
}
</style>
