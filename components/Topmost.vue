<template>
  <div id="topmost">
    <div class="inner-page">
      <div id="topmost-left">
        <a-icon
          v-if="$store.state.menu.mobile"
          :type="$store.state.menu.mobileVisibility ? 'close': 'menu'"
          @click="$store.commit('menu/toggleMobileVisibility')" />
        <a-icon type="search" />
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

  .inner-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    position: relative;
    padding: 5px 15px;

    #topmost-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    #topmost-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 50px;

      &-socials {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

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
    }
  }
}
</style>
