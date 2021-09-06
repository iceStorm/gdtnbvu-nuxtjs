<template>
  <div id="root" :class="[{ mobile: classes.mobile }, classes.colorMode]">
    <LayoutHeader />

    <LayoutLobby />
    <LayoutSidebar />

    <main id="content">
      <Nuxt />
    </main>

    <!-- mobile menu -->
    <!-- <LayoutMobileMenu v-if="$store.state.menu.mobile" /> -->

    <LayoutSideFloatingButtons />
    <LayoutFooter />

    <LayoutFacebookChat />
  </div>
</template>

<script>
export default {
  // scrollToTop: false,
  head() {
    return {
      script: [
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
        },
      ],
    };
  },
  computed: {
    classes() {
      return {
        colorMode: this.$store.state.colorMode.current,
        mobile: this.$store.state.menu.mobile,
      };
    },
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      console.log(this.$route);
      this.$store.commit('menu/toggleSidebarVisibility', false);

      if (to.path !== '/') {
        // console.log('scrolling to #above-content..');
        this.scrollToContent();
      }
    });
  },
  methods: {
    scrollToContent() {
      const yCoordinate = document.getElementById('content').offsetTop - 50;
      window.scrollTo({
        top: yCoordinate,
        left: 0,
        // behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
body.mobile {
  overflow-y: hidden;
}

.inner-page {
  width: 1168px;
  margin: auto;

  position: relative;
  z-index: 1;

  @media (max-width: 1167px) {
    width: 100%;
  }
}

@media (max-width: 1192px) {
  #content, #footer {
    .inner-page {
      padding: 25px !important;
    }
  }
}

#root {
  transition: background .45s;
  background: var(--color-body);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  &.mobile {
    // overflow-y: hidden;
  }

  #content {
    flex: auto;

    @media (max-width: 1023px) {
      overflow: hidden;
    }

    .inner-page {
      padding: 35px 0;
    }
  }
}

#root.dark {
  img.ionicon {
    filter: invert(1);
  }
}

</style>
