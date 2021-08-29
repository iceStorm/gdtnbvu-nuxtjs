<i18n>
{
  "vi": {
    "contact": {
      "title": "Gia đình Tình nguyện BVU"
    }
  },
  "en": {
    "contact": {
      "title": "BVU Volunteer Team"
    }
  }
}
</i18n>

<template>
  <div class="contact-page">
    <div class="inner-page">

      <div class="contact-page-logo">
        <img :src="$store.state.meta.logo_url">
        <h2 class="title">{{ $t('contact.title') }}</h2>
      </div>

      <div class="contact-page-socials">
        <a v-for="item in social" :key="item.social_link"
          :data-tippy-content="item.social_name"
          :href="hrefConvert(item.social_link)" target="_blank">
          <img :src="item.social_icon">
        </a>
      </div>

      <div class="contact-page-info">
        <div class="contact-page-info-address">
          <ion-icon name="location"></ion-icon>
          <a href="https://goo.gl/maps/3UhndXsNeJo5mzqE6" target="_blank" class="text">{{ $store.state.meta.contact.address }}</a>
        </div>

        <div class="contact-page-info-phone">
          <ion-icon name="call"></ion-icon>
          <a :href="'tel:'+$store.state.meta.contact.phone" class="text">{{ $store.state.meta.contact.phone }}</a>
        </div>

        <div class="contact-page-info-email">
          <ion-icon name="mail"></ion-icon>
          <a :href="'mailto:'+$store.state.meta.contact.email" class="text">{{ $store.state.meta.contact.email }}</a>
        </div>
      </div>

      <LayoutAzdigi style="margin-top: 25px; margin-bottom: -20px;" :rounded="true" />

    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  scrollToTop: false,
  head() {
    return {
      title: 'Liên hệ',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Liên hệ với chúng tôi.' },
      ],
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
.contact-page {

  > .inner-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    img {
      width: 150px;
    }
    h2 {
      margin-top: -10px;
    }
  }

  &-socials {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
      width: 50px;
      height: 50px;

      padding: 10px;
      border-radius: 6px;
      background: #eee;

      &:hover {
        background: rgb(226, 226, 226);
      }

      img {
      }
    }
  }

  &-info {
    padding-top: 30px;

    display: grid;
    grid-template-areas:
    "address address"
    "phone mail";
    column-gap: 10px;
    row-gap: 7px;

    @media (max-width: 440px) {
      grid-template-areas:
      "address"
      "mail"
      "phone";
    }

    > * {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      // text-align: center;

      @media (max-width: 440px) {
        justify-content: flex-start;
      }

      // ion-icon {
      //   font-size: 14px;
      // }

      // address
      &:nth-child(1) {
        grid-area: address;
        // @media (max-width: 440px) {
        //   ion-icon {
        //     font-size: 16px;
        //     margin-top: -18px;
        //   }
        // }
      }
      // phone
      &:nth-child(2) {
        grid-area: phone;
      }
      // mail
      &:nth-child(3) {
        grid-area: mail;
      }
    }
  }
}
</style>
