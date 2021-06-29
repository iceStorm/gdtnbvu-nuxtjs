<template>
  <div id="topmost">
    <div class="inner-page">
      <div id="topmost-left">
        <a href="/" id="mobile-logo" v-if="$store.state.menu.mobile">
          <img src="/logo.png" >
        </a>

        <span>
          <span v-for="letter in 'Gia đình Tình nguyện BVU'.split('')">{{ letter }}</span>
        </span>
      </div>

      <div id="topmost-right">
        <div id="topmost-right-socials">
          <a v-for="item in social" :key="item.social_link"
            :href="hrefConvert(item.social_link)" target="_blank"
            :data-tippy-content="item.social_name">
            <img :src="item.social_icon">
          </a>
        </div>

        <language-switcher></language-switcher>

        <a-icon
          v-if="$store.state.menu.mobile"
          :type="$store.state.menu.mobileMenuVisible ? 'close': 'menu'"
          @click="$store.commit('menu/toggleMobileMenuVisible')" />
      </div>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  components: { LanguageSwitcher },
  data() {
    return {
    };
  },
  computed: {
    social() {
      return this.$store.state.meta.social_media_links;
    },
  },
  mounted() {
    tippy('[data-tippy-content]');
  },
};
</script>

<style lang="scss">
#topmost {
  background: var(--primary-color);
  animation-name: fadeInDown;
  animation-duration: 1.75s;

  position: relative;
  z-index: 99;

  .inner-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    position: relative;
    padding: 5px 0;

    @media (max-width: 1192px) {
      padding-left: 25px;
      padding-right: 25px;
    }
    @media (max-width: 430px) {
      padding-left: 15px;
      padding-right: 15px;
    }

    #topmost-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 900;
        color: #575757;

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

      #mobile-logo {
        img {
          width: 40px !important;
        }
      }
    }

    #topmost-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 50px;

      @media (max-width: 670px) {
        gap: 10px;
      }

      &-socials {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        @media (max-width: 670px) {
          display: none;
        }

        a {
          flex: 1 1 0;
          img {
            width: 15px;
          }

          @for $i from 1 through 10 {
            &:nth-child(#{$i}) {
              opacity: 0;

              animation: fadeInRight;
              animation-duration: .75s;
              animation-delay: #{750+$i*100}ms;
              animation-fill-mode: forwards;
            }
          }
        }
      }

      #language-switcher {
        @media (max-width: 670px) {
          display: none;
        }
      }
    }
  }
}
</style>
