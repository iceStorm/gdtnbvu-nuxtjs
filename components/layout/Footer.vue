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
      },
      "mainTitles": [
        "Đội Tình nguyện BVU",
        "Mạng xã hội",
        "Điều hướng",
        "Liên kết"
      ]
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
      },
      "mainTitles": [
        "BVU Volunteer Team",
        "Social networks",
        "Navigation",
        "Links"
      ]
    }
  }
}
</i18n>

<template>
  <footer id="footer" :class="{ mobile: $store.state.menu.mobile }">

    <!-- register section -->
    <div id="footer-mail-register">
      <div class="inner-page">

        <div v-if="false">
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
          <h1 class="" style="font-weight: 900;">{{ $t('footer.memberRegister.caption') }}</h1>
          <a class="btn" target="_blank"
            :href="$store.state.meta.contact.register_form">
            {{ $t('footer.memberRegister.registerButtonTitle') }}
          </a>
        </div>

      </div>
    </div>

    <!-- main section -->
    <!-- <footer-main /> -->
    <div id="footer-main">
      <div class="inner-page">
        <h1 class="title" style="margin-bottom: 0px; font-weight: 800;">Gia đình Tình nguyện BVU</h1>
        <h3 class="text" style="margin-bottom: 20px;">{{ slogan }}</h3>
        <h3 class="title" style="margin-bottom: 15px;">Kết nối những sinh viên đam mê hoạt động Tình nguyện - Thiện nguyện - Trải nghiệm</h3>

        <div id="footer-main-contact">
          <div class="contact-item" v-for="item in contactItems" :key="item.href">
            <span class="text">{{ item.caption[$i18n.locale] }}:</span>
            <a target="_blank" :href="hrefConvert(item.href)">
              {{ item.title }}
            </a>
          </div>
        </div>

        <div class="contact-social" style="margin-top: 10px;">
          <span class="text">{{ $t('footer.mainTitles[1]') }}: &nbsp;</span>
          <span class="contact-social-content">
            <a v-for="item in $store.state.meta.social_media_links"
              :key="item.social_link"
              :href="hrefConvert(item.social_link)"
              target="_blank">
              {{ item.social_name }}
            </a>
          </span>
        </div>

      </div>
    </div>

    <div id="footer-advertise">
      <div class="inner-page">
        <LayoutAzdigi :rounded="true" v-if="$store.state.menu.mobile"/>
      </div>
    </div>

    <!-- lowest section -->
    <div id="footer-lowest">
      <div class="inner-page">
        <LayoutAzdigi v-if="!$store.state.menu.mobile" />
        <span>Copyright &copy; 2021 - {{ $t('title') }}</span>
        <!-- <span></span> -->
        <!-- <span>Made by WordPress & NuxtJS with 💚</span> -->
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      contactItems: [
        {
          caption: {
            vi: 'Địa chỉ',
            en: 'Address',
          },
          title: this.$store.state.meta.contact.address,
          href: 'https://goo.gl/maps/3UhndXsNeJo5mzqE6',
        },
        {
          caption: {
            vi: 'Số điện thoại',
            en: 'Phone number',
          },
          title: this.$store.state.meta.contact.phone,
          href: this.$store.state.meta.contact.phone,
        },
        {
          caption: {
            vi: 'E-mail',
            en: 'E-mail',
          },
          title: this.$store.state.meta.contact.email,
          href: this.$store.state.meta.contact.email,
        },
      ],
    };
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
    slogan() {
      return this.$store.state.meta.slogan.filter((slogan) => slogan.locale === this.$i18n.locale)[0].value;
    },
  },
  methods: {
    registerNewsLetters() {
      console.log('clicked');
    },
    openMemberRegisterForm() {

    },
  },
};
</script>

<style lang="scss">
  #footer {
    position: relative;
    z-index: 0;

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
        justify-content: center;
        align-items: center;
        text-align: center;

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
          border-radius: 0px;
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
        text-align: center;
        padding: 20px 0;

        // display: grid;
        // grid-template-areas:
        // "first second third";
        // justify-items: center;
        // gap: 35px;

        // @media (max-width: 556px) {
        //   justify-items: normal;

        //   grid-template-areas:
        //   "first first"
        //   "second third";
        // }

        .footer-main-section {
          &:nth-child(1) {
            grid-area: first;
            justify-self: flex-start;
          }
          &:nth-child(2) {
            grid-area: second;
            @media (min-width: 557px) {
              justify-self: end;
            }
          }
          &:nth-child(3) {
            grid-area: third;
            @media (min-width: 557px) {
              justify-self: end;
            }
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

      &-contact {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20;
        flex: 1 0 auto;

        text-align: left;
        @media (max-width: 480px) {
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }

        .contact-item {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }

      .contact-social {
        display: flex;
        justify-content:center;
        text-align: left;
        @media (max-width: 480px) {
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    }

    &-advertise {
      // width: 100%;
      .inner-page {
        @media (max-width: 500px) {
          padding-bottom: 0 !important;
        }
      }
    }

    &-lowest {
      background: var(--color-primary);
      color: black;

      .inner-page {
        padding-top: 6px !important;
        padding-bottom: 6px !important;
        @media (max-width: 1192px) {
          padding-left: 25px !important;
          padding-right: 25px !important;
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
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
