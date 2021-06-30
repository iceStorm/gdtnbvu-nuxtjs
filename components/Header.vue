<i18n>
{
  "vi": {
    "header": {
      "clubTitle": "Gia đình Tình nguyện BVU"
    }
  },
  "en": {
    "header": {
      "clubTitle": "BVU Volunteer Team"
    }
  }
}
</i18n>

<template>
  <header id="header">

    <!-- navigation menu -->
    <nav id="main-menu-container" ref="main-menu-container"
        :class="{ mobile: menu.mobile }">

      <div class="inner-page">
        <a id="main-menu-logo" href="/">
          <img src="/logo.png" >
          <span>
            <span v-for="letter in $t('header.clubTitle').split('')">{{ letter }}</span>
          </span>
        </a>

        <nav id="main-menu-navigation" v-if="!menu.mobile">
          <ul>
            <li v-for="(item) in menuItems" :key="item.href" :class="{ active: item.href == menu.activeHref }">
              <nuxt-link :to="{ path: item.href, hash: '#above-content' }" v-scroll-to="{el: '#above-content'}">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
          <a-icon type="search" v-show="false"></a-icon>
        </nav>
      </div>
    </nav>

    <!-- mobile menu -->
    <mobile-menu v-if="menu.mobile" />

    <!-- lobby -->
    <Lobby />

  </header>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    menuItems() {
      return this.$store.state.menu.items;
    },
  },
  mounted() {
    let prevPos = window.pageYOffset;

    // handling scroll event
    window.onscroll = (e) => {
      const currentPos = window.pageYOffset;
      const mainMenuContainer = this.$refs['main-menu-container'];

      if (currentPos > 37) {
        if (!mainMenuContainer.classList.contains('sticky')) {
          mainMenuContainer.classList.add('sticky');
        }
      } else if (mainMenuContainer.classList.contains('sticky')) {
        mainMenuContainer.classList.remove('sticky');
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
      if (window.innerWidth >= 1024) {
        if (this.menu.mobile) {
          this.$store.commit('menu/toggleMobileMode', false);
        }
      }
      else if (!this.menu.mobile) {
        this.$store.commit('menu/toggleMobileMode', true);
      }
    },
  },
};
</script>

<style lang="scss">
#header {
  #main-menu-container {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    padding: 10px 0;
    transition: all .45s ease-in-out;

    @media (max-width: 425px) {
      padding: 0;
    }

    .inner-page {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1191px) {
        padding: 0 25px;
      }
      @media (max-width: 425px) {
        padding: 0 15px;
      }

      a {
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        &:hover {
          color: var(--link-hover-color);
        }
      }

      ul {
        display: flex;
        align-items: center;
        margin: 0;

        li {
          list-style: none;
          flex-grow: 1;

          a {
            display: block;
            padding: 20px;
          }

          &:last-child a {
            padding-right: 0;
          }
        }
      }

      #main-menu-navigation {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 40px;

        .anticon {
          color: white;
          cursor: pointer;
        }

        ul {
          @for $i from 1 through 10 {
            li:nth-child(#{$i}) {
              opacity: 0;
              animation: fadeInRight 1.75s #{$i * 100}ms forwards;
            }
          }
        }
      }

      #main-menu-logo {
        font-weight: 900;

        img {
          width: 50px;
          margin: 10px 0;
          margin-right: 5px;
          transition: all .45s ease-in-out;

          @media (max-width: 425px) {
            width: 40px;
          }
        }

        > span {
          @for $i from 1 through 30 {
            span:nth-child(#{$i}) {
              opacity: 0;
              animation: fadeInLeft;
              animation-duration: .75s;
              animation-delay: #{$i*50}ms;
              animation-fill-mode: forwards;
            }
          }
        }
      }

    } // .inner-page

    &.sticky {
      padding: 0;
      border-bottom: 1px solid #eee;
      box-shadow: 0 1px 24px 0 rgba(223, 223, 223, 0.521);
      background: #fff;
      // background: url(/footer-bg.jpg);
      // background: var(--primary-color);

      a {
        color: black;
      }

      li.active {
        a {
          color: var(--link-hover-color);
        }
      }

      #main-menu-navigation {
        a:not(:last-child) {
          padding: 15px 20px;
        }

        .anticon {
          color: black;
        }
      }

      #main-menu-logo {
        img {
          width: 40px;
        }
      }
    }

  } // #menu-container
}
</style>
