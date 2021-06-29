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
          :class="$store.state.menu.mobileVisibility ? 'show': ''">
          <div
            id="nav-mobile-overlay"
            @click="$store.commit('menu/toggleMobileVisibility')"
            :class="$store.state.menu.mobileVisibility ? 'show': ''" />
          <ul>
              <li v-for="(item) in menuItems" :key="item.href">
                <nuxt-link :to="item.href">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
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

        <!-- <a id="btn-register-member" href="https://bit.ly/Dangky-ĐTNBVU" target="_blank" class="btn animate__animated animate__fadeInRight">Đăng ký thành viên</a> -->
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
    menuItems() {
      return this.$store.state.menu.items;
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
      // console.log(this.menu);

      // hide the horizontal nav menu
      if (window.innerWidth <= 960) {
        if (!this.menu.mobile) {
          this.$store.commit('menu/toggleMobileMode', true);
        }
      }
      else if (this.menu.mobile) {
        this.$store.commit('menu/toggleMobileMode', false);
        this.$store.commit('menu/setMobileVisibility', false);
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
      // background: rgba(0,0,0,0.25);
      // backdrop-filter: blur(10px);
      // height: 50px;

      &-mobile {
        position: fixed;
        top: 42px;
        left: -1000px;
        bottom: 0;

        width: 65%;
        height: 100vh;

        transition: all .75s cubic-bezier(0.820, 0.085, 0.395, 0.895);;

        &-overlay {
          position: fixed;
          z-index: -1;
          top: 42px;
          left: 0;
          bottom: 0;
          right: 0;
          height: 100vh;

          transition: all .5s ease-in-out;
          background: rgba(0,0,0,0);

          &.show {
            background: rgba(0,0,0,0.5);
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

            a {
              display: block;
              padding: 15px 15px 10px;
              font-weight: 500;

              &:nth-child(1) {
                padding-top: 20px;
              }
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
          // position: absolute;
          // top: 10px;
          // left: 50%;
          // transform: translateX(-50%);

          // animation-name: heartBeat;
          // animation-duration: 1.35s;

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

                font-weight: 500;
                text-transform: uppercase;
                font-size: 14px;

                color: #fff;
                border-bottom: 2px solid transparent;
                transition: all .35s;

                &:hover {
                  color: var(--link-hover-color);
                }
              }

              &:not(:last-child) {
                a {
                  padding-right: 28px;
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
        background: rgba(255, 255, 255, 1);
        // backdrop-filter: blur(20px) saturate(180%);

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
