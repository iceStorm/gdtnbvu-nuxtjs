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
  <header id="header" ref="header" :class="{ away: $store.state.menu.mobile }">

    <div class="inner-page">

      <!-- logo -->
      <a id="header-logo" href="/">
        <img :src="$store.state.meta.logo_url" >
        <span>
          <p>
            <!-- club name -->
            <span v-for="(letter, index) in $t('header.clubTitle').split('')" :key="index">{{ letter }}</span>
          </p>
          <!-- club slogan -->
          <p>
            <span v-for="(letter, index) in getSlogan()" :key="index">{{ letter }}</span>
          </p>
        </span>
      </a>

      <!-- navigation -->
      <nav id="header-navigation">
        <ul>
          <li
            v-for="(item) in menuItems" :key="item.href"
            :class="{ active: item.href == menu.activeHref }">
            <nuxt-link :to="{ path: item.href }">
              {{ item.title[$i18n.locale] }}
            </nuxt-link>
          </li>
        </ul>
        <a-icon type="search" v-show="false"></a-icon>
      </nav>
    </div>

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
    // handling scroll event
    window.addEventListener('scroll', this.handleWindowScrolling);

    // handling resize event
    window.onload = () => this.toggleMainNav();
    window.onresize = () => this.toggleMainNav();
  },
  methods: {
    getSlogan() {
      const theSloganString = this.$store.state.meta.slogan.filter((slogan) => slogan.locale === this.$i18n.locale)[0].value;
      return theSloganString.split('');
    },
    handleWindowScrolling() {
      const currentPos = window.pageYOffset;
      const headerEl = this.$refs.header;

      if (currentPos > 100) {
        if (!headerEl.classList.contains('away')) {
          headerEl.classList.add('away');
        }
      } else if (headerEl.classList.contains('away') && !this.$store.state.menu.mobile) {
        headerEl.classList.remove('away');
      }
    },
    toggleMainNav() {
      // hide the horizontal nav menu
      if (window.innerWidth >= 1024) {
        if (this.menu.mobile) {
          this.$store.commit('menu/toggleMobileMode', false);
        }
      }
      else {
        // innerWidth < 1024 ==> toggle mobile menu
        if (!this.menu.mobile) {
          this.$store.commit('menu/toggleMobileMode', true);
        }

        // header alternate buttons container
        if (window.innerWidth > 480) {
          if (this.menu.alternateHeader.visible) {
            this.$store.commit('menu/toggleAlternateHeaderVisible', false);
          }
        } else if (!this.menu.alternateHeader.visible) {
          this.$store.commit('menu/toggleAlternateHeaderVisible', true);
        }
      } // < 1024px
    },
  },
};
</script>

<style lang="scss">
#header {
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
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
        color: var(--color-link-hover);
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

    #header-navigation {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 40px;

      @media (max-width: 1023px) {
        display: none;
      }

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

    #header-buttons .container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
    }

    #header-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        p {
          margin-bottom: 0;
          color: inherit;

          &:first-child {
            font-weight: 900;
            @for $i from 1 through 50 {
              span:nth-child(#{$i}) {
                opacity: 0;
                animation: fadeInLeft;
                animation-duration: .75s;
                animation-delay: #{$i*50}ms;
                animation-fill-mode: forwards;
              }
            }
          }

          &:last-child {
            font-size: 12px;
            text-transform: capitalize;
            @for $i from 1 through 50 {
              span:nth-child(#{$i}) {
                opacity: 0;
                animation: fadeInLeft;
                animation-duration: .75s;
                animation-delay: #{450 + $i*50}ms;
                animation-fill-mode: forwards;
              }
            }
          }
        }
      }
    }

  } // .inner-page

  &.away {
    padding: 0;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 24px 0 rgba(223, 223, 223, 0.521);

    background: #fff;
    // background: rgba(255, 255, 255, 0.904);
    // backdrop-filter: blur(20px);

    @media (max-width: var(--mobile-threshold)) {
      position: fixed;
    }

    a {
      color: black;
    }

    li.active {
      a {
        color: var(--color-link-hover);
      }
    }

    #header-navigation {
      a {
        &:not(:last-child) {
          padding: 5px 20px;
        }
      }

      .anticon {
        color: black;
      }
    }

    #header-logo {
      img {
        // width: 40px;
      }
    }
  } // .sticky
}
</style>
