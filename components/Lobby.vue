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
  <div id="header-lobby">
    <!-- single image -->
    <img id="lobby-image"
      v-show="lobby.lobby_type=='Single Image'"
      :src="lobby.lobby_single_image"
      onload="this.style.opacity = 1">

    <!-- slider -->
    <div class="swiper-container" v-if="lobby.lobby_type=='Images Slider'">
      <div class="swiper-wrapper">
        <div v-for="banner in lobby.lobby_images_gallery" :key="banner" class="swiper-slide">
          <img class="" :src="banner" onload="this.style.opacity = 1">
        </div>
      </div>
      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />
      <div class="swiper-pagination" />
    </div>

    <!-- video -->
    <video :src="lobby.lobby_single_image" v-if="lobby.lobby_type=='Single Video'"></video>

    <!-- scroll down button -->
    <a href="#content"
      id="header-lobby-scroll-down-btn"
      class="animate__animated animate__fadeInUp">
      <span>
        {{ $t('lobby.scrollDownTitle') }}
      </span>
      <a-icon type="arrow-down" style="transform: rotate(0deg);" />
    </a>
  </div>
</template>

<script>

export default {
  computed: {
    lobby() {
      return this.$store.state.meta.lobby;
    },
  },
  data() {
    return {
    };
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/libs/swiperjs/swiper-bundle.min.css' },
      ],
      script: [
        {
          hid: 'swiper',
          src: '/libs/swiperjs/swiper-bundle.min.js',
          defer: false,
          callback: () => { this.initSwiperJS(); },
        },
      ],
    };
  },
  mounted() {
    //
  },
  methods: {
    initSwiperJS() {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        parallax: true,
        speed: 1750,

        autoplay: {
          delay: 3000,
        },

        effect: 'cube',
        coverflowEffect: {
          // rotate: 90,
          slideShadows: false,
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      swiper.update();
    },
  },
};
</script>

<style lang="scss">
#header-lobby {
  // height: 630px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 0;

  background-color: black;

  img#lobby-image {
    max-width: 100%;
    object-fit: cover;
    object-position: center -230px;
    background-attachment: fixed;

    opacity: 0;
    transition: all .75s ease-in-out;
  }

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-button-prev,
    .swiper-button-next {
      width: 20px;
      height: 20px;

      &::after {
        font-size: 18px;
        color: var(--primary-color);
      }
    }

    .swiper-button-prev {
      left: 20px;
    }
    .swiper-button-next {
      right: 20px;
    }

    .swiper-slide {
      position: relative;

      img {
        opacity: 0;
        width: 100%;
        transition: all .75s ease-in-out;
        // object-position: center -230px;
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.05));
    }
  }

  &-scroll-down-btn {
    position: absolute;
    z-index: 2;
    bottom: 30px;
    right: 15px;

    font-weight: bold;
    color: #fff;

    writing-mode: vertical-rl;
    text-orientation: mixed;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    transition: all .35s ease-in-out;

    span {
      color: #fff;
    }

    .anticon {
      transition: all .35s ease-in-out;
    }

    &:hover {
      gap: 30px;
    }
  }

  // black overlay
  &::after {
    // content: "";
    position: absolute;
    z-index: 1;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15));
  }
}
</style>
