<i18n>
{
  "vi": {
    "footer": {
      "mailRegister": {
        "caption": "Nhận bài đăng mới qua email.",
        "inputPlaceholder": "Nhập địa chỉ email",
        "registerButtonTitle": "Đăng ký"
      },
      "memberRegister": {
        "caption": "Chưa tham gia đội tình nguyện ?",
        "registerButtonTitle": "Đăng ký gia nhập"
      }
    }
  },
  "en": {
    "footer": {
      "mailRegister": {
        "caption": "Interested in our articles ?",
        "inputPlaceholder": "Enter your email",
        "registerButtonTitle": "Receive Newsletters"
      },
      "memberRegister": {
        "caption": "Not joined the team yet ?",
        "registerButtonTitle": "Register member"
      }
    }
  }
}
</i18n>

<template>
  <footer id="footer" :class="{ mobile: $store.state.menu.mobile }">
    <div id="footer-mail-register">
      <div class="inner-page">
        <div>
          <h1>{{ $t('footer.mailRegister.caption') }}</h1>
          <form>
            <input
              id="txt-mail-register"
              type="email" required
              :placeholder="$t('footer.mailRegister.inputPlaceholder')">

            <input type="submit" class="btn"
              @submit.prevent="registerNewsletter"
              :value="$t('footer.mailRegister.registerButtonTitle')">
          </form>
        </div>

        <div>
          <h1>{{ $t('footer.memberRegister.caption') }}</h1>
          <a class="btn" target="_blank"
            :href="$store.state.meta.contact.register_form">
            {{ $t('footer.memberRegister.registerButtonTitle') }}
          </a>
        </div>
      </div>
    </div>

    <div id="footer-main">
      <div class="inner-page">
        <section class="footer-main-section contact">
          <h4 class="footer-main-section-title">Đội tình nguyện BVU</h4>
          <div class="footer-main-section-content">
            <div class="contact-default">
              <div class="contact-item">
                <span class="text">Địa chỉ:</span>
                <a target="_blank" href="https://goo.gl/maps/3UhndXsNeJo5mzqE6">
                  {{ $store.state.meta.contact.address }}
                </a>
              </div>

              <div class="contact-item">
                <span class="text">Số điện thoại:</span>
                <a target="_blank" :href="hrefConvert($store.state.meta.contact.phone)">
                  {{ $store.state.meta.contact.phone }}
                </a>
              </div>

              <div class="contact-item">
                <span class="text">E-mail:</span>
                <a target="_blank" :href="hrefConvert($store.state.meta.contact.email)">
                  {{ $store.state.meta.contact.email }}
                </a>
              </div>
            </div>

            <div class="contact-social" style="padding-top: 35px;">
              <h4 class="footer-main-section-title">Mạng xã hội</h4>
              <div class="contact-social-content">
                <a v-for="item in $store.state.meta.social_media_links"
                  :key="item.social_link"
                  :href="hrefConvert(item.social_link)"
                  target="_blank">
                  {{ item.social_name }}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="footer-main-section links">
          <h4 class="footer-main-section-title">Điều hướng</h4>
          <ul class="footer-main-section-content">
            <li v-for="item in $store.state.menu.items" :key="item.href">
              <nuxt-link :to="item.href">{{ item.title[$i18n.locale] }}</nuxt-link>
            </li>
          </ul>
        </section>

        <section class="footer-main-section legals">
          <h4 class="footer-main-section-title">Liên kết</h4>
          <ul class="footer-main-section-content">
            <li v-for="item in otherLinks" :key="item.href">
              <a :href="item.href" target="_blank">
                {{ item.title[$i18n.locale] }}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <div id="footer-copyright" v-if="!$store.state.menu.mobile">
      <div class="inner-page">
        <span>Copyright &copy; 2021 - {{ $t('title') }}</span>
        <!-- <span></span> -->
        <!-- <span>Made by WordPress & NuxtJS with 💚</span> -->
        <div id="footer-config-buttons">
          <color-mode-switcher></color-mode-switcher>
          <language-switcher></language-switcher>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import ColorModeSwitcher from './ColorModeSwitcher.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default Vue.extend({
  components: {
    LanguageSwitcher,
    ColorModeSwitcher,
  },
  computed: {
    otherLinks() {
      return [
        {
          title: {
            vi: 'Gia nhập Đội',
            en: 'Join the Team',
          },
          href: this.$store.state.meta.contact.register_form,
        },
      ];
    },
  },
  methods: {
    registerNeletter() {
      console.log('clicked');
    },
    openMemberRegisterForm() {

    },
  },
});
</script>

<style lang="scss">
  #footer {
    position: relative;
    z-index: 1;

    &.mobile {
      padding-bottom: 40px;
    }

    &-mail-register {
      position: relative;
      overflow: hidden;

      &:before {
        content: "";

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: url('/footer-bg.jpg') no-repeat;
        background-size: cover;
        // background-attachment: fixed;
        // filter: blur(10px);

        height: 100%;
        width: 100%;
      }

      &::after {
        // content: "";

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.171);
      }

      .inner-page {
        padding: 50px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 800px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
        }

        * {
          outline: none;
          border: none;

          h1 {
            line-height: 1;
            margin-bottom: 10px;
          }
        }

        .btn {
          border-radius: 0;
          cursor: pointer;
        }

        form, .btn {
          box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        }

        form {
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          width: fit-content;

          input[type=email] {
            padding: 10px 15px;
            background: white;

            @media (max-width: 360px) {
              width: 180px;
            }
          }
        }
      }
    }

    &-main {
      .inner-page {
        padding: 40px 0;
        display: grid;
        grid-template-areas:
        "first second third";
        justify-items: center;
        gap: 35px;

        @media (max-width: 556px) {
          justify-items: normal;

          grid-template-areas:
          "first first"
          "second third";
        }

        .footer-main-section {
          &:nth-child(1) {
            grid-area: first;
            justify-self: flex-start;
          }
          &:nth-child(2) {
            grid-area: second;
          }
          &:nth-child(3) {
            grid-area: third;
          }

          &-title {
            text-transform: capitalize;
            font-weight: 900;

            margin-bottom: 0;
            padding-bottom: 5px;
          }

          &-content {
            font-weight: 500;

            li {
              list-style: none;

              a {
                display: block;
                padding: 3px 0;
              }
            }
          }

          &.contact {
            .contact-default {
              display: flex;
              flex-direction: column;
              gap: 10px;

              a:last-child {
                text-decoration: underline;
              }
            }

            .contact-social-content {
              display: flex;
              gap: 10px;
            }
          }
        }
      }
    }

    &-copyright {
      background: var(--primary-color);
      color: black;

      .inner-page {
        padding: 6px 0;
        @media (max-width: 1192px) {
          padding-left: 25px;
          padding-right: 25px;
        }

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        > * {
          align-self: center;
        }

        > *:first-child {
          @media (max-width: 960px) {
            grid-column: 1/ span 3;
          }

          @media (max-width: 376px) {
            font-size: 11px;
          }
        }

        #footer-config-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;

          @media (max-width: 576px) {
            display: none;
          }
        }
      }
    }
  }
</style>
