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
  <div id="lobby" :class="{ intersected: !$store.state.menu.mobile }">

    <!-- single image -->
    <img id="lobby-image"
      v-if="lobby.lobby_type=='Single Image'"
      :src="lobby.lobby_single_image"
      onload="this.style.opacity = 1">

    <!-- slider -->
    <div class="swiper-container" v-if="lobby.lobby_type=='Images Slider'">
      <div class="swiper-wrapper">
        <a v-for="banner in lobby.lobby_slider" :key="banner.image" class="swiper-slide"
          :href="get_banner_item_link(banner)" :target="get_banner_item_target(banner)"
          :data-tippy-content="banner.link_to_post? ($i18n.locale == 'vi' ? 'Bấm xem chi tiết' : 'Click to view detail') : undefined">
            <img class="" :src="banner.image">
        </a>
      </div>

      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />
      <div class="swiper-pagination" />
    </div>

    <!-- video -->
    <video :src="lobby.lobby_single_video" autoplay v-if="lobby.lobby_type=='Single Video'"></video>

    <!-- virtual element as anchor -->
    <div id="above-content" style="position: absolute; bottom: 50px;"></div>

    <!-- scroll down button -->
    <a @click.prevent="scrollToContent"
      id="lobby-scroll-down-btn"
      class="animate__animated animate__fadeInUp">
      <span>
        {{ $t('lobby.scrollDownTitle') }}
      </span>
      <a-icon type="arrow-down" style="transform: rotate(0deg);" />
    </a>

  </div>
</template>

<script>
import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


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
    tippy('[data-tippy-content]', {
      theme: 'light',
      followCursor: true,
      plugins: [followCursor],
    });
  },
  methods: {
    get_banner_item_link(banner) {
      return banner.link_to_post?.slug ? `/news/${banner.link_to_post.slug}` : '#';
    },
    get_banner_item_target(banner) {
      return banner.link_to_post?.open_in_new_tab ? '_blank' : '_self';
    },

    scrollToContent() {
      const yCoordinate = document.getElementById('above-content').offsetTop - 20;
      window.scrollTo({
        top: yCoordinate,
        left: 0,
        behavior: 'smooth',
      });
    },
    initSwiperJS() {
      const speed = this.lobby.lobby_slider_props?.transition ?? 1750;
      
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: parseInt(speed),

        preventClicks: false,
        preventClicksPropagation: false,
        // simulateTouch: false,

        autoplay: {
          delay: this.lobby.lobby_slider_props?.delay ?? 3500,
        },

        effect: this.lobby.lobby_slider_props?.effect.toLowerCase() ?? 'fade',

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

      swiper.on('click', function(swiper, e) {
        // console.log(swiper, e);
        console.log(swiper.clickedSlide);
      });
    },
  },
};
</script>

<style lang="scss">
#lobby {
  height: 100vh;
  overflow: hidden;

  // position: relative;
  top: 0;
  z-index: 0;
  background-color: black;
  transition: all .75s;

  @media (min-width: 1024px) {
    margin-top: -90px;
  }

  @media (max-width: var(--mobile-threshold)) {
    margin-top: 70px;
    @media (max-width: 425px) {
      margin-top: 60px;
    }
  }

  @media (max-width: 1240px) {
    height: unset !important;
    .swiper-slide {
      img {
        object-position: unset !important;
      }
    }
  }
  @media (max-width: 1330px) {
    .swiper-slide {
      img {
        object-position: unset !important;
      }
    }
  }

  // single image
  img#lobby-image {
    max-width: 100%;
    object-fit: cover;
    // object-position: center -230px;
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
        color: var(--color-primary);
      }
    }

    .swiper-button-prev {
      left: 20px;
    }
    .swiper-button-next {
      right: 20px;
    }

    .swiper-slide {
      display: inline-block;
      position: relative;
      z-index: 1;

      @media (min-width: 1024px) {
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

      img {
        width: 100%;
        transition: all .75s ease-in-out;
        object-position: center -30px;
        transition: opacity 0.75s;
      }
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

    @media (max-width: 875px) {
      display: none;
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

  video {
    width: 100%;
    min-height: 50vh;
  }
}
</style>
